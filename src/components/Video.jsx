import React from 'react'
import { useHMSStore, selectPeers } from '@100mslive/hms-video-react'


const Video = () => {
    const peers = useHMSStore(selectPeers);
  return (
    <div>
        <Peers peers={peers} />
    </div>
  )
}

export default Video