import React from 'react';
import { useHMSStore, useHMSActions, selectLocalPeer, selectRemotePeers } from '@100mslive/react-sdk';

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
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const MeetingRoom = () => {
    const peers = useHMSStore(selectRemotePeers);
    const localpeer = useHMSStore(selectLocalPeer);
    const hmsActions = useHMSActions();

    return (
       <> 
        <h2>Welcome {localpeer.name}</h2>
        
      {/* <Box sx={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'space-between'}} className="meetingroom-section"> */}
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        <Item>
          {peers.map((peer) => (
            <Peer key={peer.id} peer={peer} />
          ))}
        </Item>
        </Grid>

        <Grid item xs={6} md={8}>
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


const styles ={
  borderRadius: '50%'
}
export default MeetingRoom;