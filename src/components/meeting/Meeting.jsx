import React from 'react'

import Peer from '../peer/Peer';
import LocalPeer from '../peer/LocalPeer';
import StatusBar from '../statusBar/StatusBar';

import { useHMSStore, useHMSActions, selectLocalPeer, selectRemotePeers } from '@100mslive/react-sdk';



const Meeting = () => {
    const peers = useHMSStore(selectRemotePeers);
    const localpeer = useHMSStore(selectLocalPeer);
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

        <div>
          <LocalPeer localpeer={localpeer} />
        </div>
        <StatusBar />
      </div>
    );
}

export default Meeting;