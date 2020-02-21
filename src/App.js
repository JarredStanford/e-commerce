import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { Route, Switch, Router } from "react-router-dom";

import { Grommet } from 'grommet'

import Dashboard from './components/Dashboard'

function App() {

  const [code, setCode] = useState()

  const client_id = 'dj0yJmk9b2s1SElHWlhnNW9VJmQ9WVdrOWR6RkROV1ZxTjJzbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTRm'
  const client_secret = '715ae4395b403ff6d47c66aaaa6adf7c0cd5b43a'

  const auth_header = Buffer.from(`${client_id}:${client_secret}`, `binary`).toString(`base64`)

  console.log(auth_header)

  const call = async () => {
    const games = await axios.get('https://baseball-league.herokuapp.com/data/player/mlb.p.8861/')
    console.log(games)
  }

  useEffect(() => {
    if (window.location.search.includes("code=")) {
      console.log(window.location.search)
      const newCode = window.location.search.substr(window.location.search.indexOf('=') + 1)
      setCode(newCode)
    }
  })

  useEffect(() => {
    if (code) {
      const getToken = async () => {
        const options = {
          'Authorization': `Basic ${auth_header}`,
          'Content-Type': 'application/json'
        }

        const token = await axios.post('https://api.login.yahoo.com/oauth2/get_token/', {
          'grant_type': 'authorization_code',
          'redirect_uri': 'https://sad-jang-fc478d.netlify.com/',
          'code': code
        }, options, { withCredentials: true })

        console.log(token)
      }


      getToken()
    }
  })


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
