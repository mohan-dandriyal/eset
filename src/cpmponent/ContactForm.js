
import React from 'react'
import second from '../images/cont.png'
function ContactForm() {
  return (
    <>
        <div className="container mb-5 pt-md-4">
        <div className="section_title mb-5">
                        <h2 className='text-center h1'>Get The Contact</h2>
                        <p className='col-lg-8 pt-2 col-md-8 col-11 mx-auto text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quos odit quae necessitatibus corrupti adipisci alias accusantium dolorum officia obcaecati.</p>
                    </div>
            <div className="row" style={{rowGap : '30px'}}>
                <div className="col-md-6 text-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0830313310516!2d77.36992837427474!3d28.627273475667586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5dbb8748335%3A0x3cfcbbd326e7a390!2sKasper%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1701501261127!5m2!1sen!2sin" width="100%" height="100%"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-md-6">
                   <form action="">
                   <div className="row align-items-center">
                        <div className="col-lg-6">
                            <input type="text" placeholder='Enter Name' className="form-control" />
                        </div>
                        <div className="col-lg-6">
                        <input type="text" placeholder='Email id...' className="form-control" />
                        </div>
                    </div>
                    <div className="input-form">
                    <input type="text" placeholder='Suject...' className="form-control" />
                    </div>

                    <div className="input-form">
                        <textarea name="" className='form-control p-2' id="" cols="30" placeholder='Message...' rows="5"></textarea>
                    </div>

                    <div className="btn-form">
                    <button className="btn mt-4 fw-semibold btn-primary" style={{letterSpacing: '2px'}}>Sed the Message</button>
                    </div>

                   </form>

                </div>
            </div>
        </div>
    </>
  )
}

export default ContactForm