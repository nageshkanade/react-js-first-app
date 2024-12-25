import React from 'react';
import './PrimaryComponent.css';
import ThirdComponent from '../ThirdComponent';
import FourthComponent from '../FourthComponent';
import FifthComponent from '../FifthComponent';


const PrimaryComponent =()=>{
   
      let name='Developer guru'; // sample variable
      let courseDetails={'H':'HTML','B':'BOOTSTRAP','c':'CSS'};// object
      let courseDetails1=['Java','Node Js','React Js'];// Array
      // let name1='Developer guru1';
      // let name2='Developer guru2';
     return(
        <>
        <h1 className='primaryColor'>Hello Nagesh Rajendra Kanade</h1>
        < ThirdComponent clientName={name}/>
        < FourthComponent clientName1={courseDetails}/>
        < FifthComponent courseDetails={courseDetails1}/>
        </>
     )
    }  
    


    export default PrimaryComponent;