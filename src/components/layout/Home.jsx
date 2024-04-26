import React from 'react';
import Header from './Header';
import { useLoaderData } from 'react-router-dom';
import TouristSpot from './TouristSpot';

const Home = () => {

    const touristSpots = useLoaderData();


    return (
        <div>
            <Header></Header>
            <div className='flex flex-wrap gap-10 justify-center my-20'>
                {
                    touristSpots.map(touristSpot => <TouristSpot
                    key={touristSpot._id}
                    touristSpot={touristSpot}
                    ></TouristSpot>)
                }
            </div>
        </div>
    );
};

export default Home;