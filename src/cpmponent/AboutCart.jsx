
import React from "react";

import abo_1 from '../images/abo_1.png'

export const AboutCart = () => {

    return(
        <>
            <div className="aboutCart">
                <div className="container">
                    <div className="row py-lg-4  mb-5 align-items-center" style={{rowGap: '30px'}}>
                        <div className=" col-lg-6 col-md-6">
                            <img className=" rounded" src={abo_1} alt="" style={{backgroundColor: '#ebeaea'}} width='90%' />
                        </div>
                        <div className="col-lg-6 ">
                            <span className="fw-bold  position-relative min_title mt-1" style={{color : '#ff9800'}}>About Us</span>
                            <h2 className="fw-bold fs-1 mt-3">Lorem ipsum dolor sit amet.</h2>
                            <p className="" style={{lineHeight : 1.6}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ab porro blanditiis id nobis eos accusamus, quasi dignissimos similique ea minima eum quae unde sapiente aut soluta necessitatibus at veniam! Fugit soluta in molestiae! Expedita corporis, incidunt inventore quia doloribus animi ad. Laborum voluptatem corrupti ipsum amet debitis nemo consequuntur!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}