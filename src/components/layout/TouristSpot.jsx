import React from 'react';
import PropTypes from 'prop-types';
import { MdAccessTime } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { SiSpring } from 'react-icons/si';

const TouristSpot = ({ touristSpot }) => {

    const { average_cost, country_Name, travel_time, image, location, seasonality, short_description, totalVisitorsPerYear, tourists_spot_name, user_email, user_name } = touristSpot

    // console.log(touristSpot);

    return (
        <div>
            <div className="card w-96 glass">
                <img src={image} alt={location} />
                <div className="card-body">
                    <div className=' -mt-12'>
                        <div className='badge bg-[#ff4838] flex gap-2 text-lg p-4 font-bold text-white'> <IoLocationOutline /> {location}</div>
                    </div>
                    <h2 className="card-title">{tourists_spot_name}</h2>
                    <p className='flex items-center gap-2'> <MdAccessTime />
                        <p className="flex-1">{travel_time}</p>
                        <div className='flex gap-2 items-center text-lg p-4'> <SiSpring />  {seasonality}</div></p>
                    <div className="card-actions justify-end">
                        <div className='flex-1'>
                            <p>From</p>
                            <p>$ <span className='text-[#ff4838] text-2xl font-bold'>{average_cost}.00</span>/ person</p>
                        </div>
                        <button className="btn btn-outline text-[#ff4838]">VIEW DETAILS</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

TouristSpot.propTypes = {

};

export default TouristSpot;