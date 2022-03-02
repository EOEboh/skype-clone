import React, { useEffect } from 'react';
import {
    useHMSActions,
    useHMSStore,
    selectScreenShareByPeerID,
  } from '@100mslive/react-sdk';
  

const Screen = ({peer,isLocal }) => {
    const hmsActions = useHMSActions();
    const screenRef = React.useRef(null);
    const screenTrack = useHMSStore(selectScreenShareByPeerID(peer.id));

    useEffect(() => {
        (async () => {
          console.log(screenRef.current);
          console.log(screenTrack);
          if (screenRef.current && screenTrack) {
            if (screenTrack.enabled) {
              await hmsActions.attachVideo(screenTrack.id, screenRef.current);
            } else {
              await hmsActions.detachVideo(screenTrack.id, screenRef.current);
            }
          }
        })();
        
      }, [screenTrack]);

  return (
     <div>
        <div>
        
          <video
            ref={screenRef}
            autoPlay={true}
            playsInline
            muted={false}
            className={` ${
              isLocal ? "You are sharing your screen" : ""
            }`}
          >
          </video>
          </div>
        </div>
      
  )
}

export default Screen;