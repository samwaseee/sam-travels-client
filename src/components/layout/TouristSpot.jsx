import React from 'react';
import PropTypes from 'prop-types';
import { MdAccessTime } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { SiSpring } from 'react-icons/si';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const TouristSpot = ({ touristSpot , touristSpots , setTouristSpots }) => {

    const { _id, average_cost, country_Name, travel_time, image, location, seasonality, short_description, totalVisitorsPerYear, tourists_spot_name, user_email, user_name } = touristSpot

    // console.log(touristSpot);
    const handleDelete = _id => {
        // console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/touristSpot/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = touristSpots.filter(tSpot => tSpot._id !== _id)
                            setTouristSpots(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="card w-96 glass ">
                <img src={image} alt={location} />
                <div onClick={() => handleDelete(_id)} className='btn btn-error text-black absolute right-1 top-1 glass'>X</div>
                <Link to={`/updateSpot/${_id}`}>
                    <div className='btn btn-error text-black absolute right-1 top-14 glass'>Edit</div>
                </Link>
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