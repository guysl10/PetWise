import React from "react";
import Recommendations from '../components/Recommendations';
import { Link } from "react-router-dom";



export default function FullPetPost({ description, url, images, type, name, spec }) {

    //const specific = "/adoption/"+ spec;

    const [details, setDetails] = React.useState([]);

    React.useEffect(() => {
        const index = window.location.toString().lastIndexOf('/') + 1;
        const id = window.location.toString().substring(index);


        fetch('http://localhost:8082/adoption/' + id)
            .then(response => response.json())
            .then(data => setDetails(data)
            )
    }, [])

    return (

        <>
            {/* recommends */}


            <Recommendations />


            {/* animal details */}

            <div className="row no-gutters" style={{ padding: "5% 10%", direction: "rtl" }}>
                <div className="col-md-7" style={{ direction: "rtl", textAlign: "right" }}>
                    <div className="contact-wrap w-100 p-md-5 p-4">
                        <h3 className="mb-4">{details.name}</h3>
                        <h3 className="mb-4">שם </h3>
                        <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="label" htmlFor="name">גזע</label>
                                        <input type="text" className="form-control" name="name" placeholder="Name" readonly="readonly" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="label" htmlFor="name">מין</label>
                                        <input type="text" className="form-control" name="name" placeholder="Name" readonly="readonly" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="label" htmlFor="name">מתאים ל</label>
                                        <input type="text" className="form-control" name="name" placeholder="Name" readonly="readonly" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="label" htmlFor="name">אזור</label>
                                        <input type="text" className="form-control" name="name" placeholder="Name" readonly="readonly" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="label" htmlFor="subject">עמותה</label>
                                        <input type="text" className="form-control" name="subject" placeholder="Association" readonly="readonly" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="label" htmlFor="#">תיאור</label>
                                        <textarea name="message" className="form-control" cols={30} rows={4} placeholder={description} readonly="readonly" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch">
                    <div className="info-wrap w-100 p-5 img" style={{ backgroundImage: 'url(../assets/images/gallery-3.jpg)' }}>
                    </div>
                </div></div>

        </>

    );
}