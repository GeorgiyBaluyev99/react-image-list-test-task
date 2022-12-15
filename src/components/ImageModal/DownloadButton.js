import React from 'react'
import { styled, alpha } from '@mui/material/styles'
import { Button, Menu, MenuItem, Divider } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'
import { downloadImage } from '../../utils/downloadImage'

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.12) 100%), #121212',
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: '#FFFFFF',
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    '#121212',
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

const DownloadButton = ({ slide, width }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const buttonStyle = width > 400 ? {} : { width: '80%' }
    const buttonContainerStyle = width > 400 ? {} : { display: 'flex', justifyContent: 'center' }
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDownload = (e) => {
        downloadImage(slide.urls[e.target.id], slide.links.download_location, slide.id)
        handleClose()
    }

    return (
        <div style={buttonContainerStyle}>
            <Button
                style={buttonStyle}
                color='success'
                id='demo-customized-button'
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                variant='contained'
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDown />}
            >
                Download
            </Button>
            <StyledMenu
                id='demo-customized-menu'
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem id='small' onClick={handleDownload} disableRipple>
                    Small
                </MenuItem>
                <MenuItem id='regular' onClick={handleDownload} disableRipple>
                    Medium
                </MenuItem>
                <MenuItem id='full' onClick={handleDownload} disableRipple>
                    Large
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem id='raw' onClick={handleDownload} disableRipple>
                    Original
                </MenuItem>
            </StyledMenu>
        </div>
    )
}

export default DownloadButton
