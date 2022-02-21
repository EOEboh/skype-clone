import React from 'react'

import { useHMSStore, useHMSActions, selectLocalPeer,} from '@100mslive/react-sdk'

const HandRaised = () => {
    
    const peer = useHMSStore(selectLocalPeer);
    const hmsActions = useHMSActions();

    const isHandRaised = peer.roleName === 'handraise';
    
    const toggleHandRaised = () => {
        hmsActions.changeRole(
            peer.id,
            peer.roleName === 'host' ? 'handraise' : 'host', true
        )
    } 

  return (
      <> 
      
    <button className='btn-control' onClick={toggleHandRaised}>
        { !isHandRaised ? 'Raise Hand' : 'Raised' }
    </button>
    </>
  )
}

export default HandRaised