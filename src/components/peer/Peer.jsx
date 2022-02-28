import React  from 'react';
import { useVideo } from '@100mslive/react-sdk';


import HandRaiseBadge from './HandRaiseBadge';

const Peer = ({peer}) => {

    const ref = useVideo(peer.videoTrack);

    
    // const [ screenWidth, setScreenWidth ] = useState(0);

    // const breakpoint = 610;

    // useEffect( () => {
    //   const handleResizeWindow = () => setScreenWidth(window.innerWidth);

    //   window.addEventListener("resize", handleResizeWindow);
    //   return ()=> {
    //     window.removeEventListener("resize", handleResizeWindow);
    //   }
    // }, []);
    
    
    // // dynamic responsive layouts
    // let width = `${screenWidth}` >= `${breakpoint}` ? 'valuepx' : 'valuepx' || `${screenWidth}` <= 'valuepx' ?'valuepx': '' ;
    
  return (
     
    <div className="peer-container">
      <div>
        {peer.roleName === 'handraise' && <HandRaiseBadge />} 
      </div>
      <video
        ref={ref}
        className={`peer-video ${peer.isLocal ? "local" : ""}`}
        autoPlay
        muted
        playsinlinev 
        // width={width}
        // style={{width: 'calc(85vw - 100px)'}}
      />
      <div className="peer-name">
        {peer.name} 
      </div>
      
    </div>
    
  );
}


export default Peer