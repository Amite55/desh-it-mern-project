import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Pagination, Navigation, HashNavigation } from 'swiper/modules';

import img1 from "../../assets/banner/gabby-orcutt-7E29j_4GBNI-unsplash.jpg";
import img2 from "../../assets/banner/games-2801332_1280.jpg";
import img3 from "../../assets/banner/merry-christmas-3046494_1280.jpg";

const Banner = () => {
    return (
        <>
            <section className='h-[80vh] max-w-7xl text-center mx-auto'>

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    hashNavigation={{
                        watchState: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation, HashNavigation]}
                    className="mySwiper h-full"
                >
                    <SwiperSlide data-hash="slide1">
                        <img className='w-full h-[80vh] object-cover' src={img1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide2">
                        <img className='w-full h-[80vh] object-cover' src={img2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide data-hash="slide3">
                        <img className='w-full h-[80vh] object-cover' src={img3} alt="" />
                    </SwiperSlide>
                </Swiper>
            </section>
        </>
    );
};

export default Banner;