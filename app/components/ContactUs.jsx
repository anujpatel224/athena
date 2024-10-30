import React from 'react'
import RequirementForm from './RequirementForm'
import contactUsBg from '../../public/contact-us.jpg'

function ContactUs() {
  return (    
    <div className='contact-us flex flex-col' style={{ backgroundImage: `url(${contactUsBg.src})` }}>
      <RequirementForm />
        <div className='flex flex-col items-center justify-center'>
        <h1 className='text-white font-bold'></h1>
        </div>
        <marquee className='text-white font-bold text-[170px] mt-[-50px]' scrollamount="15">LET&apos;S TALK-LET&apos;S TALK</marquee>
    </div>
  )
}

export default ContactUs
