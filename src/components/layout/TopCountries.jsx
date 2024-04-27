import React from 'react';
import PropTypes from 'prop-types';

const TopCountries = ({touristSpot}) => {

    const { average_cost, country_Name, travel_time, image, location, seasonality, short_description, totalVisitorsPerYear, tourists_spot_name, user_email, user_name } = touristSpot

    return (
        <div>
            <div className="card w-64 bg-base-100 shadow-xl image-full">
                <img src={image} alt={country_Name} className='w-full h-full rounded-xl' />
                <div className="card-body">
                    <h2 className="card-title">{country_Name}</h2>
                    <p>{totalVisitorsPerYear/1000}K Visitors Per Year</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline text-[#ff4838]">See Places</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

TopCountries.propTypes = {

};

export default TopCountries;