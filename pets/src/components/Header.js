import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div>
                <div className="wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center">
                                <p className="mb-0 phone pl-md-2">
                                    <a href="/admin" className="mr-2"><span className="fa fa-paper-plane mr-1" /> Admin Panel</a>
                                    <span> | </span>
                                    <a href="/login" className="btn btn-primary "> Sign In</a>
                                </p>
                            </div>
                            <div className="col-md-6 d-flex justify-content-md-end">
                                <div className="social-media">
                                    <p className="mb-0 d-flex">
                                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                                        <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="/"><span className="flaticon-pawprint-1 mr-2" />Petwize</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="fa fa-bars" /> Menu
                </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
                                <li className="nav-item"><a href="/profile" className="nav-link">Profile</a></li>
                                <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
                                <li className="nav-item"><a href="/adoptionsGallery" className="nav-link">Adopation</a></li>
                                <li className="nav-item"><a href="/articles" className="nav-link">Articles</a></li>
                                <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header;