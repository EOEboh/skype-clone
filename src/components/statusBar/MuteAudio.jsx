import React from 'react'
import { useAVToggle } from "@100mslive/react-sdk";
import { BsFillMicFill, BsFillMicMuteFill } from 'react-icons/bs'

const MuteAudio = () => {

    const {
        isLocalAudioEnabled,
        toggleAudio,
    } = useAVToggle();
  return (
    <button className='btn-control' onClick={toggleAudio}>
             {isLocalAudioEnabled ? <BsFillMicFill /> : <BsFillMicMuteFill />}
         </button>
  )
}


export default MuteAudio