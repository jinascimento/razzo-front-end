import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
    </BrowserRouter>
  );
};
