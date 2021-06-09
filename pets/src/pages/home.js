import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function home() {


    const addActive = (e) => {

        // if(e.target.classList.contains('homeElement')){
        //     const divParentToactivate = e.target.parentNode.parentNode;
        //     divParentToactivate.classList.add('active');
        // }

        //  var a = e.target.parentNode.nextElementSibling;
        //  console.log('nextElemet',a);
        //  console.log(e.target.parentNode.parentNode);
    }



        return (
            <>
                <div>
                    <div className="hero-wrap js-fullheight" style={{ backgroundImage: 'url("../assets/images/bg_1.jpg")' }} data-stellar-background-ratio="0.5">
                        <div className="overlay" />
                        <div className="container">
                            <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center" data-scrollax-parent="true" 
                            style={{ height: '100vh' }} >
                                <div className="col-md-11 text-center">
                                    <h1 className="mb-4">עוזרים לאוהבי החיות למצוא את כל המידע הדרוש במקום אחד </h1>
                                    <p><a href="/adoptionsGallery" className="btn btn-primary mr-md-4 py-3 px-4">..למד עוד <span className="ion-ios-arrow-forward" /></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className="ftco-section bg-light ftco-no-pt ftco-intro">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 d-flex align-self-stretch px-4">
                                    <div onClick={addActive} className="d-block services text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-blind" />
                                        </div>
                                        <div className="media-body">
                                            <h3 className="heading">מצא חבר לחיים</h3>
                                            <p className="homeElement">אצלנו באתר אנחנו נתאים לך את החבר לחיים שהכי מתאים לך בעזרת האלגוריתמים הכי מתקדמים בשוק</p>
                                            <a href="http://localhost:3000/pets" className="btn-custom d-flex align-items-center justify-content-center"><span className="fa fa-chevron-right" /><i className="sr-only">Read more</i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex align-self-stretch px-4 ">
                                    <div onClick={addActive} className="d-block services text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-dog-eating" />
                                        </div>
                                        <div className="media-body">
                                            <h3 className="heading">העשרת הידע</h3>
                                            <p className="homeElement">אצלנו באתר אנחנו מציגים את הכתבות הכי מעניינות, עדכניות ורלוונטיות שאפשר למצוא ברשת על בהעלי החיים</p>
                                            <a href="http://localhost:3000/articles" className="btn-custom d-flex align-items-center justify-content-center"><span className="fa fa-chevron-right" /><i className="sr-only">Read more</i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 d-flex align-self-stretch px-4 homeElement">
                                    <div onClick={addActive} className="d-block services text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="flaticon-grooming" />
                                        </div>
                                        <div className="media-body">
                                            <h3 className="heading">ימי אימוץ</h3>
                                            <p className="homeElement">מתעניינים בימי אימוץ? באתר שלנו תוכלו לעבור על כולם ולבחור לאן ללכת</p>
                                            <a href="http://localhost:3000/adoptionsGallery" className="btn-custom d-flex align-items-center justify-content-center"><span className="fa fa-chevron-right" /><i className="sr-only">Read more</i></a>
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
