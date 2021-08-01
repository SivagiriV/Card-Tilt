import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/poppins'

const useStyle=makeStyles({
    root:{
        height:670,
        width:324,
        marginTop:40,
    },
    card:{
        marginTop:20,
        textAlign: "center",
        boxShadow: "0 0 12px 7px rgba(0,0,0,0.1)",
    },
    prof:{
        width:38,
        height:38,
        margin:"auto"
    },
    h5:{
        fontFamily: "poppins",
        fontWeight:900,
        color: "#1D262C"
    },
    subtitle1:{
        color: "#41477A",
    },
    subtitle2:{
        color: "#41477A",
        fontWeight: 600,
        fontSize: "10px",
        lineHeight: "15px",
        fontFamily: "poppins",
    },
    CardContent:{
        borderTop: "1px solid #D5D6DA",
        borderBottom: "1px solid #D5D6DA",
        width: 268,
        margin: "auto"
    },
    caption:{
        fontSize:"9px",
        color: "#6F7399",
        lineHeight: "13px",
        fontWeight: 300,
        fontFamily: "Poppins",
    },
    caption1:{
        fontSize:"9px",
        color: "#6F7399",
        lineHeight: "13px",
        fontWeight: 300,
        fontFamily: "Poppins",
        marginTop: 15
    },
    body2:{
        fontSize: 18,
        fontFamily: "poppins",
        fontWeight: 700,
        color:"#1D262C"
    },
    down:{
        width: 262,
        height: 74,
        margin:"auto",
        borderBottom: "1px solid #D5D6DA"
    },
    last:{
        margin:"auto",
        width: 280,
        height: 80,
        display: "flex",
        gap: 30,
        justifyContent: "center",
        borderTop: "1px solid #D5D6DA",
        borderBottom: "1px solid #D5D6DA"
    },
    last2:{
        display: "flex",
        justifyContent: "space-between",
    }
    
})
export default useStyle