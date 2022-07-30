import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook'; import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter'; import YouTubeIcon from '@mui/icons-material/YouTube';
import { NavBarList, NavBarItem } from '../style/header';

const HeaderBlooger = () => {

    const pages = ['Home', 'Category', 'Archive', 'Pages', 'Contact'];
    const socials = [FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon];

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = () => {
        setAnchorElNav(true);
    }
    const handleOpenSocialsMenu = () => {
        setAnchorElUser(true);
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(false)
    }
    const handleCloseSocialsMenu = () => {
        setAnchorElUser(false)
    }

    return (
        <AppBar position='static' >
            <Container maxWidth='xl'>
                <Toolbar 
                    sx={{
                    display: {
                        xs: 'flex', 
                        justifyContent:'space-between', 
                        sm:'grid',
                        gridTemplateColumns:'15% 70% 15%'
                    }
                    }} 
                    disableGutters
                >

                    <Typography 
                        variant='h3'
                        component='p'
                        sx={
                            {
                                fontWeight:500,
                                display: { xs: 'none', sm: 'flex' },
                                '@media (max-width:650px)':{
                                    fontSize:'2rem'
                                }
                            }
                        }
                    >
                        Blooger
                    </Typography>

                    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                        <Tooltip title="Páginas">
                            <IconButton 
                                color='inherit'
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            id="menu-appbar"
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {pages.map((page) => (
                                <MenuItem sx={{'&:hover':{backgroundColor:'#95c2e0'}}} key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                            
                        </Menu>    
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'flex', justifyContent:'space-evenly', width: '80%' } }}>
                        {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ 
                                my: 2, 
                                color: 'white', 
                                display: 'block',
                                '&:hover':{
                                    backgroundColor:'#95c2e0'
                                }
                            }}
                        >
                            {page}
                        </Button>
                        ))}
                    </Box>

                    <Typography 
                        variant='h3'
                        component='p'
                        sx={
                            {
                                width: 200,
                                fontWeight:500,
                                display: { xs: 'flex', sm: 'none', justifyContent:'center' }
                            }
                        }
                    >
                        Blooger
                    </Typography>

                    <Box sx={{ display: {xs:'flex', sm:'none'} } }>
                        <Tooltip title="Social Media">
                            <IconButton 
                                color='inherit'
                                onClick={handleOpenSocialsMenu}>
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseSocialsMenu}
                        >
                        {socials.map((Setting) => (
                            <MenuItem sx={{'&:hover':{backgroundColor:'black', color:'white'}}} key={Setting} onClick={handleCloseSocialsMenu}>
                                <Setting/>
                            </MenuItem>
                        ))}
                        </Menu>
                    </Box>
                    <Box sx={{display:{xs:'none', sm:'flex', justifyContent:'space-around'}}}>
                        <NavBarList>
                            {socials.map((Setting) => (
                                <NavBarItem key={Setting}><Setting /></NavBarItem>
                            ))}
                        </NavBarList>
                    </Box>
                    

                </Toolbar>
            </Container>
        </AppBar>
    )

}

export default HeaderBlooger;