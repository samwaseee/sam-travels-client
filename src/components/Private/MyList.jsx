import { useLoaderData } from 'react-router-dom';
import { MdAccessTime, MdOutlineDeleteForever } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { SiSpring } from 'react-icons/si';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const MyList = () => {

    const touristSpots = useLoaderData();
    // console.log(touristSpots[0].user_name);

    const navigate = useNavigate();

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
                fetch(`https://sam-travels-server.vercel.app/touristSpot/${_id}`, {
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
                            navigate('/');
                        }
                    })
            }
        });
    }

    return (
        <div className='my-10 min-h-[50vh]'>
            <Helmet>
                <title>SAM Travels | {touristSpots[0].user_name}s List</title>
            </Helmet>
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
                            <th>Tourist Spot</th>
                            <th>Details</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
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
                                            <div className="text-sm opacity-50 flex items-center gap-1"> <IoLocationOutline /> {touristSpot.location},{touristSpot.country_Name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {touristSpot.short_description}
                                    <div className='flex gap-2 my-3'>
                                        <span className="badge badge-ghost badge-sm">{touristSpot.average_cost}$ per person</span>
                                        <span className="badge badge-ghost badge-sm"> <MdAccessTime /> <span className='ml-1'>{touristSpot.travel_time}</span> </span>
                                        <span className="badge badge-ghost badge-sm"> <SiSpring /> <span className='ml-1'>{touristSpot.seasonality}</span></span>

                                    </div>
                                </td>
                                <td>
                                    <Link to={`/updateSpot/${touristSpot._id}`}>
                                        <div className='btn btn-ghost text-black glass'>Edit</div>
                                    </Link>
                                </td>
                                <th>
                                    <div onClick={() => handleDelete(touristSpot._id)} className='btn btn-error text-black glass'> <MdOutlineDeleteForever size={30} /> </div>
                                </th>
                            </tr>)
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th> Cost <span className='mx-20'>Time</span> Season</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default MyList;