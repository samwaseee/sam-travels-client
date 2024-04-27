import React from 'react';

const Newsletter = () => {
    return (
        <div className="hero my-20" style={{ background: `linear-gradient(90deg, #162b32b2, #162b329b), url('https://demo.egenslab.com/html/tourxpro/demo/assets/images/banner/newslatter-bg.png')`, backgroundRepeat: 'no-repeat' }}>
            <div className="hero-content text-white flex-col lg:flex-row-reverse">
                <div>

                </div>
                <div>
                    <h1 className="text-5xl font-bold">SUBSCRIBE OUR</h1>
                    <h2 className='text-5xl font-bold text-[#ff4838]'>NEWSLETTER</h2>
                    <p className="py-6">Stay up-to-date with the latest news, exclusive offers, and exciting updates by subscribing to our newsletter! Be the first to know about new product launches, upcoming events, and special promotions. Our newsletter is your gateway to a world of information, delivered right to your inbox. Don’t miss out—subscribe today and join our community of informed subscribers!</p>
                    <div className="join" >
                        <input className="input input-bordered join-item" placeholder="Email" />
                        <button className="btn bg-[#ff4838] join-item rounded-r-full">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;