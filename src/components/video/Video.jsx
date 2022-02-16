import React from 'react'
import { useHMSStore, selectPeers } from '@100mslive/react-sdk';
import Peer from '../peer/Peer';


const Video = () => {
    const peers = useHMSStore(selectPeers);
  return (
    <div>
        <Peer peers={peers} />
    </div>
  )
}

export default Video