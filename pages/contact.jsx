import emailjs from 'emailjs-com'
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import Button from '../components/Button';
import Confetti from 'react-confetti'


const contact = () => {

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

  const player = useRef();

  useEffect(() => {
    if (emailSent) {
      player.current.play();
    }
  }, [emailSent]);


  return (
    <div className='h-[70vh] z-0 flex flex-col w-screen overflow-hidden'>
      {!emailSent ? 
        <div className='md:w-1/2 h-fit md:justify-end z-50 flex flex-col justify-center w-11/12 mx-auto'>            
          <h1 className='m-auto my-2 text-2xl'>~Send me a message for a reward~</h1>
          <div style={{'boxShadow': '0 5px 10px 0 #000'}} className=' items-center h-[450px] p-10 w-11/12 bg-[#2b2b2b]'>
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
        </div>
      :
        <div className='relative flex justify-end w-screen h-full'>
          <div className='lg:mx-56 md:mt-10 z-50 flex flex-col mr-10 text-center'>
            <h1 className='lg:text-3xl z-30 text-2xl font-bold'>Thank youuu! <br /> I'll reach out soon （＾_-）</h1>
            <audio className='z-20 w-2/3 m-auto my-6' ref={player} controls src="/better-of-alone.mp3"></audio>
            <Button targetTo text={'Back to Home'} link={'/'} />

          </div>
          <img className='opacity-20 absolute top-0 bottom-0 left-0 right-0 w-screen h-full' src="/images/fireworks.gif" alt="" />
          <div className='max-w-[800px] z-10 opacity-50 absolute bottom-28 md:bottom-10 right-0 md:right-56 flex'>
            <img className='max-w-[200px] z-10' src="/images/dancing2.gif" alt="" />
            <img className='max-w-[200px] z-10' src="/images/dancing.gif" alt="" />
          </div>
          <img className='opacity-40 md:hidden absolute top-0 bottom-0 left-0 right-0 z-10 block w-screen m-auto' src="/images/hamster-dance-mobile.gif" alt="" />
          <img className='opacity-40 md:block absolute top-0 bottom-0 left-0 right-0 z-10 hidden w-8/12 m-auto' src="/images/hamster-dance.gif" alt="" />
        </div>
      }
    </div>
  )
}

export default contact