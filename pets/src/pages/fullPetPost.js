import React from "react";
import Recommendations from '../components/Recommendations';
import TimeMe from 'timeme.js'
import {Link} from "react-router-dom";


export default function FullPetPost() {

    const [details, setDetails] = React.useState([]);
    var uid = "";

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

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {
        var user = getCookie("uid");
        if (user != "") {
            uid = user
        } else {
            user = (new Date()).valueOf().toString();
            if (user != "" && user != null) {
                setCookie("uid", user, 365);
            }
        }
    }


    if (details === null)
        return "";

    return (

        <>
            {checkCookie()}
            {console.log(details + "SDSDSSD")}
            {TimeMe.initialize({
                currentPageName: details["מספר מודעה"], // current page
                idleTimeoutInSeconds: 30 // seconds
            })}
            {
                window.onbeforeunload = function (event) {
                    let timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
                    let data = {
                        "uid": uid,
                        "time": timeSpentOnPage,
                        "pet": details["מספר מודעה"]
                    };
                    let headers = {
                        type: 'application/x-www-form-urlencoded'
                    };
                    let blob = new Blob([JSON.stringify(data)], headers);
                    navigator.sendBeacon("http://localhost:8000/petWise/use_analytics/add", blob);
                }
            }
            {/* recommends */}

            <Recommendations/>

            {/* animal details */}
            <div className="row no-gutters" style={{padding: "5% 10%", direction: "rtl"}}>
                <div className="col-md-7" style={{direction: "rtl", textAlign: "right"}}>
                    <div className="contact-wrap w-100 p-md-5 p-4">
                        <h3 className="mb-4"> {details["שם בעל חיים"]}  </h3>
                        <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="label" htmlFor="name">גזע</label>
                                        <input type="text" className="form-control" name="name"
                                               placeholder={details["גזע"]} readonly="readOnly"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="label" htmlFor="name">מין</label>
                                        <input type="text" className="form-control" name="name"
                                               placeholder={details["מין"]} readonly="readOnly"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="label" htmlFor="name">מתאים ל</label>
                                        <input type="text" className="form-control" name="name"
                                               placeholder={details["מתאים ל"]} readonly="readOnly"/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="label" htmlFor="name">אזור</label>
                                        <input type="text" className="form-control" name="name"
                                               placeholder={details["אזור"]} readonly="readOnly"/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="label" htmlFor="subject">עמותה</label>
                                        <input type="text" className="form-control" name="subject"
                                               placeholder={details["עמותה"]} readonly="readOnly"/>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="label" htmlFor="#">תיאור</label>
                                        <textarea name="message" className="form-control" cols={30} rows={7}
                                                  placeholder={details.description} readonly="readOnly"/>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <a href={details.url}><label className="label" htmlFor="subject"> לינק לאתר
                                            -&gt;</label></a>
                                    </div>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch">
                    {details.length != 0 && <div className="info-wrap w-100 p-5 img"
                                                 style={{backgroundImage: `url(${details.images[0]})`}}
                    >
                    </div>}
                </div>
            </div>

        </>

    );
}