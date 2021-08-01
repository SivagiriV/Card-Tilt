import React from 'react'
import useStyles from './style'
import {Paper,IconButton,InputBase} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import Notification from '../Asserts/images/notifications.svg';
import Profile from '../Asserts/images/Group 18271.svg';
function Index() {
    const classes=useStyles();
    return (
        <Paper component="form" variant="outlined" className={classes.root}>
            <IconButton className={classes.search}>
                <SearchIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search for any training you want"
            />
            <IconButton >
                <img src={Notification} alt="notification"></img>
            </IconButton>
            <IconButton>
                <img src={Profile} alt="profile"></img>
            </IconButton>
        </Paper>
    )
}
export default Index
