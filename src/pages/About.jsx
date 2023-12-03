
import React, { useEffect } from "react";
import { InnerBanner } from "../cpmponent/InnerBanner";
import { AboutCart } from "../cpmponent/AboutCart";
import ContactCart from "../cpmponent/ContactCart";



import abo_img from '../images/about_bennar.webp'
import { Why_Chose } from "../cpmponent/Why_chose";

export const About = () => {

    useEffect(() => {
        window.scroll = 0
    }, [])
    const banner_con = {
        images: abo_img,
        title: 'About Us',
        dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima illum magnam facilis exercitationem quos itaque culpa incidunt quo soluta aliquam?'
    }
    return (
        <>
            <InnerBanner banner_con={banner_con} />
            <AboutCart />
            <Why_Chose />
            <ContactCart />
        </>
    )
}