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


    // state to toggle chat 
    const [ seeChat, setSeeChat ] = useState(false);

    // function to toggle chat
    const toggleChat = () => {
        setSeeChat(!seeChat)
    }  

      // function to toggle screenshare
     const toggleScreen = async () => {
    await hmsActions.setScreenShareEnabled(!isLocalScreenShared);
  }

    
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
        <div style={{ width: 'calc(90vw - 100px)' }}>             
           <Screen isLocal={false} peer={peers}/>                
         </div>
           <br/>
        <StatusBar toggleChat={toggleChat}
        toggleScreen={toggleScreen}/>
    </div>
        </>
        
      
    );
}

const styles ={
  room :{
    backgroundColor: '#1b394a',
    padding: '0.5rem'
  },
  name: {
    color: '#ffffff'
  }
}

export default MeetingRoom;