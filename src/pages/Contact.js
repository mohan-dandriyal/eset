
import React from "react";

// import HomeBanner from '../cpmponent/HomeBanner'
import ContactForm from "../cpmponent/ContactForm";
import ContactCart from "../cpmponent/ContactCart";
import { InnerBanner } from "../cpmponent/InnerBanner";

import contact_banner from '../images/con_banner.jpg'


export const Contact = () => {

    const banner_con = {
        images : contact_banner,
        title : 'Contact',
        dis : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima illum magnam facilis exercitationem quos itaque culpa incidunt quo soluta aliquam?'
    }

    return (
        <>
            {/* <HomeBanner /> */}
            <InnerBanner banner_con ={banner_con} />
            <ContactCart />
            <ContactForm />
        
        </>
    )
}