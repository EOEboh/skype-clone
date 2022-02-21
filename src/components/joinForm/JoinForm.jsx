import React, { useState} from 'react';
import { useHMSActions } from '@100mslive/react-sdk';
// hook for styling
import useStyles from './styles';

import getToken from '../../endpoints/getToken';

import ChatContainer from '../chat/ChatContainer'

// Material UI
import Button from '@mui/material/Button';
import { Typography, TextField } from '@mui/material';
import '@fontsource/roboto/300.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';




const JoinForm = () => {
    // Hook for hmsActions
    const hmsActions = useHMSActions();

    // Hook for styling
    const classes = useStyles();

    // state for the input name values
    const [ username, setUsername ] = useState({name: ''});
    const [ role, setRole ] = useState('');
    

        const handleUsernameChange = (e) => {
            setUsername((prevValues)=> ({
                ...prevValues,
                [e.target.name]: e.target.value
            }));
        };

        const handleRole = (e) => {
            setRole(e.target.value)
        }
        
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
      <>
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
                <div>

                <InputLabel id="role">Role</InputLabel>
            <Select
                labelId="role"
                    id="role"
                    value={role}
                 label="Role"
                 onChange={handleRole}
                 >
                <MenuItem value='host'>Host</MenuItem>
                <MenuItem value='guest'>Guest</MenuItem>
                 <MenuItem value='handraise'>Handraise</MenuItem>
             </Select>
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
        
        <ChatContainer />
        
        </>
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