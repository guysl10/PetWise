import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class home extends Component {
    // componentDidMount () {
    //     const script = document.createElement("script");
    //     script.src = "/assets/js/jquery.min.js";
    //     script.async = true;
    //     document.body.appendChild(script);
    //     const script2 = document.createElement("script");
    //     script2.src = "/js/front.js";
    //     script2.async = true;
    //     document.body.appendChild(script2);
    //     // ect...
    //     }
    render() {
        return (
            <>
                <div>
                    <div className="hero-wrap js-fullheight" style={{ backgroundImage: 'url("../assets/images/bg_1.jpg")' }} data-stellar-background-ratio="0.5">
                        <div className="overlay" />
                        <div className="container">
                            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true" 
                            style={{ height: '100vh' }} >
                                <div className="col-md-11 text-center">
                                    <h1 className="mb-4">Helping animal lovers to find, manage and filter all the information about animals. </h1>
                                    <p><a href="/adoptionsGallery" className="btn btn-primary mr-md-4 py-3 px-4">Learn more <span className="ion-ios-arrow-forward" /></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="ftco-section bg-light ftco-no-pt ftco-intro">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 d-flex align-self-stretch px-4">
                                    <div className="d-block services active text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-blind" />
                                        </div>
                                        <div className="media-body">
                                            <h3 className="heading">Find Friends</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
                                            <a href="#" className="btn-custom d-flex align-items-center justify-content-center"><span className="fa fa-chevron-right" /><i className="sr-only">Read more</i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex align-self-stretch px-4 ">
                                    <div className="d-block services text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-dog-eating" />
                                        </div>
                                        <div className="media-body">
                                            <h3 className="heading">Easy Adoption</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
                                            <a href="#" className="btn-custom d-flex align-items-center justify-content-center"><span className="fa fa-chevron-right" /><i className="sr-only">Read more</i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex align-self-stretch px-4 ">
                                    <div className="d-block services text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-grooming" />
                                        </div>
                                        <div className="media-body">
                                            <h3 className="heading">Popular Services</h3>
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right.</p>
                                            <a href="#" className="btn-custom d-flex align-items-center justify-content-center"><span className="fa fa-chevron-right" /><i className="sr-only">Read more</i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
export default home;