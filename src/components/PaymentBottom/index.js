import React from 'react'
import {Typography,CardContent} from '@material-ui/core';
import useStyle from '../Payment/style'

function Index() {
    const classes= useStyle()
    return (
        <div>
           <CardContent className={classes.last}>
                <div>
                     <p className={classes.caption} align="left">Billing Plan</p>
                     <p className={classes.subtitle2} align="left">275 New North <br/>Road,London‎ </p>
                 </div>
                 <div>
                     <p className={classes.caption} align="left">Invoice Number</p>
                     <p className={classes.subtitle2} align="left">49682</p>
                 </div>
                 <div>
                     <p className={classes.caption} align="left">Due Date</p>
                     <p className={classes.subtitle2} align="left">15 March,2020</p>
                 </div> 
            </CardContent>
                <div className={classes.last2}>
                    <CardContent>
                        <Typography className={classes.caption}>Subtotal:<span className={classes.subtitle2}>$250.00</span></Typography>
                        <Typography className={classes.caption} align="right">Tax:<span className={classes.subtitle2}>$25.00</span></Typography>
                    </CardContent> 
                    <CardContent>
                        <Typography className={classes.caption1}>Amount Due:<span className={classes.subtitle2}>$275.00</span></Typography>
                    </CardContent> 
                </div> 
        </div>
    )
}
export default Index

