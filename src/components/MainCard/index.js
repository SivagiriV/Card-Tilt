import React from 'react'
import {Card,Typography,CardMedia} from '@material-ui/core';
import useStyles from './style';
import Exclude from '../Asserts/images/exclu.png'
import Visa from '../Asserts/images/Vector.png'
import Logo from '../Asserts/images/Mask Group.png'
function Index(props) {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h5" className={classes.h5}>Your Credit Card</Typography>
            <Card className={classes.root} style={props.style}>
                <CardMedia
                    className={classes.png}
                    image={Exclude}
                />
                <CardMedia
                    className={classes.visa}
                    image={Visa}
                />
                <Typography className={classes.number} variant="h6">Number</Typography>
                <Typography className={classes.acc} variant="h1" color="text.secondary">**** **** 222 0034</Typography>
                <CardMedia
                    className={classes.logo}
                    image={Logo}
                />
                <div className={classes.person}>
                    <h3>Craig S.</h3>
                    <div>
                        <h3 className={classes.h3}>09/20</h3>
                    </div>
                    
                </div>
            </Card>
        </div>
    )
}
export default Index



