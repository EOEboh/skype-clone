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
import ShowChat from './ShowChat';
import ChatContainer from '../chat/ChatContainer';
import ScreenShare from './ScreenShare';


// const pages = ['Products', 'Pricing'];



const StatusBar = ({toggleChat,toggleScreen}) => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    

    const handleOpenNavMenu = (event) => {
            setAnchorElNav(event.currentTarget);
          };
    

    const handleCloseNavMenu = () => {
                setAnchorElNav(null);
              };

            

  return (
    
    <>
        <AppBar position="static" style={{background: '#787878'}}>
       <Container maxWidth="xl">
         <Toolbar disableGutters>
         
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={styles.typography}
          >
            <MuteAudio />
            <HideVideo />
            <Leave />
            </Typography>
          
            <HandRaised />
            <ShowChat toggleChat={toggleChat}/>
            <ScreenShare toggleScreen={toggleScreen}/> 
                     
        </Toolbar>
      </Container>
    </AppBar>
    </>

    
  );
}

const styles = {
  typography : {
      flexGrow: 1,
      display: { xs: 'flex', md: 'flex', justifyContent: 'center' },
  }
}


export default StatusBar

