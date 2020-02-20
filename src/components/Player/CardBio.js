import React from 'react'

import { Box, Text } from 'grommet'

const CardBio = props => {
    return (
        <Box>
            <Box direction='row'>
                <Text margin={{ 'horizontal': 'small' }}>{props.player.name_display_first_last}</Text>
                <Text margin={{ 'horizontal': 'small' }}>{props.player.position}</Text>
                <Text margin={{ 'horizontal': 'small' }}>{props.player.bats}</Text>
            </Box>
            <Box>
                <Text margin={{ 'horizontal': 'small' }} size='small'>{props.player.team_full}</Text>
            </Box>
        </Box>
    )
}

export default CardBio