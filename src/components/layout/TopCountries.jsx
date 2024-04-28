import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TopCountries = ({touristSpot}) => {

    const { average_cost, country_Name, image, description, totalVisitorsPerYear, tourists_spot_name, user_email, user_name } = touristSpot


    return (
        <Link to={`countries/touriesSpots/${country_Name}`}>
            <div className="card w-48 h-72 bg-base-100 shadow-xl image-full hover:scale-110 duration-700">
                <img src={image} alt={country_Name} className='object-cover h-full w-full rounded-xl' />
                <div className="card-body">
                    <h2 className="card-title font-playfair">{country_Name}</h2>
                    <p className='text-xs'>{description}</p>
                </div>
            </div>
        </Link>
    );
};

TopCountries.propTypes = {

};

export default TopCountries;