import React from 'react';
import Spot from '../layout/Spot';
import { useLoaderData } from 'react-router-dom';
import PersonalTouristSpot from './PersonalTouristSpot';

const MyList = () => {

    const touristSpots = useLoaderData();
    console.log(touristSpots);

    return (
        <div className='my-10'>
            <h3 className='text-4xl mb-10 text-center font-playfair font-bold'>Here's Your Tourists Spot List</h3>
            {/* {
                touristSpots.map(touristSpot => <PersonalTouristSpot
                    key={touristSpot._id}
                    touristSpot={touristSpot}
                ></PersonalTouristSpot>)
            } */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr> */}
                        {
                            touristSpots.map(touristSpot => <tr
                                key={touristSpot._id}
                            >
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={touristSpot.image} alt={touristSpot.country_Name} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{touristSpot.tourists_spot_name}</div>
                                            <div className="text-sm opacity-50">{touristSpot.location},{touristSpot.country_Name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {touristSpot.short_description}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{touristSpot.average_cost}$ per person</span>
                                    <span className="badge badge-ghost badge-sm">{touristSpot.travel_time}</span>
                                    <span className="badge badge-ghost badge-sm">{touristSpot.seasonality}</span>
                                </td>
                            </tr>)
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default MyList;