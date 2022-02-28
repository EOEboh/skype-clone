import React, { useEffect, useState } from 'react';


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

  const [ meetingName, setMeetingName ] = useState('');

  const handleMeetingName = (e) => {
          setMeetingName((prevValues) => ({
            ...prevValues, 
            [e.target.meetingName]: e.target.value
          }))
  }

  
  return (
    <> 
  <div>
      <div> 
    {isConnected ? 'Connected' : 'Not Connected Yet'}
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
          Word of the Day
        </Typography>

        <div>      
            <TextField
                id='name'
                type='text'
                name='name'
                label='Name'
                placeholder='Your name'
                value={meetingName.name}
                onChange={handleMeetingName}>    
            </TextField>
        </div>
        
      </CardContent>
      

      <CardActions>
       <Box sx={styles.cardContent}>  
       <Link to='/joinform'  style={{textDecoration: 'none'}}> 
        <Button 
          type='submit'                 variant='contained' 
          sx={styles.joinFormButton}>
          Make A Free Call Today
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
  card:{
    width: '50%',
    margin: 'auto'
  },
  cardContent:{
    // textAlign:'center',
  },
  joinFormButton:{
    marginTop: '2rem',
    backgroundColor: '#00aff0',
    borderRadius: '90px',
    padding: '15px',
  }
}

export default App;