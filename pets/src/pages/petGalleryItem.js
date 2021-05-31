import React from "react";


export default function petGalleryItem({ description, date }) {

    return (
        <div className="col-md-4 ">
            <div className="work mb-4 img d-flex align-items-end" style={{ backgroundImage: 'url(../assets/images/gallery-7.jpg)' }}>
                <a href="../assets/images/gallery-7.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                </a>
                <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                        <span>Cat</span>
                        <h2><a href="work-single.html">British Shorthair</a></h2>
                    </div>
                </div>
            </div>
        </div>
    );
}