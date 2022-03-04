import React from 'react';

const ChatFeed = ({ children }) => {
  return (
    <div
      id='chat-feed'
      style={styles.chat}
    >
      {children}
    </div>
  );
};

const styles = {
  chat:{
    backgroundColor: '#00aff0',
    height: 'calc(80vh - 100px)',
    padding: '0.5rem'
  }
}

export default ChatFeed;