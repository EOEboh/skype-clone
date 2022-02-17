import React from 'react';

const ChatLayout = ({ children }) => {
  return (
    <div>
      <div>
        Messages
      </div>
      {children}
    </div>
  );
};

export default ChatLayout;