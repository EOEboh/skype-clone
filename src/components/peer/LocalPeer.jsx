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

    const [ screenWidth, setScreenWidth ] = useState(0);

    const breakpoint = 610;

    useEffect( () => {
      const handleResizeWindow = () => setScreenWidth(window.innerWidth);

      window.addEventListener("resize", handleResizeWindow);
      return ()=> {
        window.removeEventListener("resize", handleResizeWindow);
      }
    }, []);
    
    
    
    

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
        // style={{width: 'calc(85vw - 100px)'}}      
      />
      <div className="peer-name">
        {localpeer.name} {localpeer.isLocal ? "(You)" : ""}
      </div>
      
    </div>
  );
}



export default LocalPeer

