import React, { useState } from 'react';
import { useHMSStore, useHMSActions, selectLocalPeer, selectRemotePeers, selectIsLocalScreenShared } from '@100mslive/react-sdk';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import Peer from '../peer/Peer';
import LocalPeer from '../peer/LocalPeer';
import ChatContainer from '../chat/ChatContainer';
import Screen from '../peer/Screen';
import StatusBar from '../statusBar/StatusBar';

// material ui components

import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const MeetingRoom = () => {
    const peers = useHMSStore(selectRemotePeers);
    const localpeer = useHMSStore(selectLocalPeer);
    const hmsActions = useHMSActions();

    // for screen sharing
    const isLocalScreenShared = useHMSStore(selectIsLocalScreenShared);


      // function to toggle screenshare
     const toggleScreen = async () => {
      await hmsActions.setScreenShareEnabled(!isLocalScreenShared);
  }
  
    // state to toggle chat 
    const [ seeChat, setSeeChat ] = useState(false);

    // function to toggle chat
    const toggleChat = () => {
        setSeeChat(!seeChat)
    }  


  // material ui functions
  const { onClose } = 'props';

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
    
return (
       <> 
  <div style={styles.room}>
      <div style={styles.name}>
        <h2>Welcome {localpeer.name}</h2>
      </div>
        
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
         <Grid item xs={6} md={4} sm={6}>
           <Item>
            {peers.map((peer) => (
            <Peer key={peer.id} peer={peer} />
          ))}
           </Item>
        </Grid>

        <Grid item xs={12} md={6} sm={12}>
          <Item>
            <LocalPeer localpeer={localpeer} />
          </Item> 
        </Grid>
          <br />
       { 
          seeChat ? (<Grid> 
          <Item>  
            <ChatContainer />
          </Item>
          </Grid>) : null 
       }
        </Grid>
 </Box>

  <div>
       <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{peers.length} Participants In This Meeting With You</DialogTitle>
      <List sx={{ pt: 0 }}>
        {peers.map((peer) => (
          <ListItem button onClick={() => handleListItemClick(peer)} key={peer.id}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={peer.name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  
  </div>
        <div style={{ width: 'calc(90vw - 100px)' }}>             
           <Screen isLocal={false} peer={peers}/>                
         </div>
           <br/>
        <StatusBar toggleChat={toggleChat}
        toggleScreen={toggleScreen}
          handleClickOpen={handleClickOpen}/>
    </div>
        </>
  );
}

const styles = {
  room :{
    backgroundColor: '#1b394a',
    padding: '0.5rem'
  },
  name: {
    color: '#ffffff'
  }
}

export default MeetingRoom;