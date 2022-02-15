import React from 'react'

import Peer from './Peer';
import { useHMSStore, selectPeers, } from '@100mslive/react-sdk';



const Conference = () => {
    const peers = useHMSStore(selectPeers);
    return (
      <div className="conference-section">
        <h2>Conference</h2>
  
        <div className="peers-container">
          {peers.map((peer) => (
            <Peer key={peer.id} peer={peer} />
          ))}
        </div>
      </div>
    );
}

export default Conference