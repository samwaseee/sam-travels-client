import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TouristSpot from './TouristSpot';
import Spot from './Spot';
import { Helmet } from 'react-helmet';

const AllTouristSpot = () => {
  const touristSpots = useLoaderData();

  const [displayAllSpots, setDisplayAllSpots] = useState(touristSpots);

  const handleSpotSort = (event) => {
    event.preventDefault();

    if (event.target.value === 'average_cost') {
      const costSort = [...touristSpots].sort((a, b) => b.average_cost - a.average_cost);
      setDisplayAllSpots(costSort);
    }
  }

  return (
    <div className="mt-10 max-w-[92vw] mx-auto">
      <Helmet>
        <title>SAM Travels | Tourist Spots</title>
      </Helmet>
      <div className='flex justify-center text-black mb-10'>
        <select onChange={handleSpotSort} className="select w-full max-w-xs">
          <option disabled selected>sort</option>
          <option value="average_cost">Average Cost</option>
        </select>
      </div>
      {
        displayAllSpots.map(touristSpot => <Spot
          key={touristSpot._id}
          touristSpot={touristSpot}
        ></Spot>)
      }
    </div>
  );
};

export default AllTouristSpot;