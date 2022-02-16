import React, { useEffect } from 'react';


// material UI
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import JoinForm from './components/joinForm/JoinForm';
import Meeting from './components/meeting/Meeting';


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

  useEffect(() => {
    window.onunload = () => {
      if(isConnected) {
        hmsActions.leave();
      }
    };
  }, [hmsActions, isConnected])

  
  return (
    <> 
    <div>
    {isConnected ? ( <Meeting /> ) :(
      <Routes>
        <Route path='/joinform' element={<JoinForm />} /> 
      </Routes>  )}      
    </div>
    
    { location.pathname == '/' && (
    <Card sx={styles.card}>
      <CardContent sx={styles.cardContent}>
        <Typography  gutterBottom>
          Word of the Day
        </Typography>
        <Typography >
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography >
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>

      <CardActions>
       <Box sx={styles.cardContent}>  
       <Link to='/joinform'> 
        <Button 
          type='submit'                 variant='contained' 
          sx={styles.joinFormButton}>
          Make A Free Call Today
        </Button>
        </Link>
        </Box>
      </CardActions>

    </Card> )}

      
    </>


  )
}


const styles = {
  card:{
    width: '50%',
    margin: 'auto'
  },
  cardContent:{
    textAlign:'center'
  },
  joinFormButton:{
    marginTop: '2rem',
    backgroundColor: '#00aff0',
    borderRadius: '90px',
    padding: '15px',
    textAlign: 'center'
}
}

export default App;