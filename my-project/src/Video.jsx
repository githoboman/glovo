/* eslint-disable no-unused-vars */

 import ReactPlayer from 'react-player' 
import React from 'react'
import video from '/address-container-animation.webm';
        
function RealPlay  () {
    
    return(
        
      <div className='byellow' >
         <ReactPlayer
        controls={false} 
        url={video} 
        height= "450px"
         width= "400px" 
         playing ={true}
         onReady={true}
         loop={true} 
         autoplay={true}
         
         
         />  
        </div>
        

    )


}
export default RealPlay
 