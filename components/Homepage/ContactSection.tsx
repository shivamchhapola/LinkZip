import React from 'react'
import { MdContactPhone, MdLocationPin, MdMail } from 'react-icons/md'

type Props = {}

const ContactSection = (props: Props) => {
  return (
    <div id="contact" className='w-full flex items-center justify-center'>
      <div className='w-full lg:w-[80%] max-w-[110rem] lg:max-h-[45rem] flex flex-col items-center p-6 lg:p-8 gap-4 lg:h-[120vh]'>
        <div className='w-full text-3xl font-bold flex'>
          Love to hear form you, <br />Get in touch👋
        </div>

        <div className='flex-1 w-full flex flex-col lg:flex-row items-center'>
          <div className='w-full lg:w-[50%] xl:w-[40%] bg-[url("/bgcontact.svg")] h-full rounded-lg drop-shadow-lg bg-no-repeat bg-cover bg-center flex flex-col text-white gap-10 px-4 py-5 lg:px-8 lg:py-6 text-[0.90rem]'>
            <div className='flex flex-col gap-2'>
              <span className='text-2xl font-bold'>Contact Information</span>
              <span className='font-semibold text-base'>Fill up the form and we'll get back to you within 24 hours.</span>
            </div>
            <div className='font-semibold flex items-center gap-3'>
              <MdContactPhone size="1.5rem" color="#0066FF" /> +91 8160247012
            </div>
            <div className='font-semibold flex items-center gap-3 flex-wrap'>
              <MdMail size="1.5rem" color="#0066FF" />
              <div className='flex flex-wrap'>shivamchhapola007@gmail.com</div>
            </div>
            <div className='font-semibold flex items-start gap-3 flex-wrap'>
              <MdLocationPin size="1.5rem" color="#0066FF" />
              <div>
                Dashrath, Vadodara,<br />
                Gujarat, India
              </div>
            </div>
          </div>

          <div className='flex flex-col p-6 lg:py-4 lg:px-8 gap-10 flex-1 w-full'>
            <div className='flex flex-col'>
              <span className='text-xs'>What's your name?</span>
              <input type='text' className='bg-transparent h-9 focus:outline-none border-b-[3px] border-slate-400 focus:border-blue-600 transition-colors duration-500 pb-2 cursor-go-big' />
            </div>
            <div className='flex flex-col'>
              <span className='text-xs'>What's your email?</span>
              <input type='text' className='bg-transparent h-9 focus:outline-none border-b-[3px] border-slate-400 focus:border-blue-600 transition-colors duration-500 pb-2 cursor-go-big' />
            </div>
            <div className='flex flex-col'>
              <span className='text-xs'>Type your phone no.</span>
              <input type='text' className='bg-transparent h-9 focus:outline-none border-b-[3px] border-slate-400 focus:border-blue-600 transition-colors duration-500 pb-2 cursor-go-big' />
            </div>
            <div className='flex flex-col'>
              <span className='text-xs'>Enter your message</span>
              <textarea rows={3} className='bg-transparent focus:outline-none border-b-[3px] border-slate-400 focus:border-blue-600 transition-colors duration-500 pb-2 resize-none cursor-go-big' />
            </div>
            <button className='bg-blue-600 text-white flex items-center justify-center px-4 py-2 rounded-full font-semibold cursor-go-big hover:underline'>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection