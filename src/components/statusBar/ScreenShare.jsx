import React from 'react';
import { useHMSStore, selectIsLocalScreenShared } from '@100mslive/react-sdk';
import { FiShare } from 'react-icons/fi'


const ScreenShare = ({toggleScreen}) => {
    
    const isLocalScreenShared = useHMSStore(selectIsLocalScreenShared);

  return (
    <button
      onClick={toggleScreen}
      active={!isLocalScreenShared}
      style={styles.button}
    >
        {isLocalScreenShared ? "Unshare" : <FiShare />} 
    </button>
  )
}

const styles ={
  button: {
    borderRadius: '50%',
    fontSize: '22px',
    color: '#ffffff',
    backgroundColor: '#00aff0',
    border: 'none',
    cursor: 'pointer'
  }
}

export default ScreenShare;