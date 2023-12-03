
import React from "react";

import { MdMiscellaneousServices } from "react-icons/md";
import { Link } from "react-router-dom";


export const ServiceCart = () => {

    const service = [
        {
            title: 'Lorem ipsum dolor sit,',
            dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro assumenda, aut labore eum consectetur voluptas sequi molestias asperiores aliquid qui odio impedit earum fuga doloribus accusamus, repellat quidem blanditiis ipsam tempore omnis quos reprehenderit natus! Vero voluptatum asperiores enim?'
        },

        {
            title: 'Lorem ipsum dolor sit,',
            dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro assumenda, aut labore eum consectetur voluptas sequi molestias asperiores aliquid qui odio impedit earum fuga doloribus accusamus, repellat quidem blanditiis ipsam tempore omnis quos reprehenderit natus! Vero voluptatum asperiores enim?'
        },

        {
            title: 'Lorem ipsum dolor sit,',
            dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro assumenda, aut labore eum consectetur voluptas sequi molestias asperiores aliquid qui odio impedit earum fuga doloribus accusamus, repellat quidem blanditiis ipsam tempore omnis quos reprehenderit natus! Vero voluptatum asperiores enim?'
        },

        {
            title: 'Lorem ipsum dolor sit,',
            dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia porro assumenda, aut labore eum consectetur voluptas sequi molestias asperiores aliquid qui odio impedit earum fuga doloribus accusamus, repellat quidem blanditiis ipsam tempore omnis quos reprehenderit natus! Vero voluptatum asperiores enim?'
        }
    ]

    return (
        <>
            <div className="service py-5 mb-4  " style={{
                backgroundColor: '#e2e2e24f',
                backgroundImage: 'linear-gradient(45deg, rgb(76 76 76 / 21%), rgb(27 26 26 / 11%)), url(https://img.freepik.com/free-vector/light-grey-dots-background_78370-2583.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1701388800&semt=ais)'
            }}>
                <div className="container mb-5 ">
                    <div class="section_title mb-5">
                        <h2 class="text-center h1 position-relative before mx-auto pb-3 mb-4 " style={{ width: 'fit-content' }}>Our Services</h2>
                        <p class="col-lg-8 pt-2 col-md-9 col-11 mx-auto text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quos odit quae necessitatibus corrupti adipisci alias accusantium dolorum officia obcaecati.</p></div>
                    <div className="row" style={{ rowGap: '25px' }}>

                        {
                            service.map(item => {
                                return (
                                    <>
                                        <div className="bg-none col-md-6">
                                            <div className="card bg-none p-3" style={{ backgroundColor: '#f9f9f94d', border: '1px solid #ff5722', boxShadow: '0px 0px 4px 0px #FF5722' }}>
                                                <h4>{item.title}</h4>
                                                <p>{item.dis}</p>
                                                <Link to='/contact' className="fw-semibold text-decoration-none btn px-3 rounded-5 btn-sm" style={{
                                                    color: '#ffff',
                                                    backgroundColor: '#ff5722c2', width: 'fit-content'
                                                }} >Contact</Link>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}