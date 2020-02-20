import React from 'react'

import { Table, TableHeader, TableRow, TableCell, TableBody, Text } from 'grommet'

const StatTable = props => {

    const { r, rbi, hr, sb, avg } = props.stats

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableCell><Text size='xsmall'>{'Runs'}</Text></TableCell>
                    <TableCell><Text size='xsmall'>{'RBI'}</Text></TableCell>
                    <TableCell><Text size='xsmall'>{'HR'}</Text></TableCell>
                    <TableCell><Text size='xsmall'>{'SB'}</Text></TableCell>
                    <TableCell><Text size='xsmall'>{'.AVG'}</Text></TableCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell><Text size='xsmall'>{r}</Text></TableCell>
                    <TableCell><Text size='xsmall'>{rbi}</Text></TableCell>
                    <TableCell><Text size='xsmall'>{hr}</Text></TableCell>
                    <TableCell><Text size='xsmall'>{sb}</Text></TableCell>
                    <TableCell><Text size='xsmall'>{avg}</Text></TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default StatTable