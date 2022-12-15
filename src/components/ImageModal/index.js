import React from "react";
import { Backdrop, Modal, CardHeader, Card, IconButton, Avatar, CardMedia } from "@mui/material";
import { Close, ArrowBackIos, ArrowForwardIos, MoreHoriz } from '@mui/icons-material'
import DownloadButton from "./DownloadButton";
import './ImageModal.css'

const ImageModal = ({ slide, open, currentSlide, onClose, handleChangeSlide }) => {

    const getUserName = () => {
        let name = ''
        if (slide?.user.first_name) name += slide.user.first_name
        if (slide?.user.last_name) name += ` ${slide.user.last_name}`
        return name
    }

    return (
        <Modal
            open={open}
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500
            }}
        >
            <>
                <IconButton onClick={onClose}>
                    <Close />
                </IconButton>
                <div className='modal-container'>
                    <IconButton disabled={currentSlide === 0} onClick={() => handleChangeSlide(currentSlide - 1)}>
                        <ArrowBackIos />
                    </IconButton>
                    <Card className='modal-content'>
                        <CardHeader
                            avatar={
                                <Avatar src={slide.user.profile_image.medium} alt={slide.user.bio} />
                            }
                            action={
                                <DownloadButton slide={slide} />
                            }
                            title={getUserName()}
                        />
                        <CardMedia
                            style={{ objectFit: 'contain' }}
                            component="img"
                            height='500'
                            image={slide.urls.full}
                            alt={slide.alt_description}
                        />
                    </Card>
                    <IconButton onClick={() => handleChangeSlide(currentSlide + 1)}>
                        <ArrowForwardIos />
                    </IconButton>
                </div>
            </>
        </Modal>
    )
}

export default ImageModal
