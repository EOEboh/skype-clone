import React from 'react';
import ReactDOM from 'react-dom';
import { HMSRoomProvider } from '@100mslive/react-sdk';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';



const rootElement = document.getElementById('root');
ReactDOM.render(
    <Router> 
        <HMSRoomProvider>
            <App />
        </HMSRoomProvider>
    </Router>, rootElement
);