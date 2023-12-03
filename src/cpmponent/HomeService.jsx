
import React from 'react'


function HomeService() {

    const servvice = [
        {
            border: "no",
            title: 'ESET NOD32 Antivirus',
            dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maxime aspernatur quam sapiente placeat harum qui dolore, earum iste quas expedita reprehenderit delectus praesentium obcaecati corrupti blanditiis distinctio fuga dolorem.',
        },
        {
            border: "yes",
            title: 'ESET Internet Security',
            dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maxime aspernatur quam sapiente placeat harum qui dolore, earum iste quas expedita reprehenderit delectus praesentium obcaecati corrupti blanditiis distinctio fuga dolorem.',
        },

        {
            border: "yes",
            title: 'ESET Internet Security',
            dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maxime aspernatur quam sapiente placeat harum qui dolore, earum iste quas expedita reprehenderit delectus praesentium obcaecati corrupti blanditiis distinctio fuga dolorem.',
        },

        {
            border: "no",
            title: 'ESET Internet Security',
            dis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia maxime aspernatur quam sapiente placeat harum qui dolore, earum iste quas expedita reprehenderit delectus praesentium obcaecati corrupti blanditiis distinctio fuga dolorem.',
        }
    ]
    return (
        <>
            <div className="homeService">
                <div className="container">
                    <div className="title text-light text-center py-5">
                        <h2 className='fe-bold fs-1 fs-md-3'>Our Service</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, adipisci.</p>
                    </div>
                    <div className="row hoser_row justify-content-around  w-100 mb-5 text-light" style={{ rowGap: '20px', justifyContent: 'space-between ', border: 'none', backgroundColor: 'transparent' }}>
                        {
                            servvice.map((item, index) => {
                                return (

                                    <div key={index} className={`py-lg-3 pe-0 col-md-6 ${`${item.border}`} card-content`}>
                                        <span className='d-block mb-3' style={{ fontSize: '14px' }}>{'+', index + 1}</span>
                                        <h3>{item.title}</h3>
                                        <p>{item.dis}</p>
                                        <a href="" className='text-decoration-none' style={{ color: '#fdaa2d' }}>Read More</a>
                                    </div>

                                )
                            })
                        }</div>
                </div >
                {/* </div> */}
            </div>
        </>
    )
}

export default HomeService