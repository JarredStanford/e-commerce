import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Route, Switch, Router } from "react-router-dom";

import { Grommet } from 'grommet'

import Dashboard from './components/Dashboard'

function App() {

  return (
    <>
      <Switch>
        <Route path='/' component={Dashboard} />
      </Switch>
      <Switch>
        <Route exact path='/login' component={Dashboard} />
      </Switch>
    </>
  )

}

export default App;
