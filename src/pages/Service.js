
import React from "react";
import { InnerBanner } from "../cpmponent/InnerBanner";
import { ServiceCart } from "../cpmponent/ServiceCart";
import ContactForm from "../cpmponent/ContactForm";

import ser_img from '../images/ser_banner.jpg'


export const Service = () => {

    const banner_con = {
        images : ser_img,
        title : 'Service',
        dis : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima illum magnam facilis exercitationem quos itaque culpa incidunt quo soluta aliquam?'
    }

    return(
        <>
            <InnerBanner banner_con = {banner_con} />
            <ServiceCart />
            <ContactForm />
        </>
    )
}