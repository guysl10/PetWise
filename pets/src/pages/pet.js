import React from "react";
import { Link } from "react-router-dom";

export default function Pet({ description, url, images ,type, name, spec }) {
    const specific = "/adoption/"+ spec;
    
    return (
        <div className="col-md-4 ">
            <div className="work mb-4 img d-flex align-items-end" style={{ backgroundImage: 'url("../assets/images/image_5.jpg")' }}>
                <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                        <span>{name}</span>
                        <h2><Link to={specific}>{type}</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
}