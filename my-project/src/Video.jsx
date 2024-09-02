/* eslint-disable no-unused-vars */

 import ReactPlayer from 'react-player' 
import React from 'react'
import video from '/VIDDY.mp4';
        
function RealPlay  () {
    
    return(
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
        
        

    )


}
export default RealPlay
 