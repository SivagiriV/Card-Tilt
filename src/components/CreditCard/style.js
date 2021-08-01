import { makeStyles } from '@material-ui/core/styles'
const UseStyles=makeStyles({
    root:{
        width :364.43,
        height :239.43,
        fontFamily:"Poppins",
        marginTop: 10,
        borderRadius: 20,
        position: "relative",
        background: "linear-gradient(to top right,#16044a,#453f78,#16044a)",
        color: "rgb(202,213,218)",
        boxShadow: "0 12px 12px rgba(0,0,0,0.5)",
        padding: 15,
        transition:"0.2s",
        // transform: "perspective(1000px)",
        textShadow:"12px 12px #010101",
        overflow:"hidden",  
        '&::after':{
            content: '""',
            position: "absolute",
            top: "calc(var(--y, 0) * 1px - 182px)",
            left: "calc(var(--x, 0) * 1px - 120px)",
            width: "364.43px",
            height: "239.43px",
            background: "radial-gradient(white, #3984ff00 80%)",
            opacity: 0,
            transition: "opacity 0.2s",
        },   
        '&:hover':{
            '&::after':{
                opacity: 0.4
            }
        },  
    },   
    h5:{
        marginTop:40,
        opacity: 0,
    },
    png: {
        width: 25.13,
        height: 29,
        margin: 15,
        display: "inline-block",
        transform: "translateZ(50px)",
    },
    visa:{
        width: 58.89,
        height: 26.52,
        margin: 15,
        float: "right",
        transform: "translateZ(50px)",
    },
    number:{
        width:50,
        height:11,
        marginTop: 50, 
        marginLeft:35,
        fontSize:10,
        fontFamily: "poppins",
        textShadow:"2px 2px #000",
        lineHeight: "13px",
        transform: "translateZ(50px)",
        transformStyle: "preserve-3d",
    },
    acc:{
        fontSize:20,
        lineHeight: "24px",
        marginLeft:35,
        textShadow:"2px 2px #010101",
        fontFamily: "Kelly Slab, cursive",
        letterSpacing:3,
        fontWeight: 500,
        // transform: "translateZ(50px)",
        transformStyle: "preserve-3d",
        
    },
    logo:{
        width: 37.23,
        height: 26.71,
        float:"right",
        marginTop:-30,
        marginRight:35,
        transform: "translateZ(50px)",
    },
    person:{
        display: "flex",
        justifyContent:"space-between",
        margin: 35,
        transform: "translateZ(50px)",
        fontSize:14,
        textShadow:"2px 2px #000",
        fontFamily: "Kelly Slab, cursive",
        borderTop: "1px solid #d1d3d4"
    },
    h3:{
        fontSize: 13,
        letterSpacing: 3
    },
})
export default UseStyles