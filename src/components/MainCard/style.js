import { makeStyles } from '@material-ui/core/styles';

const UseStyles=makeStyles({
    root:{
        width :364.43,
        height :239.43,
        marginTop:10,
        borderRadius: 20,
        padding: 15,
        background: "linear-gradient(to top right, #29323c,#485563,#29323c)",
        color: "#BBC2CC",
        transition: "0.5s",
        boxShadow: "0 12px 12px rgba(0,0,0,0.5)",
        '&:hover':{
            // transform: "perspective(1000px)"
        }
    },
    h5:{
        fontFamily: "poppins",
        marginTop:40,
        fontWeight:900,
        color: "#1D262C"
    },
    png: {
        width: 25.13,
        height: 29,
        margin: 15,
        display: "inline-block"
    },
    visa:{
        width: 58.89,
        height: 26.52,
        margin: 15,
        float: "right"
    },
    number:{
        width:50,
        height:11,
        fontFamily:"poppins",
        marginTop: 50, 
        marginLeft:35,
        fontSize:10,
        lineHeight: "13px",
        textShadow:"2px 2px #000",
    },
    acc:{
        fontSize:20,
        lineHeight: "24px",
        marginLeft:35,
        fontFamily: "Kelly Slab, cursive",
        letterSpacing:3,
        fontWeight: 500,
        textShadow:"2px 2px #000",
    },
    logo:{
        width: 37.23,
        height: 26.71,
        float:"right",
        marginTop:-30,
        marginRight:35
    },
    person:{
        display: "flex",
        justifyContent:"space-between",
        margin: 35,
        fontSize:14,
        fontFamily: "Kelly Slab, cursive",
        letterSpacing:3,
        borderTop: "1px solid #BBC2CC",
        textShadow:"2px 2px #000",
    },
    h3:{
        fontSize:13,
    },
})
export default UseStyles