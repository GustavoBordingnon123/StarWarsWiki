import React from 'react';
import Styles from './style.css';

import HumanPic from '../../assets/images/especiesPics/Human.webp';
import NotFound from '../../assets/images/especiesPics/notFound.png';

const Card = ({data}) => {

    console.log(data.species)
    const imgUrl = data.species === 'https://swapi.dev/api/species/1/' ? HumanPic : NotFound;

    return (
        <div className='card'>
            <img src={imgUrl} alt={data.name} />
            <p>{data.name}</p>
        </div>
    )
}

export default Card;
