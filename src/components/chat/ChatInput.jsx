import React from 'react';



const ChatInput = ({ value, onChange, onKeyPress }) => {
  return (
    <> 
    <input
      style={styles.input}
      value={value}
      onChange={onChange}
      type='text'
      placeholder='Send Message'
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          if (!event.shiftKey) {
            event.preventDefault();
            if (value.trim() !== '') {
              onKeyPress();
            }
          }
        }
      }}
    />
     
  
</>
  );
};

const styles = {
  input: {
    padding: '12px 20px',
    margin: '8px 0',
    boxSizing: 'border-box',
    outline: 'none',
    borderColor: '#00aff0'
  }
}

export default ChatInput;