import React from "react";


export default function PetGalleryItem({ description, link, title }) {
    return (
        <div className="col-md-4 ">
            <div className="work mb-4 img d-flex align-items-end" style={{background: "linear-gradient(45deg, #207dff 0%, #00bd55 100%)" , opacity: "0.8"}}>
                <div className="desc w-100 px-4">
                <a href={link} className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                </a>
                    <div className="mb-3">
                        <span style={{color: "black"}}><b>{title}</b></span>
                        <br/>
                        <span style={{color: "black"}}>{description}</span>
                        <h2><a href={link} style={{color: "black"}}>מעבר לאתר הרישמי</a></h2>
                    </div>
                </div>
            </div>
        </div>
    );
}