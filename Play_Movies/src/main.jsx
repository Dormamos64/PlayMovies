import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App.jsx'


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
        <Route path='/' element={<home />} />
        <Route path='movie/:id' element={<home />} />
        <Route path='search' element={<home />} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
