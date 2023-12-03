import React from 'react'

import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

function ContactCart() {
  return (
    <>
      <div className="contact py-5 mb-2">
        <div className="container">
          <div className="row justify-content-around" style={{rowGap : '20px'}}>
            <div className="col-lg-5 col-11 px-0" style={{ border: '1px solid #fdaa2d' }} >
              <h3 className='py-2 px-3 text-light mb-4' style={{ backgroundColor: '#fdaa2d' }}>Contact</h3>
              <div className="d-flex px-3 flex-column" style={{ rowGap: '10px' }} >
                <p className='d-flex gap-3 align-items-center'><IoCall className='fs-3' /> <span>+91 9087654321</span></p>
                <p className='d-flex gap-3 align-items-center'><IoMdMail className='fs-3' /> <span>demo@gmail.com</span></p>
                <p className='d-flex gap-3 align-items-center'><FaLocationDot className='fs-3' /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, corrupti.</p>
              </div>

            </div>
            <div className="col-lg-5 col-11  px-0" style={{ border: '1px solid #fdaa2d' }}>
              <h3 className='py-2 px-3 mb-3 text-light ' style={{ backgroundColor: '#fdaa2d' }}>Follow Us</h3>
              <div className="d-flex  px-3 flex-column" style={{ rowGap: '10px' }} >
                <p className='d-flex gap-3 align-items-center'><FaInstagram className='fs-3' /> <span> Instagram</span></p>
                <p className='d-flex gap-3 align-items-center'><FaTwitter className='fs-3' /> <span> Twitte</span></p>
                <p className='d-flex gap-3 align-items-center'><FaLinkedinIn className='fs-3' /> <span> LinkedinIn</span></p>
                <p className='d-flex gap-3 align-items-center'><FaFacebookF className='fs-3' /> <span> Facebook</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactCart