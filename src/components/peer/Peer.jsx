import React from 'react'
import { useVideo } from '@100mslive/react-sdk';

const Peer = ({peer}) => {

    const ref = useVideo(peer.videoTrack);
    
    
    const width = '750px';
    const height ='500px';
  return (
    <div className="peer-container">
      <video
        ref={ref}
        className={`peer-video ${peer.isLocal ? "local" : ""}`}
        autoPlay
        muted
        playsInlinev 
        width={width}
        height={height}
      />
      <div className="peer-name">
        {peer.name} 
        {/* {peer.isLocal ? "(You)" : ""} */}
      </div>
    </div>
  );
}

export default Peer