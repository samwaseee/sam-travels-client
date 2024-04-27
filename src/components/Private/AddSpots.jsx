import React, { useContext, useRef } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthProvider';

const AddSpots = () => {


    const { user } = useContext(AuthContext);
    // console.log(user);

    const countryRef = useRef(null);

    const handleAddTouristSpot = e => {
        e.preventDefault();

        const form = e.target;

        const user_name = form.name.value;
        const user_email = form.user_email.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const country_Name = countryRef.current.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const image = form.photo.value;

        const newSpot = { average_cost, country_Name, travel_time, image, location, seasonality, short_description, totalVisitorsPerYear, tourists_spot_name, user_email, user_name }

        // console.log(form.country_Name);

        fetch('http://localhost:5000/touristSpot', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success",
                        text: "New Tourist Spot Added Successfully!",
                        icon: "success"
                    });
                }
                form.reset();
            })

    }


    return (
        <form onSubmit={handleAddTouristSpot} className='p-32 mx-auto ' style={{ background: `linear-gradient(90deg, #162b32b2, #162b329b), url('https://demo.egenslab.com/html/tourxpro/demo/assets/images/banner/hero-bg1.png')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <h3 className='text-5xl font-playfair text-white text-center font-bold mb-20'>Add Your Favourite Tourists Spot</h3>
            <div className='grid grid-cols-3 gap-3'>
                <label className="form-control w-full col-span-2 flex">
                    <div className="label">
                        <span className="label-text text-white">User Email</span>
                    </div>
                    <input type="email" name='user_email' defaultValue={user.email} placeholder="Type here" className="input input-bordered text-xl font-bold font-playfair w-full " disabled />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text text-white">Tourist Spot Name</span>
                    </div>
                    <input type="text" name='tourists_spot_name' placeholder="Type here" className="input input-bordered w-full " />
                </label>
                <label className="form-control col-span-2 w-full ">
                    <div className="label">
                        <span className="label-text text-white">User Name</span>
                    </div>
                    <input type="text" name='user_name' defaultValue={user.displayName} placeholder="Type here" className="input input-bordered text-xl font-bold font-playfair w-full " disabled />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text text-white">Country Name</span>
                    </div>
                    <select className="select select-bordered w-full " ref={countryRef}>
                        <option disabled selected>Country</option>
                        <option>France</option>
                        <option>Italy</option>
                        <option>Spain</option>
                        <option>England</option>
                        <option>Netherlands</option>
                        <option>Switzerland</option>
                    </select>
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text text-white">Location</span>
                    </div>
                    <input type="text" name='location' placeholder="Type here" className="input input-bordered w-full " />
                </label>

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text text-white">Seasonality</span>
                    </div>
                    <input type="text" name='seasonality' placeholder="Ex. Summer / Winter" className="input input-bordered w-full " />
                </label>

                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text text-white">Travel Time</span>
                    </div>
                    <input type="number" name='travel_time' placeholder="Ex. 7 days" className="input input-bordered w-full " />
                </label>
                <label className="form-control w-full col-span-2 row-span-2">
                    <div className="label">
                        <span className="label-text text-white">Short Description</span>
                    </div>
                    <textarea className="textarea textarea-bordered w-full h-full" name='short_description' placeholder="Write a short description about the tourist spot here."></textarea>
                    {/* <input type="text" name='shortDescription' placeholder="Type here" className="textarea textarea-bordered text-start w-full h-full" /> */}
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text text-white">Total Visitor Per Year</span>
                    </div>
                    <input type="number" name='totalVisitorsPerYear' placeholder="Ex. 1000 " className="input input-bordered w-full " />
                </label>
                <label className="form-control w-full ">
                    <div className="label">
                        <span className="label-text text-white">Average Cost</span>
                    </div>
                    <input type="number" name='average_cost' placeholder="Type here" className="input input-bordered w-full " />
                </label>


                <label className="form-control col-span-3 w-full mx-auto">
                    <div className="label">
                        <span className="label-text text-white">Photo URL</span>
                    </div>
                    <input type="URL" name='photo' placeholder="Use image URL" className="input input-bordered " />
                </label>
                <input type="submit" value="ADD TOURIST SPOT" className='btn btn-ghost text-white font-bold text-xl bg-[#ff4838] col-span-3 mt-7' />
            </div>
        </form>
    );
};

export default AddSpots;