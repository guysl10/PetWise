import React, { Component } from 'react';
import Association from "./association";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Associations() {

    const [aricles, setArticles] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8000/petWise/association')
            .then(response => response.json())
            .then(
                data => {
                    setArticles(data.data)
                }
            )
    }, [])

    return (
        <>
            <div>
                <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: 'url("../assets/images/bg_2.jpg")' }} data-stellar-background-ratio="0.5">
                    <div className="overlay" />
                    <div className="container">
                        <div className="row no-gutters slider-text align-items-end">
                            <div className="col-md-9 pb-5" style={{ textAlign: "right", margin: "0 auto" }}>
                                <p className="breadcrumbs mb-2">
                                    <span>ארגונים ועמותות <i className="ion-ios-arrow-forward" /></span>
                                    <span className="mr-2"><a href="/">בית <i className="ion-ios-arrow-forward" /></a></span>
                                </p>
                                <h1 className="mb-0 bread">ארגונים ועמותות</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section bg-light">
                    <div className="container">
                        <div className="row d-flex">
                            {/* <div className="col-md-4 d-flex ">
                                <div className="blog-entry align-self-stretch">
                                    <a href="blog-single.html" className="block-20 rounded" style={{ backgroundImage: 'url("../assets/images/image_1.jpg")' }}>
                                    </a>
                                    <div className="text p-4">
                                        <div className="meta mb-2">
                                            <div><a href="#">April 07, 2020</a></div>
                                            <div><a href="#">Admin</a></div>
                                            <div><a href="#" className="meta-chat"><span className="fa fa-comment" /> 3</a></div>
                                        </div>
                                        <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className="row"> */}
                                {Associations.map((data, key) => {
                                    return <Association key={key} website={data.website} number={data.number} information={data.information} email={data.email} name={data.name} facebook={data.facebook} />
                                })}

                            {/* </div> */}

                        </div>
                        <div className="row mt-5">
                            <div className="col text-center">
                                <div className="block-27">
                                    <ul>
                                        <li><a href="#">&lt;</a></li>
                                        <li className="active"><span>1</span></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#">&gt;</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}