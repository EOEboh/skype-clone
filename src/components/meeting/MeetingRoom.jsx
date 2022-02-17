import React from 'react'

import Peer from '../peer/Peer';
import LocalPeer from '../peer/LocalPeer';
import StatusBar from '../statusBar/StatusBar';




import { useHMSStore, useHMSActions, selectLocalPeer, selectRemotePeers } from '@100mslive/react-sdk';



const MeetingRoom = () => {
    const peers = useHMSStore(selectRemotePeers);
    const localpeer = useHMSStore(selectLocalPeer);
    const hmsActions = useHMSActions();

    return (
      <div className="meetingroom-section">
        <h2>Hi and Welcome</h2>
          <button onClick={() => {
            hmsActions.leave();
          }}> Leave </button>

        <div className={styles.borderRadius}>
          {peers.map((peer) => (
            <Peer key={peer.id} peer={peer} />
          ))}
        </div>

        <div className={styles.borderRadius} >
          <LocalPeer localpeer={localpeer} />
        </div> 
        
        <StatusBar />
        
        
      </div>
    );
}


const styles ={
  borderRadius: '50%'
}
export default MeetingRoom;