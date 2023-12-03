

import React from "react";
import HomeBanner from "../cpmponent/HomeBanner";
import HomeAbout from "../cpmponent/HomeAbout";
import HomeService from "../cpmponent/HomeService";
import Faq from "../cpmponent/Faq";
import ContactForm from "../cpmponent/ContactForm";
// import { Why_Chose } from "../cpmponent/Why_chose";

export const Home = () => {

    return (
        <>
            <HomeBanner />
            <HomeAbout />
            <HomeService />
            <Faq />
            {/* <Why_Chose /> */}
            <ContactForm />
        </>
    )
}