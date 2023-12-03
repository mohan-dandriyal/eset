

import React from "react";
import { InnerBanner } from "../cpmponent/InnerBanner";
import { Blogs } from "../layout/Blogs";
import ContactForm from "../cpmponent/ContactForm";


export const Blog = () => {

    const banner_con = {
        images : 'https://img.freepik.com/free-photo/aerial-view-computer-laptop-wooden-table-workspace-concept_53876-24817.jpg?size=626&ext=jpg&uid=P125233532&ga=GA1.1.1326273119.1694753008&semt=ais',
        title : 'Blog',
        dis : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima illum magnam facilis exercitationem quos itaque culpa incidunt quo soluta aliquam?'
    }

    return(
        <>
            <InnerBanner banner_con = {banner_con} />
            <Blogs />
            <ContactForm />
        </>
    )
}