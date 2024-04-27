import React from 'react';
import PropTypes from 'prop-types';

const TopCountries = ({touristSpot}) => {

    const { average_cost, country_Name, image, description, totalVisitorsPerYear, tourists_spot_name, user_email, user_name } = touristSpot

    return (
        <div>
            <div className="card w-48 h-72 bg-base-100 shadow-xl image-full">
                <img src={image} alt={country_Name} className='w-full h-full rounded-xl' />
                <div className="card-body">
                    <h2 className="card-title">{country_Name}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

TopCountries.propTypes = {

};

export default TopCountries;