import React from 'react';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage.tsx';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
