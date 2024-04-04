import React from 'react';
import './style.css';

import DroidPic from '../../assets/images/especiesPics/droid.png';
import NotFound from '../../assets/images/especiesPics/notFound.png';

const Card = ({data, onClick}) => {
    
    const imgUrl = data.species == 'https://swapi.dev/api/species/2/' ? DroidPic : NotFound;

    return (
        <div className='card' onClick={onClick}>
            <img src={imgUrl} alt={data.name} />
            <p>{data.name}</p>
        </div>
    );
};

export default Card;
