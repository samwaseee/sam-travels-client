import React from 'react';

const PhotoGallery = () => {
    return (
        <div className='mx-auto max-w-6xl'>
            <h3 className='text-5xl font-bold text-center mb-10'>TRAVEL GALLERY</h3>
            <div className="grid grid-cols-3 gap-3">
                <img className='row-span-2 mb-3' src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-xl1.png" alt="" />
                <img className='' src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-sm1.png" alt="" />
                <img className='row-span-2' src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-xl3.png" alt="" />
                <img className='' src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-sm2.png" alt="" />
                <img className='' src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-md1.png" alt="" />
                <img className='' src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-md2.png" alt="" />
                <img className='' src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/gallary/g-md3.png" alt="" />
            </div>
        </div>
    );
};

export default PhotoGallery;