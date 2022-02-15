import React, { useState} from 'react';
import { useHMSActions } from '@100mslive/react-sdk';

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
                authToken: input.token
            });
        };


  return (
        <form onSubmit={handleSubmit} 
                style={{textAlign:'center', marginTop:'2rem'}}>
            <div 
                style={{position:'relative', display: 'inline-block'}}> 
                 
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