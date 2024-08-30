// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from 'react';



function Video() {
    const videoRef = useRef("my-project/public/address-container-animation (2).mp4");
  
    useEffect(() => {
      const video = videoRef.current;
  
      if (video) {
        video.loop = true;
        video.play()
          .then(() => {
            // Video played successfully
          })
          .catch(error => {
            console.error('Error playing video:', error);
          });
      }
    }, []);
  
    return (
      <video ref={videoRef} width="320" height="240">
        <source src="my-project/public/address-container-animation (2).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  export default Video