/* eslint-disable no-unused-vars */

 import ReactPlayer from 'react-player' 
import React from 'react'
import video from '/address-container-animation.webm';
        
function RealPlay  () {
    
    return(
        
      <div className='byellow' >
         <ReactPlayer
        controls={true} 
        url={video} 
        height= "600px"
         width= "500px" 
         playing ={true}
         onReady={true}
         loop={true} 
         autoplay={true}
         
         
         />  
        </div>
        

    )


}
export default RealPlay
 