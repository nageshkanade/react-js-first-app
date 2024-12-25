import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
/** FirstComponent**/ 
// import FirstComponent from './FirstComponent';
/*SecondComponent*/
// import SecondComponent from './SecondComponent';
/*Third*/
// import ThirdComponent from './ThirdComponent';
/*PrimaryComponent*/
import PrimaryComponent from './PrimaryComponent';
/** This is Home page**/
import Home from './container/Pages/Home';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <FirstComponent/> */}
    {/* <SecondComponent/> */}
    {/* <ThirdComponent /> */}
    <PrimaryComponent />
    <Home/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
