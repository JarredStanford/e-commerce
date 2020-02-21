import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Route, Switch, Router } from "react-router-dom";

import { Grommet } from 'grommet'

import Dashboard from './components/Dashboard'
import PrivateRoute from './components/utils/PrivateRoute'

import { useAuth0 } from "./components/react-auth0-wrapper";

function App() {

  const { loading, user, isAuthenticated } = useAuth0();

  const call = async () => {
    const games = await axios.get('https://baseball-league.herokuapp.com/data/player/mlb.p.8861/')
    console.log(games)
  }

  useEffect(() => {
    if (window.location.search.includes("code=")) {
      console.log(window.location.search)
    }
  })

  console.log(isAuthenticated, user)

  if (loading) {
    return (
      'loading...'
    );
  }


  return (
    <>
      <Switch>
        <Route exact path='/' component={!isAuthenticated && Dashboard} />
      </Switch>
      <Switch>
        <Route exact path='/login' component={Dashboard} />
      </Switch>
    </>
  )

}

export default App;
