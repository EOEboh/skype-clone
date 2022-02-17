import React, { useState} from 'react';
import { useHMSActions } from '@100mslive/react-sdk';
// hook for styling
import useStyles from './styles';

import getToken from '../../endpoints/getToken';

// Material UI
import Button from '@mui/material/Button';
import { Typography, TextField } from '@mui/material';
import '@fontsource/roboto/300.css';
import { borderRadius } from '@mui/system';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import BuildIcon from '@mui/icons-material/Build';

const JoinForm = () => {
    // Hook for hmsActions
    const hmsActions = useHMSActions();

    // Hook for styling
    const classes = useStyles();

    // state for the input name values
    const [ username, setUsername ] = useState({name: ''});

    const role = 'host';

        const handleUsernameChange = (e) => {
            setUsername((prevValues)=> ({
                ...prevValues,
                [e.target.name]: e.target.value
            }));
        };
        
        const JoinRoom = () => {
            getToken(role)
                .then((token) => {   
            hmsActions.join({
                userName: username.name,
                authToken: token,
                settings: {
                    isAudioMuted: true,
                    isVideoMuted: false,
                },
                metaData: JSON.stringify({city: 'Lagos'}),
                rememberDeviceSelection: true
            });
         })
         .catch((error) => {
             console.log(error)
         })
        }

        // submit function
        function handleSubmit(e){
            e.preventDefault();
            JoinRoom();
        }
        


  return (
        <form className={classes.form}>
                <div className={classes.div}>      
            <TextField
                id='name'
                type='text'
                name='name'
                label='Name'
                placeholder='Your name'
                value={username.name}
                onChange={handleUsernameChange}>    
            </TextField>
                </div>
                <br/>                
                <Button 
                    onClick={handleSubmit}
                    type='submit'   
                    variant='contained' 
                    sx={styles.joinFormButton}>
                    Start Call
                </Button>
        </form>
  )
}

// styling
const styles = {
    joinFormStyle:{
        marginTop: '2rem'
    },
    joinFormButton:{
        marginTop: '2rem',
        backgroundColor: '#00aff0',
        borderRadius: '90px',
        padding: '15px'
    }
}



export default JoinForm