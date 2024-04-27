import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TouristSpot from './TouristSpot';
import Spot from './Spot';

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
    <div className="mt-10">
      <div className='flex justify-center mb-10'>
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