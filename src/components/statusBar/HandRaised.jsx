import React from 'react'

import { useHMSStore, useHMSActions, selectLocalPeer,} from '@100mslive/react-sdk';

import {  MdOutlineFrontHand, MdFrontHand } from 'react-icons/md';

const HandRaised = () => {
    
    const peer = useHMSStore(selectLocalPeer);
    const hmsActions = useHMSActions();

    const isHandRaised = peer;
    
    const toggleHandRaised = () => {
        hmsActions.changeRole(
            peer.id,
            peer.roleName === 'host' ? 'handraise' : 'host', true
        )
    } 

  return (
      <> 
      
    <button className='btn-control' onClick={toggleHandRaised}>
        { !isHandRaised ? (<MdOutlineFrontHand />) : (<MdFrontHand />) }
    </button>
    </>
  )
}

export default HandRaised