import React from 'react'
import { useVideo } from '@100mslive/react-sdk';

// hook for styling
import useStyles from './styles';

const LocalPeer = ({localpeer}) => {

    const ref = useVideo(localpeer.videoTrack)
    
    // Hook for styling
    const classes = useStyles();
    
    
    // const width = '900px';
    // const height ='900px';

  return (
    <div className={classes.peerContainer}>
      <video
        ref={ref}
        className={`peer-video ${localpeer.isLocal ? "local" : ""}`}
        autoPlay
        muted
        playsInlinev 
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

