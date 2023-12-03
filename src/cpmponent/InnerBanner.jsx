
import React from "react";

export const InnerBanner = (props) => {

    return(
        <>
            <div className="innter_banner  bg-dark mb-5 d-flex align-items-center"  style={{minHeight: '85vh' ,backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.412), rgba(0, 0, 0, 0.453)), url(${props.banner_con.images})`}}>
                <div className="container ">
                    <h2 className={`fw-bold text-center text-light ${props.banner_con.dis.length > 0 && 'before'}`}>{props.banner_con.title}</h2>
                    <p className={`col-lg-7 text-center mx-auto text-light mt-4  d-${props.banner_con.dis.length <= 0 ? 'none' : 'block'}`}>{props.banner_con.dis}</p>
                </div>
            </div>
        </>
    )
}