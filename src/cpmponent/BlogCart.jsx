


import React from "react";

export const BlogCart = (props) => {


    return (
        <>
            <div className="row py-md-5 mb-lg-5  mb-md-3 justify-content-around pb-4" style={{rowGap : '30px'}}>
                {
                    props.blogs.map((item, index) => {
                        return (
                            <>
                                <div className=" card blog_card col-11 overflow-hidden col-lg-4 col-md-5 px-0 pb-1" style={{
                                    boxShadow: '0px 0px 8px 0px #b1b1b1',
                                    border: 'none'
                                }}>

                                    <div className="card-image overflow-hidden w-100">
                                        <img src="https://img.freepik.com/free-photo/protection-accessible-permission-verification-security-concept_53876-144425.jpg?size=626&ext=jpg&uid=P125233532&ga=GA1.1.1326273119.1694753008&semt=ais" className="w-100" alt="" />
                                    </div>
                                    <div className="card-body px-2 ">
                                        <span className="fw-semibold" style={{ fontSize: '13px' }}>{item.date} / {item.time}</span>
                                        <h3 className="mt-3">{item.title}</h3>
                                        {/* <p>{item.dis}</p> */}
                                        <button className="fw-semibold" style={{ backgroundColor: 'transparent', border: 'none' }} onClick={() => {props.fillterBlog(index);props.setToggleModal(true)}}>Read More...</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}