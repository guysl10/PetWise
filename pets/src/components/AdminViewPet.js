import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class AdminViewPet extends Component {

    render() {
        return (
            <>
                <div>
                    {/* Sidebar/menu */}
                    <nav className="w3-sidebar w3-collapse w3-white w3-animate-left" style={{ zIndex: 3, width: '300px' }} id="mySidebar"><br />
                        <div className="w3-container w3-row">
                            <div className="w3-col s4">
                                <img src="../assets/images/staff-6.jpg" className="w3-circle w3-margin-right" style={{ width: '46px' }} />
                            </div>
                            <div className="w3-col s8 w3-bar">
                                <span>Welcome, <strong>Michal</strong></span><br />
                            </div>
                        </div>
                        <hr />
                        <div className="w3-container">
                            <h5>Dashboard</h5>
                        </div>
                        <div className="w3-bar-block">
                            <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onClick="w3_close()" title="close menu"><i className="fa fa-remove fa-fw" />&nbsp; Close Menu</a>
                            <a href="/admin" className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw" />&nbsp; Overview</a>
                            <a href="/adminPets" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-eye fa-fw" />&nbsp; Pets</a>
                            <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw" />&nbsp; Adoptions Days</a>
                            <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bullseye fa-fw" />&nbsp; Articles</a>
                            <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-diamond fa-fw" />&nbsp; Associations</a>
                            <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bell fa-fw" />&nbsp; Suggested Stores</a>
                            <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bank fa-fw" />&nbsp; Users</a>
                            {/* <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-history fa-fw" />&nbsp; History</a>
                            <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-cog fa-fw" />&nbsp; Settings</a><br /><br /> */}
                        </div>
                    </nav>
                    {/* Overlay effect when opening sidebar on small screens */}
                    <div className="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{ cursor: 'pointer' }} title="close side menu" id="myOverlay" />
                    {/* !PAGE CONTENT! */}
                    <div className="w3-main" style={{ marginLeft: '300px', marginTop: '43px' }}>


                        <div className="row no-gutters" style={{padding: "2% 10%"}}>
                            <div className="col-md-7">
                                <div className="contact-wrap w-100 p-md-5 p-4">
                                    <h3 className="mb-4">View</h3>
                                    <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="name">Name</label>
                                                    <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="email">Breed</label>
                                                    <input type="email" className="form-control" name="email" id="email" placeholder="Breed" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="subject">Association</label>
                                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Association" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label className="label" htmlFor="#">Age</label>
                                                    <textarea name="message" className="form-control" id="message" cols={30} rows={4} placeholder="Age" defaultValue={""} />
                                                </div>
                                            </div>
                                            {/* <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="submit" defaultValue="Send Message" className="btn btn-primary" />
                                                    <div className="submitting" />
                                                </div>
                                            </div> */}
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-5 d-flex align-items-stretch">
                                <div className="info-wrap w-100 p-5 img" style={{ backgroundImage: 'url(../assets/images/gallery-3.jpg)' }}>
                                </div>
                            </div></div>


                    </div></div>
            </>
        )
    }
}
export default AdminViewPet;