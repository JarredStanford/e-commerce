import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth0 } from "./react-auth0-wrapper";

import PlayerCard from './Player/PlayerCard'

const Dashboard = () => {

    const [player, setPlayer] = useState()
    const [stats, setStats] = useState()

    useEffect(() => {
        const getPlayer = async () => {
            const player = await axios.get("http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='trout%25'")


            const stats = await axios.get("http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2018'&player_id='545361'")
            setPlayer(player.data.search_player_all.queryResults.row)
            setStats(stats.data.sport_hitting_tm.queryResults.row)
        }

        getPlayer()
    }, [])

    console.log(player)
    console.log(stats)

    const { loginWithRedirect } = useAuth0();

    //if (!player || !stats) { return 'loading..' }

    return (
        <>
            <button onClick={() => loginWithRedirect({})}>Login</button>
            {{//<PlayerCard player={player} stats={stats} />
            }}
        </>
    )

}

export default Dashboard