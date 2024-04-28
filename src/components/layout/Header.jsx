import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'animate.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Fade, Zoom } from 'react-awesome-reveal';

const Header = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='lg:flex lg:h-fit h-screen bg-[#162B32E6] items-center '>
                        <img src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/banner/bg-highlight1.png" />
                        <div className='text-white ml-8'>
                            <Fade direction='down'>
                                <h3 className='text-[#ff4838] text-7xl font-playfair font-bold'>
                                    Travel <span className='font-serif'>&</span> <span style={{ WebkitTextStroke: '2px #ff4838', WebkitTextFillColor: 'transparent' }}>Adventure</span>
                                </h3>
                            </Fade>
                            <Fade direction='up'>
                                <p className='my-8'>when intertwined, create a tapestry of experiences that enrich the human spirit. It is not merely about traversing the globe, but rather, it’s an exploration of the self amidst the vastness of this world.</p>
                            </Fade>
                            <Fade direction='up' delay={500}>
                                <div>
                                    <button className='btn bg-[#ff4838] mr-7'>View Adventure</button>
                                    <button className='btn btn-outline text-[#ff4838]'>Take A Tour</button>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:flex lg:h-fit h-screen bg-[#162B32E6] items-center '>
                        <img src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/banner/bg-highlight2.png" />
                        <div className='text-white ml-8'>
                            <Fade direction='down'>
                                <h3 className='text-[#ff4838] text-7xl font-playfair font-bold animate__animated animate__slideInLeft'>
                                    Move The <br /> <span style={{ WebkitTextStroke: '2px #ff4838', WebkitTextFillColor: 'transparent' }}>Earth</span>
                                </h3>
                            </Fade>
                            <Fade direction='up'>
                                <p className='my-8'>Let’s challenge the status quo, disrupt the ordinary, and transform the world. Because when we move the Earth, we’re not just changing our surroundings – we’re changing ourselves. </p>
                            </Fade>
                            <Fade direction='up' delay={500}>
                                <div>
                                    <button className='btn bg-[#ff4838] mr-7'>View Adventure</button>
                                    <button className='btn btn-outline text-[#ff4838]'>Take A Tour</button>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='lg:flex lg:h-fit h-screen bg-[#162B32E6] items-center '>
                        <img src="https://demo.egenslab.com/html/tourxpro/demo/assets/images/banner/bg-highlight3.png" />
                        <div className='text-white ml-8'>
                            <Fade direction='down'>
                                <h3 className='text-[#ff4838] text-7xl font-playfair font-bold'>
                                    Travel <span className='font-serif'>&</span> <span style={{ WebkitTextStroke: '2px #ff4838', WebkitTextFillColor: 'transparent' }}>Adventure</span>
                                </h3>
                            </Fade>
                            <Fade direction='up'>
                                <p className='my-8'>when intertwined, create a tapestry of experiences that enrich the human spirit. It is not merely about traversing the globe, but rather, it’s an exploration of the self amidst the vastness of this world.</p>
                            </Fade>
                            <Fade direction='up' delay={500}>
                                <div>
                                    <button className='btn bg-[#ff4838] mr-7'>View Adventure</button>
                                    <button className='btn btn-outline text-[#ff4838]'>Take A Tour</button>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Header;