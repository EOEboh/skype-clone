import React from 'react'
import { useVideo } from '@100mslive/react-sdk';

const LocalPeer = ({localpeer}) => {

    const ref = useVideo(localpeer.videoTrack)
    
    // const ref = useVideo(peer.videoTrack);
    const width = '900px';
    const height ='900px';
  return (
    <div className="peer-container">
      <video
        ref={ref}
        className={`peer-video ${localpeer.isLocal ? "local" : ""}`}
        autoPlay
        muted
        playsInlinev 
        width={width}
        height={height}
      />
      <div className="peer-name">
        {localpeer.name} {localpeer.isLocal ? "(You)" : ""}
      </div>
    </div>
  );
}

export default LocalPeer