import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { Box, Image, Text, Table, TableHeader, TableRow, TableCell, TableBody } from 'grommet'

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

    if (!player || !stats) { return 'loading...' }

    return (
        <Box width='medium' direction='row' pad='small'>
            <Image fill src={`https://securea.mlb.com/mlb/images/players/head_shot/${player.player_id}.jpg`} alt={'Player Image'} style={{ width: '150px' }} />
            <Box>
                <Box direction='row'>
                    <Text margin={{ 'horizontal': 'small' }}>{player.name_display_first_last}</Text>
                    <Text margin={{ 'horizontal': 'small' }}>{player.position}</Text>
                    <Text margin={{ 'horizontal': 'small' }}>{player.bats}</Text>
                </Box>
                <Box>
                    <Text margin={{ 'horizontal': 'small' }} size='small'>{player.team_full}</Text>
                </Box>
                <Box margin={{ 'vertical': 'small' }}>
                    <Table caption='Fantasy Stats'>
                        <TableHeader>
                            <TableRow>
                                <TableCell><Text size='xsmall'>{'Runs'}</Text></TableCell>
                                <TableCell><Text size='xsmall'>{'RBI'}</Text></TableCell>
                                <TableCell><Text size='xsmall'>{'HR'}</Text></TableCell>
                                <TableCell><Text size='xsmall'>{'SB'}</Text></TableCell>
                                <TableCell><Text size='xsmall'>{'.AVG'}</Text></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><Text size='xsmall'>{stats.r}</Text></TableCell>
                            </TableRow>
                        </TableHeader>
                    </Table>
                </Box>
            </Box>

        </Box>
    )

}

export default Dashboard