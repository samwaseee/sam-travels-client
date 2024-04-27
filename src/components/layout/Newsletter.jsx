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
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;