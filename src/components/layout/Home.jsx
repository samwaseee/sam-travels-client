import React, { useState } from 'react';
import Header from './Header';
import { useLoaderData } from 'react-router-dom';
import TouristSpot from './TouristSpot';
import TopCountries from './TopCountries';
import Newsletter from './Newsletter';
import PhotoGallery from './PhotoGallery';
import { Helmet } from 'react-helmet';
import Countries from './Countries';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {

    const loadedtouristSpots = useLoaderData();
    const [touristSpots, setTouristSpots] = useState(loadedtouristSpots);
    const [dataLength, setDataLength] = useState(6);


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
                        touristSpots.slice(0, dataLength).map(touristSpot => <TouristSpot
                            key={touristSpot._id}
                            touristSpot={touristSpot}
                            touristSpots={touristSpots}
                            setTouristSpots={setTouristSpots}
                        ></TouristSpot>)
                    }
                </div>
                <div className={dataLength === touristSpots.length ? 'hidden' : 'mx-auto w-28 my-10'}>
                    <button onClick={() => setDataLength(touristSpots.length)} className='btn btn-ghost min-h-0 h-8 text-white bg-[#ff4838] rounded-3xl'>Load more</button>
                </div>
                <h3 className='text-center text-4xl font-bold mt-20'>Explore The {' '}
                    <span style={{ color: '#ff4838', fontWeight: 'bold' }}>
                        <Typewriter
                            words={['Top', 'Upmost', 'Famous', 'Spectacular']}
                            loop={0}
                            cursor
                            cursorStyle=''
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span> Destination Countries</h3>
                <p className='text-center max-w-5xl mx-auto'>Embark on an unforgettable journey with SAM Travels as we take you through some of the top destination countries in the world. Our curated travel packages cover a wide range of countries, each offering a unique blend of culture, history, and natural beauty.</p>
                <Countries></Countries>
                <Newsletter></Newsletter>
                <PhotoGallery></PhotoGallery>
            </div>
        </div>
    );
};

export default Home;