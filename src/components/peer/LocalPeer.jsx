import React, { useEffect, useState } from 'react'
import { useVideo } from '@100mslive/react-sdk';

import HandRaiseBadge from './HandRaiseBadge';

// hook for styling
import useStyles from './styles';

const LocalPeer = ({localpeer}) => {

      // for local peer (You)
    const ref = useVideo(localpeer.videoTrack);

    
    // Hook for styling
    const classes = useStyles();

    
    let width = '350px'
     

  return (
    <div>
      <div>
        {localpeer.roleName === 'handraise' && <HandRaiseBadge />} 
      </div>
      
      <video
        ref={ref}
        className={` ${localpeer.isLocal ? "local" : ""}`}
        style={styles.video}
        autoPlay
        muted
        playsinlinev 
        width={width}      
      />
      <div>
        <h2><b>{localpeer.name} {localpeer.isLocal && "(You)" }</b></h2>
      </div>
      
    </div>
  );
}

const styles ={
  video:{
    borderRadius: '10px',
    width: '100%'
  }
}


export default LocalPeer

