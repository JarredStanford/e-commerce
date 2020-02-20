import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

import { Grommet } from 'grommet'

import Dashboard from './components/Dashboard'

import { useAuth0 } from "./components/react-auth0-wrapper";

function App() {

  const { loading, user, isAuthenticated } = useAuth0();

  const call = async () => {
    const games = await axios.get('https://baseball-league.herokuapp.com/data/player/mlb.p.8861/')
    console.log(games)
  }



  return (
    <Grommet plain>
      <Dashboard />
      <button onClick={() => call()}>nah</button>
    </Grommet>
  )

}

export default App;
