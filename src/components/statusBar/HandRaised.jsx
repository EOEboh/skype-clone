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
            peer.roleName === 'guest' ? 'handraise' : 'guest', true
        )
    } 

  return (
      <> 
      
    <button className='btn-control' onClick={toggleHandRaised}
     style={styles.button}>
        { !isHandRaised ? (<MdOutlineFrontHand />) : (<MdFrontHand />) }
    </button>
    </>
  )
}

const styles ={
  button: {
    borderRadius: '50%',
    fontSize: '22px',
    border: 'none',
    cursor: 'pointer'
  }
}


export default HandRaised