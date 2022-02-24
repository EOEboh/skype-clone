import React from 'react';
import { useHMSStore, selectLocalPeer, selectRemotePeers } from '@100mslive/react-sdk';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Peer from '../peer/Peer';
import LocalPeer from '../peer/LocalPeer';
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
    

    return (
       <> 
        <h2>Welcome {localpeer.name}</h2>
        
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
      <Grid item xs={6} md={4} sm={6}>
        <Item>
          {peers.map((peer) => (
            <Peer key={peer.id} peer={peer} />
          ))}
        </Item>
        </Grid>

        <Grid item xs={12} md={12} sm={12}>
        <Item>
          <LocalPeer localpeer={localpeer} />
        </Item> 
        </Grid>
        
        </Grid>
     </Box>
        <StatusBar />
        </>
        
      
    );
}



export default MeetingRoom;