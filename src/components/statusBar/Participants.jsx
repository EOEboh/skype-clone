import React from 'react';

import { BsPeople } from 'react-icons/bs';

const Participants = ({handleClickOpen}) => {
  return (
    <button onClick={handleClickOpen}
     style={styles.button}>
        <BsPeople />
  </button>
  ) }


  const styles ={
    button: {
      borderRadius: '50%',
      fontSize: '22px',
      border: 'none',
      cursor: 'pointer'
    }
  }

export default Participants;