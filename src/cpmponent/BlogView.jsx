
import React from "react";

export const BlogView = (props) => {

    return (
        <>
            <div className={`modal d-${props.toggleModal === false ? 'none' : 'flex' } align-items-center  w-100`} tabIndex="-1" style={{minHeight : '100vh', backgroundColor : '#565656b0'}}>
                <div className="modal-dialog w-100 overflow-hideen d-block" style={{maxWidth : '95%'}}>
                    <div className="modal-content w-100">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() =>props.setToggleModal(false)}></button>
                        </div>
                        <div className="modal-body">
                           <div className="row">
                            <div className="col-lg-5">
                                <img src={props.blogView.img} className="w-100" alt="" />
                            </div>
                            <div className="col-lg-7">
                                <span className="fw-semibold" style={{fontSize: '14px'}}>{ props.blogView.date}/ { props.blogView.time }</span>
                                <h3 className="mb-3 mt-2">{props.blogView.title}</h3>
                                <p>{props.blogView.dis}</p>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}