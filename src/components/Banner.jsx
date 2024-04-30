import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide1 from "../../public/slide1.webp"
import slide2 from "../../public/slide2.webp"
import slide3 from "../../public/pic3.jpg"
import { Typewriter } from 'react-simple-typewriter'
import { Fade } from "react-awesome-reveal";

import './styles.css';


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='w-full'>
            <Swiper
            loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        
      >
       <SwiperSlide>
            <div className='lg:h-[650px]  md:h-[350px] h-[350px]'>
              <div className="hero lg:h-[650px]  md:h-[350px] h-[350px]" style={{backgroundImage: `url(${slide1})`}}>
               <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content absolute sm:pl-14  lg:left-[450px] top-10 lg:top-40  text-neutral-content">
                <div className='relative'>
                  <Fade direction='down' duration={1000} delay={200}>
                  <h1 className="lg:mb-5 mb-3 text-2xl lg:text-5xl font-bold 	">
                    
                    <span style={{ color: 'white', fontWeight: 'bold' }}>
                       {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={['Explore the Magic of Bali']}
                      loop={5}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    
                    />
                  </span>
                    </h1>
                  </Fade>
                  <Fade direction='up' delay={200} duration={1000}>
                    <p className=" 	" >Delve into the enchanting beauty of Bali, where lush rice terraces, ancient temples, and azure<br></br> waters converge. Experience the essence of paradise as you immerse yourself in Bali`s </p>
                  </Fade>
                  <Fade delay={200} duration={1000} direction='up'>
                  <button className=" text-white btn-ghost hover:rounded-xl hover:px-4  hover:bg-[#5356FF]">Read More..</button>
                  </Fade>
                  <div className='bg-[#00A9FF] text-white absolute -rotate-3  lg:-top-12 -top-6    lg:w-[130px] lg:px-3 lg:py-2 px-2  rounded-xl'>
                    <h2 className='lg:font-bold font-medium lg:text-xl text-base'>Best Place</h2>
                  </div>
                </div>
              </div>
          </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='lg:h-[650px]  md:h-[350px] h-[350px]'>
              <div className="hero lg:h-[650px]  md:h-[350px] h-[350px]" style={{backgroundImage: `url(${slide2})`}}>
               <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content absolute sm:pl-14  lg:left-[450px] top-10 lg:top-40  text-neutral-content">
                <div className='relative'>
                  <Fade direction='down' delay={200} duration={1000}>
                  <h1 className="lg:mb-5 mb-3 text-2xl lg:text-5xl font-bold 	">
                    
                    <span style={{ color: 'white', fontWeight: 'bold' }}>
                       {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={['Discover The Saint Martin']}
                      loop={5}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    
                    />
                  </span>
                    </h1>
                  </Fade>
                   <Fade direction='up' delay={200} duration={1000}>
                   <p className=" 	">Unveil the allure of Saint Martin`s breathtaking landscapes, pristine beaches,<br></br> and vibrant culture. Embark on a journey of exploration and relaxation in this tropical paradise.</p>
                   </Fade>
                  <Fade direction='up' delay={200} duration={1000}>
                  <button className=" text-white btn-ghost hover:rounded-xl hover:px-4  hover:bg-[#5356FF]">Read More..</button>
                  </Fade>
                  <div className='bg-[#00A9FF] text-white absolute -rotate-3  lg:-top-12 -top-6     lg:w-[130px] lg:px-3 lg:py-2 px-2  rounded-xl'>
                    <h2 className='lg:font-bold font-medium lg:text-xl text-base'>Best Place</h2>
                  </div>
                </div>
              </div>
          </div>
            </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='lg:h-[650px] slid md:h-[350px] h-[350px]'>
              <div className="hero lg:h-[650px]  md:h-[350px] h-[350px]" style={{backgroundImage: `url(${slide3})`}}>
               <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content absolute sm:pl-14 lg:left-[450px] top-10 lg:top-40  text-neutral-content">
                <div className='relative'>
                <Fade direction='down' delay={200} duration={1000}>
                <h1 className="lg:mb-5 mb-3 text-2xl lg:text-5xl font-bold 	">
                    
                    <span style={{ color: 'white', fontWeight: 'bold' }}>
                       {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={['The Mystical Sundarbans']}
                      loop={5}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    
                    />
                  </span>
                    </h1>
                </Fade>
                  
                 <Fade direction='up' delay={200} duration={1000}>
                 <p className=" 	">The mystical heart of the Sundarbans, where dense mangrove forests meet the winding rivers.<br></br>The unique wildlife and serene beauty of this UNESCO World Heritage Site,</p>
                 </Fade>
                 <Fade direction='up' delay={200} duration={1000}>
                 <button className=" text-white btn-ghost hover:px-4 hover:rounded-xl  hover:bg-[#5356FF]">Read More..</button>
                 </Fade>
                  <div className='bg-[#00A9FF] text-white absolute -rotate-3  lg:-top-12 -top-6     lg:w-[130px] lg:px-3 lg:py-2 px-2  rounded-xl'>
                    <h2 className='lg:font-bold font-medium lg:text-xl text-base'>Best Place</h2>
                  </div>
                </div>
              </div>
          </div>
            </div>
            </SwiperSlide>
       
       
      </Swiper>
        </div>
    );
};

export default Banner;