import React from 'react'
import {Table,TableContainer,Typography} from '@material-ui/core';
import TableBody from '../TableBody'
import useStyle from './style'

function Index(){
    const classes=useStyle();
    return (
    <TableContainer className={classes.root}>
      <Typography variant="h5" className={classes.h5} align="left">Recent Payments</Typography>
      <Table className={classes.table} aria-label="simple table">
        <TableBody />
      </Table>
    </TableContainer>
    )
}

export default Index
