import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class adoptionsGallery extends Component {

    render() {
        return (
            <>
               <div>
        <section className="hero-wrap hero-wrap-2" style={{backgroundImage: 'url("../assets/images/bg_2.jpg")'}} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text align-items-end">
              <div className="col-md-9 pb-5">
                <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Adoption <i className="ion-ios-arrow-forward" /></span></p>
                <h1 className="mb-0 bread">Adoption suggestions</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 ">
                <div className="work mb-4 img d-flex align-items-end" style={{backgroundImage: 'url(../assets/images/gallery-1.jpg)'}}>
                  <a href="../assets/images/gallery-1.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                  </a>
                  <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                      <span>Cat</span>
                      <h2><a href="work-single.html">Persian Cat</a></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="work mb-4 img d-flex align-items-end" style={{backgroundImage: 'url(../assets/images/gallery-2.jpg)'}}>
                  <a href="../assets/images/gallery-2.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                  </a>
                  <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                      <span>Dog</span>
                      <h2><a href="work-single.html">Pomeranian</a></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="work mb-4 img d-flex align-items-end" style={{backgroundImage: 'url(../assets/images/gallery-3.jpg)'}}>
                  <a href="../assets/images/gallery-3.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                  </a>
                  <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                      <span>Cat</span>
                      <h2><a href="work-single.html">Sphynx Cat</a></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="work mb-4 img d-flex align-items-end" style={{backgroundImage: 'url(../assets/images/gallery-4.jpg)'}}>
                  <a href="../assets/images/gallery-4.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                  </a>
                  <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                      <span>Cat</span>
                      <h2><a href="work-single.html">British Shorthair</a></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="work mb-4 img d-flex align-items-end" style={{backgroundImage: 'url(../assets/images/gallery-5.jpg)'}}>
                  <a href="../assets/images/gallery-5.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                  </a>
                  <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                      <span>Dog</span>
                      <h2><a href="work-single.html">Beagle</a></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="work mb-4 img d-flex align-items-end" style={{backgroundImage: 'url(../assets/images/gallery-6.jpg)'}}>
                  <a href="../assets/images/gallery-6.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                  </a>
                  <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                      <span>Dog</span>
                      <h2><a href="work-single.html">Pug</a></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="work mb-4 img d-flex align-items-end" style={{backgroundImage: 'url(../assets/images/gallery-7.jpg)'}}>
                  <a href="../assets/images/gallery-7.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                  </a>
                  <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                      <span>Cat</span>
                      <h2><a href="work-single.html">British Shorthair</a></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="work mb-4 img d-flex align-items-end" style={{backgroundImage: 'url(../assets/images/gallery-8.jpg)'}}>
                  <a href="../assets/images/gallery-8.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                  </a>
                  <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                      <span>Dog</span>
                      <h2><a href="work-single.html">Beagle</a></h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="work mb-4 img d-flex align-items-end" style={{backgroundImage: 'url(../assets/images/gallery-9.jpg)'}}>
                  <a href="../assets/images/gallery-9.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
                    <span className="fa fa-expand" />
                  </a>
                  <div className="desc w-100 px-4">
                    <div className="text w-100 mb-3">
                      <span>Dog</span>
                      <h2><a href="work-single.html">Pug</a></h2>
                    </div>
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
export default adoptionsGallery;