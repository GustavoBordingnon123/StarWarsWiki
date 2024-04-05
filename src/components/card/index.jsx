import React, { useEffect, useState } from 'react';
import './style.css';

import characterPic from '../../assets/images/droid.png';
import vehiclesPic from '../../assets/images/veihcule.png';
import startShipsPic from '../../assets/images/starshipPic.png';
import planetsPic from '../../assets/images/planet.png';
import speciesPic from '../../assets/images/speciesPic.png';
import NotFound from '../../assets/images/especiesPics/notFound.png';

const Card = ({ data, onClick, activeRoute }) => {
    const getImageUrl = (route) => {
        switch (route) {
            case 'people':
                return characterPic;
            case 'starships':
                return vehiclesPic;
            case 'vehicles':
                return startShipsPic;
            case 'planets':
                return planetsPic;
            case 'species':
                return speciesPic;
            default:
                return NotFound;
        }
    };

    const imgUrl = getImageUrl(activeRoute);

    const getNinthItem = (obj) => {
        const keys = Object.keys(obj);
        if (keys.length > 8) {
            const ninthKey = keys[8];
            const ninthValue = obj[ninthKey];
            return { key: ninthKey, value: ninthValue };
        }
        return null;
    };

    const ninthItem = getNinthItem(data);

    const [itemValue, setItemValue] = useState('');

    useEffect(() => {
        const fetchItemName = async () => {
            try {
                const response = await fetch(ninthItem.value);
                const itemData = await response.json();
                setItemValue(itemData.name);
            } catch (error) {
                console.error('Error fetching item name:', error);
                setItemValue('Unknown');
            }
        };

        if ((activeRoute === 'people' || activeRoute === 'species') && ninthItem) {
            fetchItemName();
        } else {
            setItemValue(ninthItem.value);
        }
    }, [activeRoute, ninthItem]);

    return (
        <section className="container" onClick={onClick}>
            <div className="card-container">
                <div className="card-content">
                    <div className="card-title">
                        <span className="title">{data.name}</span>
                    </div>
                    <div className="card-body">
                        <img src={imgUrl} alt={data.name} />
                    </div>
                    {ninthItem && (
                        <div className="card-footer">
                            <span className="title">{ninthItem.key}:</span>
                            <span className="title">{itemValue}</span>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Card;
