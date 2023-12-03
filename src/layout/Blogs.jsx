
import React, { useState } from "react";
import { BlogView } from "../cpmponent/BlogView";
import { BlogCart } from "../cpmponent/BlogCart";

export const Blogs = () => {

    const [blogView, setBlogView] = useState([])
    const [toggleModal, setToggleModal] = useState(false)

    const blogs = [
        {
            img: '',
            title: 'Lorem ipsum dolor sit',
            dis: ' amet consectetur adipisicing elit. Nulla dicta nostrum iste rerum unde quas possimus, sequi totam velit consequatur.',
            date: '28 Nov 2023 ',
            time: ' 9 : 30 Pm',
        },

        {
            img: '',
            title: 'Lorem ipsum dolor sit',
            dis: ' amet consectetur adipisicing elit. Nulla dicta nostrum iste rerum unde quas possimus, sequi totam velit consequatur.',
            date: '28 Nov 2023 ',
            time: ' 9 : 31 Pm',
        },

        {
            img: '',
            title: 'Lorem ipsum dolor sit',
            dis: ' amet consectetur adipisicing elit. Nulla dicta nostrum iste rerum unde quas possimus, sequi totam velit consequatur.',
            date: '28 Nov 2023 ',
            time: ' 9 : 31 Pm',
        }
    ]

    const fillterBlog = (id) => {
        blogs.filter((item, index) => {
            if (index === id) {
                setBlogView(item)
            }
        })
    }


    return (
        <>
            <div className="container">
                <BlogView blogView={blogView} setToggleModal={setToggleModal} toggleModal={toggleModal} />
                <BlogCart setToggleModal={setToggleModal} blogs={blogs} fillterBlog={fillterBlog} />
            </div>
        </>
    )
}