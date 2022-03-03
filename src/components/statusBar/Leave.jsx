import React from 'react'

import { FcEndCall } from 'react-icons/fc'
import { useHMSActions } from '@100mslive/react-sdk'

const Leave = () => {
    const hmsActions = useHMSActions();
  return (
    <button onClick={() => {
        hmsActions.leave();
      }}
      style={styles.button}>
       <FcEndCall /> 
    </button>
  )
}

const styles ={
  button: {
    borderRadius: '50%',
    fontSize: '22px',
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    cursor: 'pointer'
  }
}


export default Leave