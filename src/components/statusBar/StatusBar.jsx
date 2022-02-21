import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import HideVideo from './HideVideo';
import MuteAudio from './MuteAudio';
import HandRaised from './HandRaised';
import Leave from './Leave';


const pages = ['Products', 'Pricing', <HandRaised />];



const StatusBar = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    

    const handleOpenNavMenu = (event) => {
            setAnchorElNav(event.currentTarget);
          };
    

    const handleCloseNavMenu = () => {
                setAnchorElNav(null);
              };
            


  return (
    
        <AppBar position="static">
       <Container maxWidth="xl">
         <Toolbar disableGutters>
         
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ position: 'absolute', top: '50%', bottom: '50%', right: 0}}
              
            >
              <MenuIcon />
            </IconButton>
            
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex', justifyContent: 'space-around' } }}
          >
            <HideVideo />
            <MuteAudio />
            <Leave />
            <HandRaised />
         
          </Typography>
          
        </Toolbar>
      </Container>
    </AppBar>

    
  );
}

export default StatusBar

