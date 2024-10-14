import react from 'react'
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button} from '@geist-ui/react'
import { HeartFill, X } from '@geist-ui/react-icons'

import './style.css'
import 'swiper/css';
import 'swiper/css/effect-cards';

const SwapperC = () => {
    return  <div style={{position:"relative",height:'80vh',padding:"10px 0px"}}>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
    >
        <SwiperSlide>
            
            <div className='swiper-slide--button---div '>
                 <Button className='swiper-slide--button' iconRight={<X size={52}/>} auto scale={3/3} px={1} />
                 <Button className='swiper-slide--button' iconRight={<HeartFill size={52} />} auto scale={3/3} px={1} />
            </div>

        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
  </Swiper>
    </div>
}


export default SwapperC