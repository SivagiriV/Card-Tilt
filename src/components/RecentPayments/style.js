import {makeStyles} from '@material-ui/core/styles'
import '@fontsource/poppins'

const useStyle=makeStyles({
    root:{
        marginLeft: "30px"
    },
    table:{
        width:842,
        height:255,
        fontFamily:"poppins",
    },
    h5:{
        fontFamily: "poppins",
        marginTop:40,
        marginLeft:20,
        fontWeight:900,
        color: "#1D262C"
    },
    span:{
        textAlign:"center",  
    }
})
export default useStyle