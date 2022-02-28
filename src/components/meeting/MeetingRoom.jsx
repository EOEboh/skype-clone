import React, { useState } from 'react';
import { useHMSStore, selectLocalPeer, selectRemotePeers } from '@100mslive/react-sdk';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Peer from '../peer/Peer';
import LocalPeer from '../peer/LocalPeer';
import ChatContainer from '../chat/ChatContainer';
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

    const [ seeChat, setSeeChat ] = useState(false);

    const addChat = () => {
        setSeeChat(!seeChat)
    }  

    

    return (
       <> 
        <h2>Welcome {localpeer.name}</h2>
        
  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
         <Grid item xs={6} md={4} sm={8}>
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

       { seeChat ? (<Grid> 
          <Item>  
            <ChatContainer />
          </Item>
        </Grid>) : null }
      </Grid>
 </Box>
 <br/>
        <StatusBar addChat={addChat}/>
        </>
        
      
    );
}



export default MeetingRoom;