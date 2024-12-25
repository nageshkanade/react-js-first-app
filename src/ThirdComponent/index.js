import React from 'react';
import './ThirdComponent.css';

const ThirdComponent=(getclientName)=>
    {
        return(
            <>
            <h1 className='secondColor'>Hello Developer Guru:{getclientName.clientName}</h1>
            </>
        )
    }

    export default ThirdComponent;