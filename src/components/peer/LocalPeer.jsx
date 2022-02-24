import React from 'react'
import { useVideo } from '@100mslive/react-sdk';

import HandRaiseBadge from './HandRaiseBadge';

// hook for styling
import useStyles from './styles';

const LocalPeer = ({localpeer}) => {

      // for local peer (You)
    const ref = useVideo(localpeer.videoTrack);

    
    // Hook for styling
    const classes = useStyles();
    
    
    // const width = '900px';
    // const height ='900px';

  return (
    <div className="peer-container">
      <div>
        {localpeer.roleName === 'handraise' && <HandRaiseBadge />} 
      </div>
      
      <video
        ref={ref}
        className={`peer-video ${localpeer.isLocal ? "local" : ""}`}
        autoPlay
        muted
        playsinlinev 
        // width={width}
        // height={height}
      />
      <div className="peer-name">
        {localpeer.name} {localpeer.isLocal ? "(You)" : ""}
      </div>
      
    </div>
  );
}



export default LocalPeer

