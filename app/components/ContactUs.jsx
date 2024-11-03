import React from 'react'
import RequirementForm from './RequirementForm'
import contactUsBg from '../../public/contact-us.jpg'

function ContactUs() {
  return (    
    <section className='contact-us flex flex-col' style={{ backgroundImage: `url(${contactUsBg.src})` }}>
      <RequirementForm />
        <div className='flex flex-col items-center justify-center'>
        <h1 className='text-white font-bold'></h1>
        </div>
        <marquee className='text-white font-bold text-7xl md:text-[170px]' scrollamount="15">LET&apos;S TALK-LET&apos;S TALK</marquee>
    </section>
  )
}

export default ContactUs
