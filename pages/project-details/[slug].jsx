import React, { useRef, useState } from "react";
import { fetcher } from '../api/api'
import qs from 'qs'
import { 
  Navigation, 
  Pagination, 
  Scrollbar, 
  A11y, 
  EffectCreative, 
  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-creative";
import Button from "../../components/Button";

const ProjectDetails = ({ project }) => {
  const title = project.attributes.projectTitle;
  const skills = project.attributes.projectSkills;
  const desc = project.attributes.projectDesc;
  const images = project.attributes.projectImages.data.map((image) => {
    return process.env.NEXT_PUBLIC_STRAPI_URL + image.attributes.url
  })
  const link = project.attributes.projectLink;
  const gitRepo = project.attributes.gitRepo;
  
  return (
    <div className='max-w-[1400px] gap-6 w-screen md:min-h-[500px] overflow-y-scroll m-auto justify-center flex flex-col md:flex-row md:pt-10'>
      <div className="h-fit rounded-xl md:w-1/2 flex flex-col">
        <div className='md:w-full w-screen'>
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
            {images.map((image, id) => (
              <SwiperSlide className="p-10"><img key={id} className='w-full p-2 bg-[#2e2e2e] m-auto border-2 border-gray-700 rounded-lg' src={image} alt="" /></SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-around w-1/2 gap-4 m-auto">
            <Button link={link} text='Live Demo' className="w-fit rounded-xl px-4 py-2 my-3 bg-gray-400" />
            <Button link={gitRepo} text='Git Repo' className="w-fit rounded-xl px-4 py-2 my-3 bg-gray-400" />
          </div>
        </div>
      </div>
      <div className="h-auto w-[1px] border-2 border-gray-500" />
      <div className='md:w-1/2 px-6 z-10 bg-[#222] text-center'>
        <h1 className='my-4 text-2xl'>{title}</h1>
        <p className='my-4 whitespace-pre'>{skills}</p>
        <p className='font-light text-left'>{desc}</p>
      </div>
    </div>
  )
}

export default ProjectDetails

export async function getStaticPaths() {
  const projects = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=*`)
  const paths = projects.data.map((project) => {
    return {
      params: { slug: String(project.id) }
    }
  })
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const query = qs.stringify({
    populate: ['projectImages'], 
  }, {
    encodeValuesOnly: true, // prettify URL
  });

  const projectResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?${query}`)
  const projectData = projectResponse.data.find((project) => {
    if (project.id == params.slug) {
      return project
    }
  })
  return {
    props: {
      project: projectData
    }
  }
} 