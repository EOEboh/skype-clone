import React, { useEffect, useState } from 'react';
import './App.css';

// material UI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography, TextField } from '@mui/material';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

import StatusBar from './components/statusBar/StatusBar'


import JoinForm from './components/joinForm/JoinForm';
import MeetingRoom from './components/meeting/MeetingRoom';


// 100ms SDK
import { 
  useHMSActions,
  selectIsConnectedToRoom,
  useHMSStore } from '@100mslive/react-sdk';
// react router
import { Route, Routes, Link, useLocation } from 'react-router-dom';


const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function App() {

  // for conditional rendering
  let location = useLocation();

  const isConnected = useHMSStore(selectIsConnectedToRoom);
  const hmsActions = useHMSActions();

  // incase the user refreshes or closes the tab
  useEffect(() => {
    window.onunload = () => {
      if(isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected])

  // state for the meeting name
  const [ meetingName, setMeetingName ] = useState('');

  // function for the meeting name
  const handleMeetingName = (e) => {
          setMeetingName(e.target.value)
  }

  
  return (
    <> 
  <div>   
      <div style={styles.connected}> 
        {isConnected ? `${meetingName}` : 'Not Connected Yet'}
      </div>

      <div>
        {isConnected ? ( <MeetingRoom /> ) :(
      <Routes>
        <Route path='/joinform' element={<JoinForm />} /> 
      </Routes>  )}   
      </div>   
  </div>

    
    { location.pathname == '/' && (
    <Card sx={styles.card}>
      <CardContent sx={styles.cardContent}>
        
        <Typography  gutterBottom>
          <b> 
            Hi, you are welcome!<br/>
            Input A Meeting Name </b>
        </Typography>

        <div>      
            <TextField
                id='name'
                type='text'
                name='name'
                placeholder='Meeting Name'
                required
                value={meetingName}
                onChange={handleMeetingName}>    
            </TextField>
        </div>
        
      </CardContent>
      

      <CardActions>
       <Box sx={styles.cardContent}>  
       <Link to='/joinform'  style={{textDecoration: 'none'}}> 
        <Button 
          type='submit' 
          variant='contained' 
          sx={styles.joinFormButton}>
          Create A Free Video Call
        </Button>
        </Link>
        </Box>
      </CardActions>
      </Card>
     )}

      
    </>


  )
}


const styles = {
  connected:{
    backgroundColor: '#00aff0',
    width: '50%',
    textAlign: 'center',
    fontSize: '20px',
    padding: '0.5rem',
    margin: 'auto',
    borderRadius: '2px'
  },
  card:{
    width: '50%',
    margin: 'auto'
  },
  joinFormButton:{
    marginTop: '2rem',
    backgroundColor: '#00aff0',
    borderRadius: '90px',
    padding: '15px',
  }
}

export default App;