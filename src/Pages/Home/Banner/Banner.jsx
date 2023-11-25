import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './banner.css'

const Banner = () => {
    return (
        <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <div className='banner1-bg h-[70vh] md:h-screen  text-center'>
                <h1 className='hidden md:block uppercase text-4xl font-bold pt-28'>WorkWave Group</h1>
                <p className=' hidden md:block text-xl mt-3'>Professional Working Environment</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='banner2-bg h-[70vh] md:h-screen text-center'>
                <h1 className='hidden md:block uppercase text-4xl font-bold pt-28'>We are creative</h1>
                <p className=' hidden md:block text-xl mt-3'>Team With Big Talents</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='banner3-bg h-[70vh] md:h-screen text-center text-white'>
                <h1 className='hidden md:block uppercase text-4xl font-bold pt-28'>We are the best</h1>
                <p className=' hidden md:block text-xl mt-3'>Professional Working Environment</p>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Banner;