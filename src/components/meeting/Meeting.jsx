import React from 'react'

import Peer from '../peer/Peer';
import StatusBar from '../statusBar/StatusBar';

import { useHMSStore, selectPeers, useHMSActions } from '@100mslive/react-sdk';



const Meeting = () => {
    const peers = useHMSStore(selectPeers);
    const hmsActions = useHMSActions();
    return (
      <div className="conference-section">
        <h2>Hi and Welcome</h2>
          <button onClick={() => {
            hmsActions.leave();
          }}> Leave </button>
        <div className="peers-container">
          {peers.map((peer) => (
            <Peer key={peer.id} peer={peer} />
          ))}
        </div>
        <StatusBar />
      </div>
    );
}

export default Meeting;