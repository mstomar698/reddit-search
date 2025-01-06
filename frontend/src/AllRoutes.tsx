import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OAuthCallback from './pages/OAuthCallback';

const AllRoutes = () => {
  return (
    <div className="overflow-x-hidden">
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oauth/callback" element={<OAuthCallback />} />
        </Routes>
      </main>
    </div>
  );
};

export default AllRoutes;
