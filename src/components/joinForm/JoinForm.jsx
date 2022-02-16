import React, { useState} from 'react';
import { useHMSActions } from '@100mslive/react-sdk';
// hook for styling
import useStyles from './styles';

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

    // state for the input values
    const [ input, setInput ] = useState(
        {
            name: '',
            token: ''
        }
    );

        const handleInputChange = (e) => {
            setInput((prevValues)=> ({
                ...prevValues,
                [e.target.name]: e.target.value
            }));
        };
        const handleSubmit = (e) => {
            e.preventDefault();
            hmsActions.join({
                userName: input.name,
                authToken: input.token,
                settings: {
                    isAudioMuted: true,
                    isVideoMuted: false,
                },
                metaData: JSON.stringify({city: 'Lagos'}),
                rememberDeviceSelection: true
            });
        };


  return (
        <form onSubmit={handleSubmit} className={classes.form}>
            <div className={classes.div}>      
            <TextField
                id='name'
                type='text'
                name='name'
                label='Name'
                placeholder='Your meeting name '
                value={input.name}
                onChange={handleInputChange}></TextField>
                </div>
            <div>  
                
            <TextField
                sx={styles.joinFormStyle}
                id='token'
                type='text'
                name='token'
                label='Auth Token'
                required
                value={input.token}
                onChange={handleInputChange}></TextField>
                </div>
                
                <Button 
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