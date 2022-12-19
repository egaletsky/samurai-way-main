import React from 'react'
import preloader from '../../../assets/Spinner.svg';

export const Preloader = () => {
    return (
        <div style={{backgroundColor: 'white'}}>
            <img src={preloader}/>
        </div>
    )
}

