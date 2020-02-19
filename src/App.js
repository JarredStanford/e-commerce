import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Grommet } from 'grommet'

import Dashboard from './components/Dashboard'

function App() {


  return (
    <Grommet plain>
      <Dashboard />
    </Grommet>
  )

}

export default App;
