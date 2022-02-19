import React from 'react'
import { useAVToggle } from "@100mslive/react-sdk";

import { BsCameraVideoFill, BsCameraVideoOffFill } from 'react-icons/bs';

const HideVideo = () => {

    const {
        isLocalVideoEnabled,
        toggleVideo
    } = useAVToggle();


  return (
    <button className='btn-control' onClick={toggleVideo}>
            {isLocalVideoEnabled ? <BsCameraVideoFill /> : <BsCameraVideoOffFill />} 
        </button>
  )
}

export default HideVideo