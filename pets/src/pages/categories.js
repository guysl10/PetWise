import React, { Component } from 'react';
import { Link, useHistory } from "react-router-dom";

export default function Categories() {

    return (
        <>
            <div>
                <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: 'url("../assets/images/bg_2.jpg")' }} data-stellar-background-ratio="0.5">
                    <div className="overlay" />
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-end">
                            <div className="col-md-9 pb-5" style={{ textAlign: "right", margin: "0px auto" }}>
                                <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">בית <i className="ion-ios-arrow-forward" /></a></span> <span>אימוץ חיות <i className="ion-ios-arrow-forward" /></span></p>
                                <h1 className="mb-0 bread">סוגי חיות</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row">

                        <div className="col-md-4 ">
                                <div className="work mb-4 img d-flex align-items-end" style={{ backgroundImage: 'url(../assets/images/gallery-4.jpg)' }}>
                                    <div className="desc w-100 px-4">
                                        <div className="text w-100 mb-3">
                                            
                                            <h2 style={{color: "black"}}><Link to="/adoption">כלבים</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 ">
                                <div className="work mb-4 img d-flex align-items-end" style={{ backgroundImage: 'url(../assets/images/gallery-7.jpg)' }}>
                                    <div className="desc w-100 px-4">
                                        <div className="text w-100 mb-3">
                                          
                                            <h2 style={{color: "black"}}><Link to="/adoption">חתולים</Link></h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-md-4 ">
                                <div className="work mb-4 img d-flex align-items-end" style={{ backgroundImage: 'url(../assets/images/gallery-7.jpg)' }}>
                                    <div className="desc w-100 px-4">
                                        <div className="text w-100 mb-3">
                                            <span>{title}</span>
                                            <h2><a href={link}>{title}</a></h2>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </section>

            </div>
        </>
    );
}
