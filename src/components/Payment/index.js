import React from 'react'
import useStyle from './style'
import {Card,Typography,CardMedia,CardContent} from '@material-ui/core';
import PaymentBottom from '../PaymentBottom';
import Profile from '../Asserts/images/Group 18359.svg'
import Note from '../Asserts/images/Group 18370.svg'
function Index(){
    const classes=useStyle()
    return (
        <div className={classes.root}>
        <Typography variant="h5" align="left" className={classes.h5}>Payment Details</Typography>
           <Card className={classes.card}>
               <CardContent>
                    <CardMedia
                        className={classes.prof}
                        image={Profile}
                    />
                    <Typography className={classes.subtitle1} variant="subtitle1">Adison Rosser</Typography>
                    <Typography variant="subtitle2">Mar 20, 2021</Typography>
               </CardContent>
               <CardContent className={classes.CardContent}>
                    <Typography className={classes.caption} variant="caption">Amount Due</Typography>
                    <Typography className={classes.body2}>$250.00</Typography>
                    <Typography className={classes.caption}>Visa $250.00</Typography>
               </CardContent>
               <CardContent>
                   <Typography className={classes.caption} variant="caption">Billing Plan</Typography>
                   <Typography className={classes.subtitle1} variant="subtitle1">Company Start</Typography>
               </CardContent>
               <CardContent>
                    <img src={Note} className={classes.down} alt="note"/>
               </CardContent>
               <PaymentBottom />
           </Card>
        </div>
    )
}
export default Index
