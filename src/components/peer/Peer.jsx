import React  from 'react';
import { useVideo } from '@100mslive/react-sdk';


import HandRaiseBadge from './HandRaiseBadge';

const Peer = ({peer}) => {

  const ref = useVideo(peer.videoTrack);
  const width = '250px';

return (
     
    <div>
      <div>
        {peer.roleName === 'handraise' && <HandRaiseBadge />} 
      </div>
      <video
        ref={ref} 
        style={styles.video}
        autoPlay
        muted
        playsinlinev 
        width={width}
        
      />
      <div>
        <b>{peer.name} {!peer.isLocal && `(${peer.roleName})`}</b> 
      </div>
      
    </div>
    
  );
}
const styles ={
  video:{
    borderRadius: '10px',
    width: '100%'
  }
}

export default Peer