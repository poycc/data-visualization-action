import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BasicLayout from './components/BasicLayout';

const App: React.FC = () => (
  <BrowserRouter>
    <BasicLayout />
  </BrowserRouter>
);

export default App;
