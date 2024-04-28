import React, { useEffect, useState } from 'react';
import TopCountries from './TopCountries';

const Countries = () => {

    const [touristSpots,setTouristSpots] = useState([]);

    // fetch('http://localhost:5000/countries')
    // .then(res => res.json())
    // .then(data => {
    //     // console.log(data);
    //     setTouristSpots(data)
    // })

    useEffect(() => {
        fetch('http://localhost:5000/countries')
            .then(res => res.json())
            .then(data => {
                setTouristSpots(data);
            });
    }, [])

    return (
        <div>
            <div className="flex flex-wrap gap-5 justify-center mt-10">
                {
                    touristSpots.map(touristSpot => <TopCountries
                        key={touristSpot._id}
                        touristSpot={touristSpot}
                    ></TopCountries>)
                }
            </div>
        </div>
    );
};

export default Countries;