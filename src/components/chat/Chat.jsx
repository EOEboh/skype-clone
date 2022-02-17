import React from 'react';

const Chat = ({ msg }) => {
  return (
    <div>
      <span>
        {msg.senderName}
      </span>
      <span>{msg.message}</span>
    </div>
  );
};

export default Chat;