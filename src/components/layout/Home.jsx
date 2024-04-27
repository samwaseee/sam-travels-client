import React, { useState } from 'react';
import Header from './Header';
import { useLoaderData } from 'react-router-dom';
import TouristSpot from './TouristSpot';
import TopCountries from './TopCountries';
import Newsletter from './Newsletter';
import PhotoGallery from './PhotoGallery';
import { Helmet } from 'react-helmet';

const Home = () => {

    const loadedtouristSpots = useLoaderData();
    const [touristSpots, setTouristSpots] = useState(loadedtouristSpots);


    return (
        <div>
            <Helmet>
                <title>SAM Travels | Home</title>
            </Helmet>
            <Header></Header>
            <div className='py-20 bg-[#162b3223]'>
                <h3 className='text-center text-4xl font-bold'>Popular Tour Package</h3>
                <p className='text-center max-w-5xl mx-auto'>iscover the joy of travel with SAM Travels! We offer a wide range of tour packages that cater to all tastes and budgets. Our popular tour packages are carefully curated to provide you with an unforgettable travel experience. From the pristine beaches of Bali to the bustling streets of New York, our packages cover destinations across the globe.</p>
                <div className="flex flex-wrap gap-10 justify-center mt-10">
                    {
                        touristSpots.map(touristSpot => <TouristSpot
                            key={touristSpot._id}
                            touristSpot={touristSpot}
                            touristSpots={touristSpots}
                            setTouristSpots={setTouristSpots}
                        ></TouristSpot>)
                    }
                </div>
                <h3 className='text-center text-4xl font-bold mt-20'>Explore Top Destination Countries</h3>
                <p className='text-center max-w-5xl mx-auto'>Embark on an unforgettable journey with SAM Travels as we take you through some of the top destination countries in the world. Our curated travel packages cover a wide range of countries, each offering a unique blend of culture, history, and natural beauty.</p>
                <div className="flex flex-wrap gap-5 justify-center mt-10">
                    {
                        touristSpots.map(touristSpot => <TopCountries
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