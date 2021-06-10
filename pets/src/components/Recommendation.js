import { Link } from "react-router-dom";

export default function Recommendations({ description, url, images ,type, name, spec }) {
    
    
    return (
        <div className="col-md-3 recomd-box">
        <div className="work mb-3 img d-flex align-items-end" style={{ backgroundImage: 'url("../assets/images/image_5.jpg")' }}>
            <div className="desc w-100 px-4">
                <div className="text w-100 mb-3">
                    {console.log(name)}
                    <span>{name}</span>
                    <h2><Link to="/">link</Link></h2>
                </div>
            </div>
        </div>
    </div>
    );
}