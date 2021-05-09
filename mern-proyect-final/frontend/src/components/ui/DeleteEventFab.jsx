import { Button, Icon, makeStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { eventDelete } from '../../actions/events';

const useStyles = makeStyles((theme) => ({
    boton:{
        borderRadius:"100%",
        position:'fixed',
        fontSize: "30px",
        padding: '25px',
        bottom: '25px',
        borderLeftStyle:'25px',
        backgroundColor: "#e53935",
        color:"#fff",
        "&:hover":{
            backgroundColor:"#ef5350"
        }
    }
}));


const DeleteEventFab = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch( eventDelete() );
    }

    return (
        <div>
            <Button className={classes.boton}
            color="secondary"
            onClick={handleClick}>
                <Icon>delete</Icon>
            </Button>
        </div>
    )
}

export default DeleteEventFab
