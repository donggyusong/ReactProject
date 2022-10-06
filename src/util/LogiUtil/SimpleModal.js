import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import {Button, CardContent, CardActions, Divider, Grid, IconButton, Modal, Typography} from '@mui/material';

// project imports
import MainCard from 'template/ui-component/cards/MainCard';

// assets
import CloseIcon from '@mui/icons-material/Close';
import {DialogTitle} from "@material-ui/core";

// generate random
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

// modal position
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top      : `${top}%`,
        left     : `${left}%`,
        transform: `translate(-${top}%, -${left}%)`
    };
}

const Body = React.forwardRef(({modalStyle, handleClose, title, contents, modalValue}, ref) => (

    <div ref={ref} tabIndex={-1}>
        <MainCard
            style={modalStyle}
            sx={{
                position : 'absolute',
                width    : {xs: 500, lg: 700},
                top      : '50%',
                left     : '50%',
                transform: 'translate(-50%, -50%)'
            }}
            title={title}
            content={false}
            secondary={
                <IconButton onClick={handleClose} size="large">
                    <CloseIcon fontSize="small"/>
                </IconButton>
            }
        >

                <CardContent>
            {
                modalValue.map( (modalValue) => {
                return (<Typography variant="body1" sx={{mt: 2}}>{modalValue.label} : {modalValue.value} </Typography>)
            })}
                </CardContent>


            <Divider/>
            <CardActions>
                <SimpleModal/>
            </CardActions>
        </MainCard>
    </div>
));

Body.propTypes = {
    modalStyle : PropTypes.object,
    handleClose: PropTypes.func
};


// ==============================|| SIMPLE MODAL ||============================== //

export default function SimpleModal(props) {
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);


    return (
        <Grid container justifyContent="flex-end">
            <Modal open={props.open} onClose={props.close} aria-labelledby="simple-modal-title"
                   aria-describedby="simple-modal-description">
                <Body modalStyle={modalStyle} handleClose={props.close} title={props.title} contents={props.contents}
                      modalValue={props.modalValue}/>
            </Modal>
        </Grid>
    );
}