import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

export default function Header() {

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [isAdmin, setIsAdmin] = React.useState(false);

    fetch('http://localhost:8000/petWise/user/is_admin').then(
        response => response.text()).then(
        data => setIsAdmin(data === "True"));

    fetch('http://localhost:8000/petWise/user/is_logged_in').then(
        response => response.text()).then(
        data => setIsLoggedIn(data === "True"));

    return (
        <div>
            <div className="wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center">
                            <p className="mb-0 phone pl-md-2">
                                {isAdmin ?
                                    <a href="/admin" className="mr-2"><span className="fa fa-paper-plane mr-1"/> תצוגת
                                    אדמין</a> :
                                    < a></a>
                                }
                                <span> | </span>
                                {isLoggedIn ?
                                    < a href="/logout" className="btn btn-primary ">התנתק</a> :
                                        < a href="/login" className="btn btn-primary "> התחבר</a>
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars" /> Menu
                </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                {/* <li className="nav-item"><a href="/contact" className="nav-link">צור קשר</a></li> */}
                                {/* <li className="nav-item"><a href="/associations" className="nav-link">ארגונים</a></li> */}
                                <li className="nav-item"><a href="/articles" className="nav-link">כתבות</a></li>
                                <li className="nav-item"><a href="/pets" className="nav-link">חיות</a></li>
                                <li className="nav-item"><a href="/adoptionsGallery" className="nav-link">ימי אימוץ</a></li>
                                <li className="nav-item"><a href="/profile" className="nav-link">פרופיל</a></li>
                                <li className="nav-item active"><a href="/" className="nav-link">בית</a></li>
                            </ul>
                        </div>

                    <a className="navbar-brand" href="/"><span className="flaticon-pawprint-1 mr-2"/>Petwize</a>

                </div>
            </nav>
        </div>
    )
}