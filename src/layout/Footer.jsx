
import React from 'react'

import { IoCallSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <>
            <footer className=' pt-5' style={{backgroundColor : '#3f3f3f'}}>
                <div className="container">
                    <div className="row  pb-5"style={{rowGap: '30px'}}>
                        <div className="col-lg-4">
                            <p className='text-light' style={{color : '#d1d0d0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis delectus ut illum totam mollitia omnis qui ducimus reprehenderit itaque voluptas!</p>
                            <h4 className='fw-semibold text-light mt-5' style={{color: '#e7e7e7'}}>Follow Us</h4>
                            <ul className='d-flex ps-0 gap-3 social_link' style={{ listStyle: 'none' }} >
                                <li><a href=""> <FaInstagram /> </a></li>
                                <li><a href=""> <FaFacebookF /> </a></li>
                                <li><a href=""> <FaTwitter /> </a></li>
                                <li><a href=""> <FaLinkedinIn /> </a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h4 className='fw-semibold ' style={{color: '#e7e7e7'}}>Quick Link</h4>
                            <ul className='ps-0 f-link  mt-4 f-links' style={{ listStyle: 'none' }}>
                                <li><a href="">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Service</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2">
                            <h4 className='fw-semibold' style={{color: '#e7e7e7'}}>LEGAL</h4>
                            <ul className='ps-0 f-link mt-4 f-links' style={{ listStyle: 'none' }}>
                                <li><a href=""> Privacy policy</a></li>
                                <li><a href=""> terms & conditions </a></li>
                                <li><a href=""> terms & conditions </a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <h4 className='fw-semibold' style={{color: '#e7e7e7'}}>Contact</h4>
                            <ul className='ps-0 f-link mt-4' style={{ listStyle: 'none' }}>
                                <li><a href=""><IoCallSharp /> +91 9087654321</a></li>
                                <li><a href=""><IoMdMail /> demo@gmail.com</a></li>
                                <li><a href=""><FaLocationDot /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quam!</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="copy-right bg-dark ">
                        <p className='text-center py-3 text-light'>&copy; Copy Right By 2023</p>
                    </div>
            </footer>
        </>
    )
}

export default Footer