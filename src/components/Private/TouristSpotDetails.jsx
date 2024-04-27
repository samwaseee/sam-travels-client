import React from 'react';
import { Helmet } from 'react-helmet';
import { FaCheck, FaInstagram } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { LuPhone } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';
import { useLoaderData } from 'react-router-dom';

const TouristSpotDetails = () => {

    const touristSpot = useLoaderData();
    const { _id, average_cost, country_Name, travel_time, image, location, seasonality, short_description, totalVisitorsPerYear, tourists_spot_name, user_email, user_name } = touristSpot;


    return (
        <div>
            <Helmet>
                <title>SAM Travles | {tourists_spot_name}</title>
            </Helmet>

            <img src={image} className="h-[60vh] mx-auto mt-10 rounded-3xl" />
            <div className="w-[85vw] lg:max-w-[50vw] mx-auto">
                <div className="flex gap-4 items-center my-10">
                    <div className='badge flex gap-2 p-4 text-xl'> <FaLocationDot></FaLocationDot> {location}</div>
                </div>

                <h2 className="card-title font-merri text-4xl">
                    {tourists_spot_name}
                </h2>
                <div className="card my-20 bg-base-100 shadow-xl">
                    <div className="card-body font-playfair text-3xl">
                        <h2 className="card-title"></h2>
                        <p>{short_description}</p>
                    </div>
                </div>
                <p className='text-2xl mb-10'>{totalVisitorsPerYear / 1000}K Visitors comes every year to enjoy this monument in {country_Name}</p>
                <p><span className="text-3xl font-semibold ">{average_cost} $ </span> per person</p>
                <div className="flex flex-wrap justify-between">
                    <div className="flex items-center gap-7 my-5">
                        <div>
                            <div className='flex justify-center items-center gap-2'>

                            </div>

                            <p>{travel_time}</p>
                        </div>
                        <div>
                            <div className='flex justify-center items-center gap-2'>

                            </div>
                            <p>{seasonality}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <p>Included</p>
                    <div>
                        <p className='flex items-center gap-3'> <FaCheck /> Specilaized Bilingual Guide</p>
                        <p className='flex items-center gap-3'><FaCheck /> Private Transport</p>
                        <p className='flex items-center gap-3'> <FaCheck></FaCheck> Entrance Fees</p>
                        <p className='flex items-center gap-3'> <FaCheck /> Box Lunch,Water,Dinner and Snacks</p>
                    </div>
                </div>
                <div className="flex items-center gap-10 mt-5">
                    <p>Excluded</p>
                    <div>
                        <p className='flex items-center gap-3'> <RxCross2 />  Additional Services</p>
                        <p className='flex items-center gap-3'><RxCross2 /> Insurance</p>
                        <p className='flex items-center gap-3'> <RxCross2 /> Drink</p>
                        <p className='flex items-center gap-3'> <RxCross2 /> Tickets</p>
                    </div>
                </div>



                <div className="hero bg-base-200 mt-20 rounded-2xl">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left mx-5">
                            <div className="flex items-center">
                                <img src='https://demo.egenslab.com/html/tourxpro/demo/assets/images/reviewer/r-sm2.png' className=" rounded-lg mr-5" />
                                <div>
                                    <p className="font-bold border-b-2">{ }</p>
                                    <p>Tour Guide</p>
                                </div>
                            </div>
                            <button className="btn bg-black text-white w-full mt-5">Send Email</button>
                            <div className="flex items-center my-5 gap-4">
                                <button className="btn btn-outline w-1/2"> <LuPhone /> Call</button>
                                <button className="btn btn-outline w-1/2"> <FaInstagram /> DM</button>
                            </div>

                        </div>
                        <div className="card max-w-sm shadow-2xl bg-base-100 rounded-4xl">
                            <form className="card-body">
                                <div className="form-control">
                                    <p>Request info</p>
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="text" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="text" placeholder="Your Phone" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"></span>
                                    </label>
                                    <input type="text" placeholder="Your Email" className="input input-bordered" required />
                                    <label className="label">
                                        <textarea className="textarea textarea-bordered w-full h-28" placeholder="I'm interested in [ Tourist Spots with Amazing View ]"></textarea>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotDetails;