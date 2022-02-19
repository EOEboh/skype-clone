import React from 'react'

import { FcEndCall } from 'react-icons/fc'
import { useHMSActions } from '@100mslive/react-sdk'

const Leave = () => {
    const hmsActions = useHMSActions();
  return (
    <button onClick={() => {
        hmsActions.leave();
      }}> <FcEndCall /> </button>
  )
}

export default Leave