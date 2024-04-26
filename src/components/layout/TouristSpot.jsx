import React from 'react';
import PropTypes from 'prop-types';

const TouristSpot = ({ touristSpot }) => {

    const { average_cost, country_Name, travel_time , image, location, seasonality, short_description, totalVisitorsPerYear, tourists_spot_name, user_email, user_name } = touristSpot

    // console.log(touristSpot);

    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src={image} alt={location} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{tourists_spot_name}</h2>
                    <p>{travel_time}</p>
                    <div className="card-actions justify-end">
                        <div className='flex-1'>
                            <p>From</p>
                            <p>$ <span className='text-[#ff4838] text-2xl font-bold'>{average_cost}.00</span> per person</p>
                        </div>
                        <button className="btn btn-outline text-[#ff4838]">BOOK NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

TouristSpot.propTypes = {

};

export default TouristSpot;