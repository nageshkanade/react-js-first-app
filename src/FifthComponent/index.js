import React from 'react';
import './FifthComponent.css';


const FifthComponent =(getclientName)=>
   {
   
     return(
        <>
        <h1 className='fifthColor'>Hello Nagesh Rajendra Kanade{getclientName.courseDetails[0]}</h1>
        </>
     )
    }  
    


    export default FifthComponent;