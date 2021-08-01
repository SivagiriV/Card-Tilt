import React,{useEffect} from 'react'
import {Typography,CardMedia} from '@material-ui/core';
import useStyles from './style';
import Exclude from '../Asserts/images/exclu.png'
import Visa from '../Asserts/images/Vector.png'
import Logo from '../Asserts/images/Mask Group.png'
function Index() {
    const classes = useStyles();
    useEffect(() => {
        const Card=document.getElementById("card")
        const state ={
            rect:undefined,
        };
        const handleMouseMove = (e) =>{
            if(!state.rect){
                state.rect=Card.getBoundingClientRect();
                console.log(state.rect)
            }
            // const {x,y}=Card.getBoundingClientRect();
            const CardWidth=state.rect.width;
            const CardHeight=state.rect.height;
            const centerX=state.rect.left + CardWidth/2;
            const centerY=state.rect.top + CardHeight/2;
            const mouseX = e.clientX-centerX;
            const mouseY = e.clientY-centerY;
            const rotateX = ((-1)*25*mouseY/(CardHeight/2));
            const rotateY = ((-1)*25*mouseX/(CardWidth/2));

            Card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            Card.style.setProperty("--x", e.clientX - state.rect.x);
            Card.style.setProperty("--y", e.clientY - state.rect.y);
        }
        Card.addEventListener('mousemove',handleMouseMove);
        const handleMouseLeave = () =>{
            Card.style.transform =`perspective(1000px) rotateX(0deg) rotateY(0deg)`
        }
        Card.addEventListener('mouseleave',handleMouseLeave);
        return () => {
            Card.removeEventListener("mousemove",handleMouseMove)
        }
    },[]);
    return (
        <div>
            <Typography variant="h5" className={classes.h5}>Your Credit Card</Typography>
            <div id="card" className={classes.root}>
                <CardMedia
                    className={classes.png}
                    image={Exclude}
                />
                <CardMedia
                    className={classes.visa}
                    image={Visa}
                />
                <Typography className={classes.number} variant="h6">Number</Typography>
                <Typography className={classes.acc} variant="h1">**** **** 002 0329</Typography>
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
            </div>
        </div>
    )
}
export default Index





