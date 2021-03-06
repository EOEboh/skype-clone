import React, { useState } from 'react';

import { BsFillChatDotsFill } from 'react-icons/bs'



const ShowChat = ({toggleChat}) => {

  return (
    <>
        <button onClick={toggleChat}
         style={styles.button}>
            <BsFillChatDotsFill />
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


export default ShowChat;