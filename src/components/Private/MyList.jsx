import React from 'react';
import Spot from '../layout/Spot';
import { useLoaderData } from 'react-router-dom';

const MyList = () => {

    const touristSpots = useLoaderData();

    return (
        <div>
            {
                touristSpots.map(touristSpot => <Spot
                    key={touristSpot._id}
                    touristSpot={touristSpot}
                ></Spot>)
            }
        </div>
    );
};

export default MyList;