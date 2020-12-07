import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import CustomContainer from '../partials/CustomContainer';
import AppBar from '@material-ui/core/AppBar';
import Img from 'gatsby-image';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './styles.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const ModalView = ({ open, handleClose, img, desc, title, price, data}) => {
    const matches = useMediaQuery('(max-width:499px)');
    
    const TheImageYouWant = data.filter(edge => edge.node.fluid.originalName === img)
    .map(myImage => <Img fluid={myImage.node.fluid} />);

    return (
            matches ? 
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <div className = "modal">
                    <AppBar style = {{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                        <CustomContainer verticalPadding  = {false}>
                            <div className = "OverView">
                                <div className = "OverView_Image">
                                    {TheImageYouWant}
                                </div>
                                <div className = "OverView_text">
                                    <h4 className = "title">
                                        <strong>Plato</strong>: {title}
                                    </h4>
                                    {desc !== "" && 
                                        <h4 className = "desc">
                                            <strong>Descipcion</strong>: {desc}
                                        </h4>
                                    }
                                    {price !== "" && 
                                        <h4>
                                            <strong>Precio</strong>: {price}
                                        </h4>
                                    }
                                </div>
                            </ div>
                        </CustomContainer>
                </div>
            </Dialog> :
            <Dialog maxWidth="sm" onClose={handleClose} TransitionComponent={Transition} open={open}>
                <div className = "modal">
                    <DialogContent dividers>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />   
                        </IconButton>
                        <CustomContainer verticalPadding  = {false}>
                            <div className = "OverView">
                                <div className = "OverView_Image">
                                    {TheImageYouWant}
                                </div>
                                <div className = "OverView_text">
                                    <h4 className = "title">
                                        <strong>Plato</strong>: {title}
                                    </h4>
                                    {desc !== "" && 
                                        <h4 className = "desc">
                                            <strong>Descipcion</strong>: {desc}
                                        </h4>
                                    }
                                    {price !== "" && 
                                        <h4>
                                            <strong>Precio</strong>: {price}
                                        </h4>
                                    }
                                </div>
                            </div>
                        </CustomContainer>
                    </DialogContent>
                </div>
            </Dialog>
    )
}

export default ModalView;

