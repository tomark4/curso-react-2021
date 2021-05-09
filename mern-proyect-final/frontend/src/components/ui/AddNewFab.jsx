import { Button, Icon, makeStyles } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux';
import { uiOpenModal } from '../../actions/ui';

const useStyles = makeStyles((theme) => ({
    boton:{
        borderRadius:"100%",
        position:'fixed',
        fontSize: "30px",
        padding: '25px',
        bottom: '25px',
        right:'25px',
        backgroundColor: "#304ffe",
        color:"#fff",
        "&:hover":{
            backgroundColor:"#536dfe"
        }
    }
}));

const AddNewFab = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch( uiOpenModal() )
    }

    return (
        <div>
            <Button className={classes.boton}
            onClick={handleClick}>
                <Icon>add</Icon>
            </Button>
        </div>
    )
}

export default AddNewFab
