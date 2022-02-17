import React from 'react';
import ReactDOM from 'react-dom';
import { HMSRoomProvider } from '@100mslive/react-sdk';
import { HMSRoomProvider as HMSRoom } from '@100mslive/hms-video-react';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';



const rootElement = document.getElementById('root');
ReactDOM.render(
    <Router> 
        <HMSRoom> 
        <HMSRoomProvider>
            <App />
        </HMSRoomProvider>
        </HMSRoom>
    </Router>, rootElement
);