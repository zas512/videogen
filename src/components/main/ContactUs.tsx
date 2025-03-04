import React from 'react'

const ContactUs = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center py-4 text-center">
      <h6 className="mb-4 w-[50%] font-mono text-6xl font-bold">
        <span className="font-mono gradient-text">Get in Touch</span> with Us
      </h6>
      <p className="mb-6 text-lg w-[60%]">
      Have questions or need assistance? Our team is here to help! Reach out to us anytime, and we’ll get back to you as soon as possible. Whether it’s support, feedback, or collaboration, we’re just a message away.
      </p>
      
      </div>
      <div className='flex flex-col justify-between items-start mx-20 mb-10'>
      <div className="flex flex-col mt-6">
          <p className="font-mono">Name*</p>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-[100vh] h-12 border border-black-200 rounded-lg px-2"
          />
          <p className="font-mono mt-4">Phone*</p>
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="w-[100vh] h-12 border border-black-200 rounded-lg px-2"
          />
          <p className="font-mono mt-4">Email*</p>
          <input
            type="text"
            placeholder="Enter Email"
            className="w-[100vh] h-12 border border-black-200 rounded-lg px-2"
          />
          <p className="font-mono mt-4">Message</p>
          <input
            type="text"
            placeholder="Enter your query"
            className="w-[100vh] h-28 border border-black-200 rounded-lg px-2"
          />
        </div>
      </div>
      </>
  )
}

export default ContactUs