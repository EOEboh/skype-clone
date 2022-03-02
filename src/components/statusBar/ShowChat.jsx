import React, { useState } from 'react';

import { BsFillChatDotsFill } from 'react-icons/bs'



const ShowChat = ({toggleChat}) => {

  return (
    <>
        <button onClick={toggleChat}>
            <BsFillChatDotsFill />
        </button>
    </>
  )
}

export default ShowChat;