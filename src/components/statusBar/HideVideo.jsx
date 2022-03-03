import React from 'react'
import { useAVToggle } from "@100mslive/react-sdk";

import { BsCameraVideoFill, BsCameraVideoOffFill } from 'react-icons/bs';

const HideVideo = () => {

    const {
        isLocalVideoEnabled,
        toggleVideo
    } = useAVToggle();

  return (
    <button className='btn-control'
     onClick={toggleVideo}
     style={styles.button}>
            {isLocalVideoEnabled ? <BsCameraVideoFill /> : <BsCameraVideoOffFill />} 
        </button>
  )
}

const styles ={
  button: {
    borderRadius: '50%',
    fontSize: '22px',
    backgroundColor: '#00aff0',
    border: 'none',
    cursor: 'pointer'
  }
}


export default HideVideo