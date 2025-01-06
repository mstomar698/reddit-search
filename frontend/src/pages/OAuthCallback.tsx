import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const OAuthCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOAuthCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get('code');

      if (!code) {
        console.error('No code found in URL');
        navigate('/'); 
        return;
      }

      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BACKEND_URL}/reddit/token`,
          { code }
        );

        const { access_token } = response.data;

        localStorage.setItem('reddit_access_token', access_token);

        navigate('/');
      } catch (error) {
        console.error('Error during OAuth token exchange:', error);
        navigate('/'); 
      }
    };

    handleOAuthCallback();
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p>Processing your authentication...</p>
    </div>
  );
};

export default OAuthCallback;
