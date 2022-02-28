import React, { useEffect, useState } from 'react';
import {
    useHMSStore,
    selectHMSMessages,
    useHMSActions,
  } from '@100mslive/react-sdk';

  import ChatFeed from './ChatFeed';
  import ChatInput from './ChatInput';
  import ChatLayout from './ChatLayout';
  import Chat from './Chat';
  
  const ChatContainer = () => {
    const hmsActions = useHMSActions();
    const storeMessages = useHMSStore(selectHMSMessages);
    const [chatInput, setChatInput] = useState('');


    const sendMessage = () => {
      hmsActions.sendBroadcastMessage(chatInput);
      setChatInput('');
      
    };
    

    useEffect(() => {
      const el = document.getElementById('chat-feed');
      if (el) {
        el.scrollTop = el.scrollHeight;
      }
    }, [storeMessages]);

     const handleChatInput = (e) => {
        e.preventDefault();  
       setChatInput(e.target.value)
    }
    

    return (
      <ChatLayout>
        <ChatFeed>
          {storeMessages.map((message) => (
            <Chat key={message.id} msg={message} />
          ))}
        </ChatFeed>
        <ChatInput
          value={chatInput}
          onChange={handleChatInput}
          onKeyPress={() => {
            sendMessage();
          }}
        />
      </ChatLayout>
    );
  };
  
  export default ChatContainer;

  