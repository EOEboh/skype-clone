import React, { useState} from 'react';
import { useHMSActions } from '@100mslive/hms-video-react';

// Material UI
import Button from '@mui/material/Button';
import { Typography, FormControl, TextField } from '@mui/material';
import '@fontsource/roboto/300.css';

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
        <form onSubmit={handleSubmit}>
            <div>  
            <TextField
                id='name'
                type='text'
                name='name'
                label='name'
                value={input.name}
                onChange={handleInputChange}></TextField>
                </div>
                <div>
                    <TextField
                        id='token'
                        type='text'
                        name='token'
                        label='token'
                        value={input.token}
                        onChange={handleInputChange}>

                    </TextField>
                </div>
                <Button type='submit' variant='contained'>
                    Join
                </Button>
        </form>
  )
}

export default JoinForm