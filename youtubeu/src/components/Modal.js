import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function VideoModal({videoId, title, open, handleClose}) {
    return (
        <div>
            <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        <div style={{width: '100%', height: '0', paddingBottom: '56.25%', position: 'relative'}}>
                          <iframe style={{position: 'absolute', width: '100%', height: '100%'}}
                                  id="ytplayer" type="text/html" width="640" height="360"
                                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                                  frameborder="0"></iframe>
                        </div>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    )
}