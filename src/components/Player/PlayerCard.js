import React from 'react'

import CardBio from './CardBio'
import StatTable from './StatTable'

import { Box, Image } from 'grommet'

const PlayerCard = props => {

    return (
        <Box
            width='medium'
            pad='small'
            elevation='medium'
            margin='small'
            direction='row-responsive'
            border='all'
            round='small'>
            <Image fill src={`https://securea.mlb.com/mlb/images/players/head_shot/${props.player.player_id}.jpg`} alt={'Player Image'} style={{ width: '125px', border: '1px solid black' }} />
            <Box justify='between' direction='column'>

                <CardBio player={props.player} />

                <Box margin='small'>
                    <StatTable stats={props.stats} />
                </Box>
            </Box>
        </Box>
    )
}

export default PlayerCard