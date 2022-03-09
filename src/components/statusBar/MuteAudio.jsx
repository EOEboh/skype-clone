import React from 'react'
import { useAVToggle } from "@100mslive/react-sdk";
import { BsFillMicFill, BsFillMicMuteFill } from 'react-icons/bs'

const MuteAudio = () => {

    const {
        isLocalAudioEnabled,
        toggleAudio,
    } = useAVToggle();

  return (
    <button 
     onClick={toggleAudio}
     style={styles.button}>
             {isLocalAudioEnabled ? <BsFillMicFill /> : <BsFillMicMuteFill />}
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

export default MuteAudio