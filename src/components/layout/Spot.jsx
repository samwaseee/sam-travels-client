import { MdAccessTime } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { SiSpring } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Spot = ({ touristSpot }) => {

    const { _id, average_cost, country_Name, travel_time, image, location, seasonality, short_description, totalVisitorsPerYear, tourists_spot_name, user_email, user_name } = touristSpot


    return (
        <div>
            <div className="glass lg:flex mb-10">
                <img src={image} alt={country_Name} className='w-full md:w-fit'/>
                <div className="card-body">
                    <div className='absolute -top-2 left-0'>
                        <div className='badge bg-[#ff4838] flex gap-2 text-lg p-4 font-bold text-white'> <IoLocationOutline /> {location}</div>
                    </div>
                    <h2 className="card-title font-playfair text-4xl">{tourists_spot_name}</h2>
                    <p className='text-xl font-bold'>{country_Name}</p>
                    <p className='flex items-center gap-2'> <MdAccessTime />
                        <p className="flex-1">{travel_time}</p>

                        <div className='flex gap-2 items-center text-lg p-4'> <SiSpring />  {seasonality}</div></p>
                    <div className="card-actions justify-end">
                        <div className='flex-1'>
                            <p>From</p>
                            <p>$ <span className='text-[#ff4838] text-2xl font-bold'>{average_cost}.00</span>/ person</p>
                        </div>
                        <Link to={`/touristSpot/${_id}`}>
                            <button className="btn btn-outline text-[#ff4838]">VIEW DETAILS</button>
                        </Link>
                    </div>
                    <p>{totalVisitorsPerYear / 1000}K Visitors comes per year</p>
                </div>
            </div>
        </div>
    );
};

export default Spot;