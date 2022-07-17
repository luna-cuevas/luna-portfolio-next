// Import Custom Components
import Button from '../components/Button';

// Import Third Party Components
import { 
  Navigation, 
  Pagination, 
  EffectCreative, 
  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-creative";

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";

const Highlight = ( { projects } ) => {
  return (
    <>
      {projects && projects?.map(( project ) => (
        <div key={project.id} id='projects' className='flex flex-col w-screen md:flex-row md:max-w-[1300px] py-6 md:py-14 m-auto'>
          <div className='md:w-1/2'>
            <ScrollAnimation animateOnce animateIn='animate__slideInLeft' animateOut='animate__fadeOutLeft'>
              <Swiper
                modules={[ 
                  Navigation, 
                  Pagination, 
                  EffectCreative,
                  Autoplay]}
                slidesPerView={1}
                navigation
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                effect={"creative"}
                creativeEffect={{
                  prev: {
                    shadow: false,
                    translate: [0, 0, -400],
                  },
                  next: {
                    translate: ["100%", 0, 0],
                  },
                }}
                className="mySwiper"
                style={{'color': 'white !important'}}
                pagination={{ clickable: true }}
              >
                {project.attributes.images.data.map((image, id) => (
                  <SwiperSlide key={id} className="p-10">
                    <img className='w-full m-auto rounded-lg select-none' src={image.attributes.url} alt="" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </ScrollAnimation>
          </div>
          <div className='flex flex-col bg-[#222] md:w-1/2 px-6'>
            <ScrollAnimation animateOnce animateIn='animate__slideInRight' animateOut='animate__fadeOutRight'>
              <h2 className='text-2xl'>{project.attributes.title}</h2>
              <span className='flex flex-wrap gap-4 my-4 text-xs' id='tailwind'>
                {project.attributes.skills.map((skillObj) => (
                  <span style={{'border-image': 'linear-gradient(to right, #4568dc, #b06ab3) 1 1 100%'}} key={skillObj.id} className='text-xs border-2 border-[#b06ab3]'>{skillObj.skill}</span>
                ))}
              </span>
              <div className='text-sm'>
                <span>{project.attributes.description}</span>
              </div>
              <div className='md:justify-start md:gap-2 flex justify-center gap-6 mt-4'>
                <Button link={project.attributes.linkToDemo} text={'Live Demo'}/>
                <Button link={project.attributes.linkToRepo} text={'Github Repo'} />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      ))}
    </>
  )
}

export default Highlight