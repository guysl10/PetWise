import React from "react";
import Recommendations from '../components/Recommendations';
import { Link } from "react-router-dom";



export default function FullPetPost() {

    const [details, setDetails] = React.useState([]);

    React.useEffect(() => {
        const index = window.location.toString().lastIndexOf('/') + 1;
        const id = window.location.toString().substring(index);


        fetch('http://localhost:8000/petWise/adoption/id/' + id)
            .then(response => response.json())
            .then(data => {
                setDetails(data)
                console.log(data)
            }
            )
    }, [])


    if (details === null)
        return "";

    return (

        <>
            {/* recommends */}

            <Recommendations />

            {/* animal details */}

            <div className="row no-gutters" style={{ padding: "5% 10%", direction: "rtl" }}>
                <div className="col-md-7" style={{ direction: "rtl", textAlign: "right" }}>
                    <div className="contact-wrap w-100 p-md-5 p-4">
                        <h3 className="mb-4"> {details["שם בעל חיים"]}  </h3>
                        <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="label" htmlFor="name">גזע</label>
                                        <input type="text" className="form-control" name="name" placeholder={details["גזע"]} readonly="readOnly" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="label" htmlFor="name">מין</label>
                                        <input type="text" className="form-control" name="name" placeholder={details["מין"]} readonly="readOnly" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="label" htmlFor="name">מתאים ל</label>
                                        <input type="text" className="form-control" name="name" placeholder={details["מתאים ל"]} readonly="readOnly" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="label" htmlFor="name">אזור</label>
                                        <input type="text" className="form-control" name="name" placeholder={details["אזור"]} readonly="readOnly" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="label" htmlFor="subject">עמותה</label>
                                        <input type="text" className="form-control" name="subject" placeholder={details["עמותה"]} readonly="readOnly" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="label" htmlFor="#">תיאור</label>
                                        <textarea name="message" className="form-control" cols={30} rows={7} placeholder={details.description} readonly="readOnly" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <a href={details.url}><label className="label" htmlFor="subject">  לינק לאתר  -&gt;</label></a>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch">
                    {console.log(details)}
                    {details.length != 0 && <div className="info-wrap w-100 p-5 img"
                        style={{ backgroundImage: `url(${details.images[0]})` }}
                    >
                    </div>}
                </div></div>

        </>

    );
}