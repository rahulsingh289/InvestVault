import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import HomePage from './landing_Page/home/HomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<signup />} />
      <Route path="/about" element={<aboutPage />} />
      <Route path="/product" element={<productPage />} />
      <Route path="/pricing" element={<pricingPage />} />
      <Route path="/support" element={<supportPage />} />
    </Routes>
  </BrowserRouter>
);


