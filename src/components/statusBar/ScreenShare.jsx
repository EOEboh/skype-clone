import React from 'react';
import { useHMSStore, selectIsLocalScreenShared } from '@100mslive/react-sdk';


const ScreenShare = ({toggleScreen}) => {
    
    const isLocalScreenShared = useHMSStore(selectIsLocalScreenShared);

  return (
    <button
      onClick={toggleScreen}
      active={!isLocalScreenShared}
    >
        {isLocalScreenShared ? "Unshare" : "Share Screen"} 
    </button>
  )
}

export default ScreenShare;