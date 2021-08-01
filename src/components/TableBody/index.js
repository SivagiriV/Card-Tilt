import React from 'react';
import {TableBody,TableCell,TableRow} from '@material-ui/core'
import useStyle from './style'
function Index() {
    const classes=useStyle();
    const ima=<div className={classes.main}></div>
    const orange=<div className={classes.orange}></div>
    const blue=<div className={classes.blue}></div>
    const span=<span className={classes.span}>&bull;&bull;&bull;</span>
    return (
        <TableBody>
            <TableRow>
                <TableCell align="left" className={classes.zero}>{ima}&nbsp;Charge Back</TableCell>
                <TableCell align="left" className={classes.one}>{orange}&nbsp;PAYMENT</TableCell>
                <TableCell align="left" className={classes.date}>Mar20,2021</TableCell>
                <TableCell align="right" className={classes.four}>-$140,20</TableCell>
                <TableCell align="center">{span}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left" className={classes.zero}>{ima}&nbsp;Information Requested</TableCell>
                <TableCell align="left" className={classes.two}>{blue}&nbsp;REFUND</TableCell>
                <TableCell align="left" className={classes.date}>Mar20,2021</TableCell>
                <TableCell align="right" className={classes.four}>+$40,20</TableCell>
                <TableCell align="center">{span}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left" className={classes.zero}>{ima}&nbsp;Settled</TableCell>
                <TableCell align="left" className={classes.one}>{orange}&nbsp;PAYMENT</TableCell>
                <TableCell align="left" className={classes.date}>Mar20,2021</TableCell>
                <TableCell align="right" className={classes.four1}>+$74.70</TableCell>
                <TableCell align="center">{span}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left" className={classes.zero}>{ima}&nbsp;Authorised</TableCell>
                <TableCell align="left" className={classes.purple}>{blue}&nbsp;CREDIT</TableCell>
                <TableCell align="left" className={classes.date}>Mar19,2021</TableCell>
                <TableCell align="right" className={classes.four}>-$1,20</TableCell>
                <TableCell align="center">{span}</TableCell>
            </TableRow>
        </TableBody>
    )
}
export default Index

