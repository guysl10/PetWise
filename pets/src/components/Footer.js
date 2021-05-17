import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                            <h2 className="footer-heading">Petwize</h2>
                            <p>PetWise is a web application created to help animal lover to find, manage and filter all the information about animals.</p>
                            <ul className="ftco-footer-social p-0">
                                <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="fa fa-twitter" /></a></li>
                                <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="fa fa-facebook" /></a></li>
                                <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="fa fa-instagram" /></a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                            <h2 className="footer-heading">Latest News</h2>
                            <div className="block-21 mb-4 d-flex">
                                <a className="img mr-4 rounded" style={{ backgroundImage: 'url(images/image_1.jpg)' }} />
                                <div className="text">
                                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                                    <div className="meta">
                                        <div><a href="#"><span className="icon-calendar" /> April 7, 2020</a></div>
                                        <div><a href="#"><span className="icon-person" /> Admin</a></div>
                                        <div><a href="#"><span className="icon-chat" /> 19</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="block-21 mb-4 d-flex">
                                <a className="img mr-4 rounded" style={{ backgroundImage: 'url(images/image_2.jpg)' }} />
                                <div className="text">
                                    <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                                    <div className="meta">
                                        <div><a href="#"><span className="icon-calendar" /> April 7, 2020</a></div>
                                        <div><a href="#"><span className="icon-person" /> Admin</a></div>
                                        <div><a href="#"><span className="icon-chat" /> 19</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 pl-lg-5 mb-4 mb-md-0">
                            <h2 className="footer-heading">Quick Links</h2>
                            <ul className="list-unstyled">
                                <li><a href="#" className="py-2 d-block">Home</a></li>
                                <li><a href="#" className="py-2 d-block">Profile</a></li>
                                <li><a href="#" className="py-2 d-block">About</a></li>
                                <li><a href="#" className="py-2 d-block">Adoption</a></li>
                                <li><a href="#" className="py-2 d-block">Articles</a></li>
                                <li><a href="#" className="py-2 d-block">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4 mb-md-0">
                            <h2 className="footer-heading">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><span className="icon fa fa-map" /><span className="text">TLV, Israel</span></li>
                                    <li><a href="#"><span className="icon fa fa-phone" /><span className="text">+2 392 3929 210</span></a></li>
                                    <li><a href="#"><span className="icon fa fa-paper-plane" /><span className="text">info@petwize.com</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;