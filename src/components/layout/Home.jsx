import React from 'react';
import Header from './Header';
import { useLoaderData } from 'react-router-dom';
import TouristSpot from './TouristSpot';
import TopCountries from './TopCountries';
import Newsletter from './Newsletter';
import PhotoGallery from './PhotoGallery';

const Home = () => {

    const touristSpots = useLoaderData();


    return (
        <div>
            <Header></Header>
            <div className='py-20 bg-[#162b3223]'>
                <h3 className='text-center text-4xl font-bold'>Popular Tour Package</h3>
                <div className="flex flex-wrap gap-10 justify-center mt-10">
                    {
                        touristSpots.map(touristSpot => <TouristSpot
                            key={touristSpot._id}
                            touristSpot={touristSpot}
                        ></TouristSpot>)
                    }
                </div>
                <h3 className='text-center text-4xl font-bold mt-20'>Explore Top Destination Countries</h3>
                <div className="flex flex-wrap gap-5 justify-center mt-10">
                    {
                        touristSpots.slice(0, 5).map(touristSpot => <TopCountries
                            key={touristSpot._id}
                            touristSpot={touristSpot}
                        ></TopCountries>)
                    }
                </div>
                <Newsletter></Newsletter>
                <PhotoGallery></PhotoGallery>
            </div>
        </div>
    );
};

export default Home;