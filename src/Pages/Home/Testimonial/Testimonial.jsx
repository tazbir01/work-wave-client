import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('./review.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <div className="divider text-2xl font-bold">Testimonial</div> 
            <>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={false}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    {
                        reviews.map(review => <SwiperSlide key={review.id}>
                            <div className='space-y-3 px-16'>
                                <p className='text-2xl'><FaQuoteLeft></FaQuoteLeft></p>
                                <p className='text-xl'>{review.quote}</p>
                                <div className='flex justify-end'><p className='text-2xl'><FaQuoteRight></FaQuoteRight></p></div>
                                <p className='text-2xl font-bold border-t-2 inline-block'>{review.author}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </>
        </div>
    );
};

export default Testimonial;