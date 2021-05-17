import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class articles extends Component {

    render() {
        return (
            <>
                 <div>
        <section className="hero-wrap hero-wrap-2" style={{backgroundImage: 'url("../assets/images/bg_2.jpg")'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text align-items-end">
              <div className="col-md-9 pb-5">
                <p className="breadcrumbs mb-2"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Articles <i className="ion-ios-arrow-forward" /></span></p>
                <h1 className="mb-0 bread">Articles</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row d-flex">
              <div className="col-md-4 d-flex ">
                <div className="blog-entry align-self-stretch">
                  <a href="blog-single.html" className="block-20 rounded" style={{backgroundImage: 'url("../assets/images/image_1.jpg")'}}>
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
              </div>
              <div className="col-md-4 d-flex ">
                <div className="blog-entry align-self-stretch">
                  <a href="blog-single.html" className="block-20 rounded" style={{backgroundImage: 'url("../assets/images/image_2.jpg")'}}>
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
              </div>
              <div className="col-md-4 d-flex ">
                <div className="blog-entry align-self-stretch">
                  <a href="blog-single.html" className="block-20 rounded" style={{backgroundImage: 'url("../assets/images/image_3.jpg")'}}>
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
              </div>
              <div className="col-md-4 d-flex">
                <div className="blog-entry align-self-stretch">
                  <a href="blog-single.html" className="block-20 rounded" style={{backgroundImage: 'url("../assets/images/image_4.jpg")'}}>
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
              </div>
              <div className="col-md-4 d-flex ">
                <div className="blog-entry align-self-stretch">
                  <a href="blog-single.html" className="block-20 rounded" style={{backgroundImage: 'url("../assets/images/image_5.jpg")'}}>
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
              </div>
              <div className="col-md-4 d-flex">
                <div className="blog-entry align-self-stretch">
                  <a href="blog-single.html" className="block-20 rounded" style={{backgroundImage: 'url("../assets/images/image_6.jpg")'}}>
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
              </div>
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
}
export default articles;