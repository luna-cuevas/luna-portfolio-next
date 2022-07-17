import { fetcher } from '../pages/api/api'
import Highlight from '../components/Highlight'
import Button from '../components/Button'
import emailjs from 'emailjs-com'

import { gsap } from "gsap";
import MotionPathPlugin from 'gsap/dist/MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin);

import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const Home = ( { projects } ) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  // EmailJS setting id and template id variables
  const submit = () => {
    if (name && email && message) {
      const serviceId = 'service_neh1oii';
      const templateId = 'template_vdw3ffh';
      const userId = 'user_JcD1331LVSdIeKGHTgDqA';
      const templateParams = {
        name,
        email,
        message
      };
      // If variable isn't set or input is missing, error will be console logged
      emailjs.send(serviceId, templateId, templateParams, userId)
        .then(response => console.log(response))
        .then(error => console.log(error));
      // After email has been sent, all variables are now set to blank again.
      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
      // if no data is input, error will alert user
      alert('Please fill in all fields.');
    }
  };

  const skillsData = [
    {name: 'HTML', icon: '/images/skills/html5.svg'}, 
    {name: 'CSS', icon: '/images/skills/css.svg'},
    {name: 'Sass', icon: '/images/skills/sass.svg'},
    {name: 'Bootstrap', icon: '/images/skills/bootstrap.svg'},
    {name: 'Material', icon: '/images/skills/material.svg'},
    {name: 'TailwindCSS', icon: '/images/skills/tailwind-css.svg'},
    {name: 'GSAP', icon: '/images/skills/gsap.svg'},
    {name: 'JavaScript', icon: '/images/skills/javascript.svg'}, 
    {name: 'React', icon: '/images/skills/react.svg'}, 
    {name: 'NextJS', icon: '/images/skills/nextjs.svg'},
    {name: 'Node', icon: '/images/skills/nodejs.svg'}, 
    {name: 'Wordpress', icon: '/images/skills/wordpress.png'},
    {name: 'Jest', icon: '/images/skills/jest-icon.svg'},
    {name: 'MongoDB', icon: '/images/skills/mongoDB.svg'},
    {name: 'Sanity', icon: '/images/skills/sanity-seeklogo.com.svg'},
    {name: 'Stripe', icon: '/images/skills/stripe-4.svg'},
    {name: 'GraphQL', icon: '/images/skills/graphql.svg'},
    {name: 'Shopify', icon: '/images/skills/shopify.svg'},
    {name: 'Strapi', icon: '/images/skills/strapi.svg'},
    {name: 'AWS S3', icon: '/images/skills/aws-s3.svg'},
    {name: 'PostgreSQL', icon: '/images/skills/postgresql.svg'},
    {name: 'Firebase', icon: '/images/skills/firebase.svg'},
    {name: 'SQL', icon: '/images/skills/sql.png'},
  ];

  const moonRef = useRef();

    // GSAP gradient sphere follows the path #ellipse
    useEffect(() => {
        gsap.to(moonRef.current, {
            motionPath: {
                path: "#ellipse",
                align: "#ellipse",
                alignOrigin: [0.5, 0.5],
                // auto rotate allows the sphere to seemingly face the same direction
                autoRotate: true,
                start: 2,        
            },
            // setting repeat to -1 creates an infinite loop
            repeat: -1,
            ease: 'none',
            duration: 20,
        });
    }) 

  return (
    <container className='h-fit relative'>
      <div className=''>
        <div className='flex min-h-screen'>
          <div className='m-auto flex flex-col w-screen md:flex-row justify-around md:max-w-[800px]'>
            <svg className='fill-transparent z-0 stroke-white absolute top-0 md:top-auto bottom-auto md:left-auto w-[130%] -left-16 right-auto md:w-[200%] lg:w-[180%] xl:w-[140%]' viewBox="-213 10 812 190">
              {/* this sets the gradient fill on the sphere, check CSS for more info */}
              <linearGradient id="lg">
                <stop style={{'stopColor': 'rgb(172, 171, 243)'}} offset="0" />
                <stop style={{'stopColor': 'rgb(209, 119, 194)'}} offset="1" />
              </linearGradient>
              <path id='ellipse' x="0px" y="0px" d="M103.3,56.9c25.4-4.4,54.4-7.3,85.3-8.2c100.6-3,182.7,16.3,183.5,43.1c0.8,26.8-80.1,50.9-180.6,53.9C90.9,148.7,8.7,129.4,8,102.6c-0.6-18.5,38-35.8,95.2-45.7"/>
              <circle fill="url(#lg)" className='stroke-[rgba(230,_129,_230,_0.582)]'  ref={moonRef}  cx="184.2" cy="36.1" r="12.9" x="0px" y="0px"/>
            </svg>
            <div className='md:w-1/2 md:text-right md:pr-4 z-10 py-4 text-center border-r-2 border-gray-300'>
              <ScrollAnimation initiallyVisible animateIn='animate__fadeInLeft'>
                <h1 style={{"text-shadow": "2px 5px 3px rgb(238 114 238 / 84%)"}} className='text-7xl md:text-8xl bg-[#222] font-["spacerave"] text-[#cacdee]'>Luna <br />Cuevas</h1>
                <div className='md:justify-end flex justify-center gap-4 my-2'>
                  <a target='_blank' className='my-auto' href="https://www.linkedin.com/in/luna-cuevas/">
                    <img className='w-[35px]' src="/images/skills/linkedin.svg" alt="" />
                  </a>
                  <a target='_blank' href="https://github.com/luna-cuevas">
                    <img className='w-[40px]' src="/images/skills/github.svg" alt="" />
                  </a>
                  <a className='relative' target='_blank' href="https://www.upwork.com/freelancers/~016c0c41196fda1a07">
                    <img className='w-[40px] ' src="/images/upwork.png" alt="" />
                  </a>
                </div>
              </ScrollAnimation>
            </div>
            <div className='md:w-1/2 md:p-0 md:pl-4 z-10 flex flex-col w-screen p-10 py-4 m-auto'>
              <ScrollAnimation initiallyVisible animateIn='animate__fadeInRight'>
                <div className='bg-[#222]'>
                  I am a Full Stack developer specializing in front end technologies. My expertise is in building dynamic, mobile-responsive websites using React, Next.js, and Tailwind.
                  <br />
                  <br />
                  I have a background in graphic design and can make cool animations using GSAP and Three.js. 
                </div>
                <div className='md:justify-start flex justify-center gap-4'>
                  <button id='bn30'>
                    <Link href='/projects'>Projects</Link>
                  </button>
                  <button id='bn30'>
                    <Link href='/contact'>Contact</Link>
                  </button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
      {/* Works */}
      <div className='flex flex-col items-center w-screen min-h-screen mb-20'>
        <h1 style={{'border-image': 'linear-gradient(to right, #4568dc, #b06ab3) 1 1 100%'}} className='border-y-2 h-fit mx-auto text-3xl py-[2px] border-gray-300'>Highlights</h1>
        <div className='h-fit'>
          <Highlight projects={projects} />
        </div>
        <div className='flex gap-4'>
          <ScrollAnimation className='w-[70px] flex' animateIn='animate__fadeInLeft'>
            <img src="/images/love-arrow-left.png" alt="" />
            {/* <svg className='m-auto' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z" fill-rule="nonzero"/></svg> */}
          </ScrollAnimation>
          <button id='bn30'>
            <Link href="/projects">See More Work</Link>
          </button>
          <ScrollAnimation className='w-[70px] flex' animateIn='animate__fadeInRight'>
            <img src="/images/love-arrow-right.png" alt="" />
            {/* <svg  style={{'filter': 'invert(98%) sepia(0%) saturate(0%) hue-rotate(185deg) brightness(113%) contrast(100%);'}} className='m-auto' clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" fill-rule="nonzero"/></svg> */}
          </ScrollAnimation>
        </div>
      </div>
      {/* About Me */}
      <div className='flex flex-col items-center justify-center w-screen min-h-screen p-4'>
        <h1 style={{'border-image': 'linear-gradient(to right, #4568dc, #b06ab3) 1 1 100%'}} className='border-y-2 py-[2px] h-fit mb-14 mx-auto text-3xl border-gray-300'>About Me</h1>
        <div className='md:max-w-[1200px] flex-col md:flex-row flex'>
          <ScrollAnimation animateOnce className='flex flex-col justify-center items-center md:w-1/2 gap-4 mb-4 p-4 text-base font-light text-left bg-[#222]' animateIn='animate__slideInLeft' animateOut='animate__fadeOutLeft'>
            <p>I'm a self-taught full stack developer primarily specializing in front end technologies and animation libraries like GSAP and three.js</p>
            <p>In the past year, I've found success as a freelance web developer working with e-commerce clients and content creators. I draft, design, and build beautiful mobile-responsive web pages with image optimization and cross browser compatibility. Clients often prefer to work with a CMS so I frequently implement a headless CMS like Strapi, Wordpress API, or Sanity. With E-Commerce clients, I've integrated Shopify, Shipstation, and Stripe APIs to empower businesses to scale at the speed they want.</p>
            <p>Currently open to new clients and opportunities. If you think we could collaborate, please feel free to  reach out below.</p>
          </ScrollAnimation>
          <ScrollAnimation duration={2} className='max-h-30 border-2 border-gray-300' animateIn='animate__fadeIn' />
          <ScrollAnimation animateOnce className='md:w-1/2 flex flex-col gap-4 px-8 py-4 text-base font-light text-left' animateIn='animate__fadeInRight' animateOut='animate__fadeOutRight'>
            <h1 className='text-2xl underline'>Skills</h1>
            <div className='flex flex-wrap max-w-[500px] gap-8 text-sm'>
              {skillsData?.map(skill => (
                <div key={skill.id} className='w-fit flex flex-col justify-center mx-auto'>
                  <p className='mx-auto'>{skill.name}</p>
                  <img className='w-[30px] m-auto' src={skill.icon} alt="skill icon" />
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
      {/* Contact */}
      <div className='flex flex-col m-auto items-center md:max-w-[1200px] md:min-h-[800px] pb-28'>
        <h1 style={{'border-image': 'linear-gradient(to right, #4568dc, #b06ab3) 1 1 100%'}} className='border-y-2 h-fit mb-14 py-[2px] mx-auto text-3xl border-gray-300'>Contact Me</h1>
        <div className='md:flex-row flex flex-col justify-center'>
          <div className='md:w-1/2 md:justify-end md:order-1 flex justify-center order-2'>            
            <ScrollAnimation animateOnce className='w-full m-auto' animateIn='animate__fadeInLeft'>
              <div style={{'boxShadow': '0 5px 10px 0 #000'}} className=' items-center h-[450px] m-auto p-10 w-11/12 bg-[#2b2b2b]'>
                <div className='h-full'>
                  <div className='flex flex-col gap-6 m-auto'>
                    {/* input fields for name and email */}
                    <input style={{'borderImage': 'linear-gradient(90deg,#4568dc,#b06ab3) 1 1 10%'}} className='p-2 bg-transparent border-[3px]' type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
                    <input style={{'borderImage': 'linear-gradient(90deg,#4568dc,#b06ab3) 1 1 10%'}} className='p-2 bg-transparent border-[3px]' type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
                  </div>
                  <div className='my-6'>Message</div>
                  {/* Input field for message */}
                  <textarea style={{'borderImage': 'linear-gradient(90deg,#4568dc,#b06ab3) 1 1 10%'}} className='p-2 w-full bg-transparent border-[3px] h-1/3' placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                  <div onClick={submit} className='button'>
                    <Button text={'Send Message'} />
                  </div>
                  <span className={emailSent ? 'visible' : 'hidden'}>Thank you for your message, we will be in touch in no time!</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className='md:w-1/3 md:pl-10 md:px-2 md:my-0 flex flex-col order-1 gap-2 px-8 my-10'>
            <ScrollAnimation animateOnce animateIn='animate__fadeInRight'>
              <div className='bg-[#222]'>
                <h1 className='md:text-left mb-4 text-3xl text-center'>Let's Talk?</h1>
                <p>I'm available to take on projects and collaborate with a team to find solutions. Tell me more about your goals and the vision you're seeking to accomplish, I'll get back to you promptly.</p>
                <p className='my-2'>Via Email: <a className='text-blue-400' target='_blank' href='mailto:s.cuevas14@gmail.com'>s.cuevas14@gmail.com</a></p>
                <p>Via: <a className='text-blue-400' target='_blank' href='https://www.linkedin.com/in/luna-cuevas/'>LinkedIn</a></p>
              </div>
              <div>
                <Button link='https://github.com/luna-cuevas' text='Github' />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </container>
  )
};

export default Home;

export async function getStaticProps() {
  const projectResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/highlights?populate=*`)
  return {
    props: {
      projects: projectResponse.data
    }
  }
};
