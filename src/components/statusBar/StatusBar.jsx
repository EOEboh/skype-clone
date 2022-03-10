import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';


import Participants from './Participants';
import HideVideo from './HideVideo';
import MuteAudio from './MuteAudio';
import HandRaised from './HandRaised';
import Leave from './Leave';
import ShowChat from './ShowChat';
import ScreenShare from './ScreenShare';




const StatusBar = ({toggleChat,toggleScreen, handleClickOpen}) => {
  return (
    
    <>
  <AppBar position="static" style={{background: 'transparent'}}>
       <Container maxWidth="xl">
         <Toolbar disableGutters>
          <Participants handleClickOpen={handleClickOpen}/>
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

