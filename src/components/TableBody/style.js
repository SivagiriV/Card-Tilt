import {makeStyles} from '@material-ui/core/styles'
import '@fontsource/poppins'

const useStyle=makeStyles({
    span:{
        padding: "5px",
        background: "#dcdcdc",
        borderRadius: "50%",
        color: "rgba(0,0,0,0.2)",
        cursor: "pointer"
    },
    main:{
        border: "3px solid #FFF",
        backgroundColor: "#F3477A",
        borderRadius: "50%",
        boxShadow: "0 0 2px #F3477A",
        height: 5,
        display: "inline-block",
        width:5
    },
    orange:{
        border: "3px solid #FFF",
        backgroundColor: "#F2994A",
        borderRadius: "50%",
        boxShadow: "0 0 2px #F2994A",
        height: 5,
        display: "inline-block",
        width:5
    },
    blue:{
        border: "3px solid #FFF",
        backgroundColor: "#3A91C1",
        borderRadius: "50%",
        boxShadow: "0 0 2px #3A91C1",
        height: 5,
        display: "inline-block",
        width:5
    },
    zero:{
        fontFamily:"poppins",
        fontWeight:600
    },
    one:{
        fontFamily:"poppins",
        color: '#F2994A',
    },
    two:{
        fontFamily:"poppins",
        color: "#3A91C1",
    },
    date:{
        color: "#5C626D",
        fontFamily:"poppins",
    },
    four:{
        color: "#EB5757",
        fontFamily:"poppins",
        fontWeight: 600
    },
    four1:{
        color: "#219653",
        fontFamily:"poppins",
        fontWeight: 600
    },
    purple:{
        fontFamily:"poppins",
        color: "#5A4C79"
    }
})
export default useStyle