import React from 'react';


const ChatLayout = ({ children }) => {
  return (
    <div>
      <div>
        <b>Chat</b>
      </div>
      {children}
    </div>
  );
};


export default ChatLayout;