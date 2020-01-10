import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BasicLayout from './components/Basiclayout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <BasicLayout />
    </BrowserRouter>
  );
};

export default App;
