
import React from "react";
import { Link } from "react-router-dom";

export const Why_Chose = () => {

    return (
        <><div className="chose py-4" >
            <div className="container pt-3">
                <div className="section_title mb-5">
                    <h2 className="text-center text-light h1 position-relative before mx-auto pb-3 mb-4 " style={{ width: "fit-content" }}>Why Chose Us</h2>
                    <p className="col-lg-8 text-light pt-2 col-md-8 col-11 mx-auto text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quos odit quae necessitatibus corrupti adipisci alias accusantium dolorum officia obcaecati.</p>
                </div>

                <div className="row chose_row  pb-4 pt-lg-5">
                    <div className="col-lg-4 mt-md-5 col-md-6 chose-col ">
                        <h4 className="text-light pb-lg-2 pt-lg-2">Lorem, ipsum dolor.</h4>
                        <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto autem provident enim vitae mollitia a dolorem at voluptatem asperiores.</p>
                        <Link to="/contact" className="text-decoration-none fw-semibold rounded-5 px-4 btn btn-sm text-light" style={{ backgroundColor: '#fdaa2dc2' }}>Contact</Link>
                    </div>

                    <div className="col-lg-4 mt-5 col-md-6">
                        <h4 className="text-light pb-lg-2 pt-lg-2">Lorem, ipsum dolor.</h4>
                        <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto autem provident enim vitae mollitia a dolorem at voluptatem asperiores.</p>
                        <Link to="/contact" className="text-decoration-none fw-semibold rounded-5 px-4 btn btn-sm text-light" style={{ backgroundColor: '#fdaa2dc2' }}>Contact</Link>
                    </div>

                    <div className="col-lg-4  mt-5 col-md-6">
                        <h4 className="text-light pb-lg-2 pt-lg-2">Lorem, ipsum dolor.</h4>
                        <p className="text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore architecto autem provident enim vitae mollitia a dolorem at voluptatem asperiores.</p>
                        <Link to="/contact" className="text-decoration-none fw-semibold rounded-5 px-4 btn btn-sm text-light" style={{ backgroundColor: '#fdaa2dc2' }}>Contact</Link>
                    </div>
                    <div className="chose-col-center px-0"></div>
                </div>

            </div>
        </div>
        </>
    )
}