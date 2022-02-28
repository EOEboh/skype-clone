import React, { useState } from 'react';

import { BsFillChatDotsFill } from 'react-icons/bs'



const ShowChat = ({addChat}) => {

  return (
    <>
        <button onClick={addChat}>
            <BsFillChatDotsFill />
        </button>
    </>
  )
}

export default ShowChat;