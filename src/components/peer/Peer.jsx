import React from 'react'
import { useVideo } from '@100mslive/react-sdk';


import HandRaiseBadge from './HandRaiseBadge';

const Peer = ({peer}) => {

    const ref = useVideo(peer.videoTrack);
    
    
    // const width = '750px';
    // const height ='500px';
  return (
     
    <div className="peer-container">
      <div>
        {peer.roleName === 'handraise' && <HandRaiseBadge />} 
      </div>
      <video
        ref={ref}
        className={`peer-video ${peer.isLocal ? "local" : ""}`}
        autoPlay
        muted
        playsinlinev 
        // width={width}
        // height={height}
      />
      <div className="peer-name">
        {peer.name} 
      </div>
      
    </div>
    
  );
}


export default Peer