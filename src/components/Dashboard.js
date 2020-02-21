import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth0 } from "./react-auth0-wrapper";

import PlayerCard from './Player/PlayerCard'

const Dashboard = () => {

    const [player, setPlayer] = useState()
    const [stats, setStats] = useState()
    const [code, setCode] = useState()

    useEffect(() => {
        const getPlayer = async () => {
            const player = await axios.get("http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='trout%25'")


            const stats = await axios.get("http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2018'&player_id='545361'")
            setPlayer(player.data.search_player_all.queryResults.row)
            setStats(stats.data.sport_hitting_tm.queryResults.row)
        }

        getPlayer()
    }, [])


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

    const auth = async () => {
        const token = await axios.post('http://localhost:4000/auth/', { code })
        console.log(token)
    }


    //if (!player || !stats) { return 'loading..' }

    return (
        <>
            <button onClick={() => auth()}>login</button>
            <a href="https://api.login.yahoo.com/oauth2/request_auth?client_id=dj0yJmk9b2s1SElHWlhnNW9VJmQ9WVdrOWR6RkROV1ZxTjJzbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTRm&redirect_uri=https://sad-jang-fc478d.netlify.com/&response_type=code&language=en-us">yo</a>
        </>
    )

}

export default Dashboard