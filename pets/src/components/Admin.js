import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScriptTag from 'react-script-tag';

class Admin extends Component {
   
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
                            <a href="/admin" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-users fa-fw" />&nbsp; Overview</a>
                            <a href="/adminPets" className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw" />&nbsp; Pets</a>
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
                        {/* Header */}
                        <header className="w3-container" style={{ paddingTop: '22px' }}>
                            <h5><b><i className="fa fa-dashboard" /> My Dashboard</b></h5>
                        </header>
                        <div className="w3-row-padding w3-margin-bottom">
                            <div className="w3-quarter">
                                <div className="w3-container w3-red w3-padding-16" style={{background: "linear-gradient(45deg, #207dff 0%, #00bd55 100%)", borderRadius: "10px"}}>
                                    <div className="w3-left"><i className="fa fa-comment w3-xxxlarge" /></div>
                                    <div className="w3-right">
                                        <h3>52</h3>
                                    </div>
                                    <div className="w3-clear" />
                                    <h4>Articles</h4>
                                </div>
                            </div>
                            <div className="w3-quarter">
                                <div className="w3-container w3-blue w3-padding-16" style={{background: "linear-gradient(45deg, #207dff 0%, #00bd55 100%)", borderRadius: "10px"}}>
                                    <div className="w3-left"><i className="fa fa-eye w3-xxxlarge" /></div>
                                    <div className="w3-right">
                                        <h3>99</h3>
                                    </div>
                                    <div className="w3-clear" />
                                    <h4>Pets</h4>
                                </div>
                            </div>
                            <div className="w3-quarter">
                                <div className="w3-container w3-teal w3-padding-16" style={{background: "linear-gradient(45deg, #207dff 0%, #00bd55 100%)", borderRadius: "10px"}}>
                                    <div className="w3-left"><i className="fa fa-share-alt w3-xxxlarge" /></div>
                                    <div className="w3-right">
                                        <h3>23</h3>
                                    </div>
                                    <div className="w3-clear" />
                                    <h4>Adoptions</h4>
                                </div>
                            </div>
                            <div className="w3-quarter">
                                <div className="w3-container w3-orange w3-text-white w3-padding-16" style={{background: "linear-gradient(45deg, #207dff 0%, #00bd55 100%)", borderRadius: "10px"}}>
                                    <div className="w3-left"><i className="fa fa-users w3-xxxlarge" /></div>
                                    <div className="w3-right">
                                        <h3>50</h3>
                                    </div>
                                    <div className="w3-clear" />
                                    <h4>Users</h4>
                                </div>
                            </div>
                        </div>
                        <div className="w3-panel">
                            <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
                                <div className="w3-third">
                                    <h5>Locations</h5>
                                    <img src="../assets/images/region.jpg" style={{ width: '100%' }} alt="Google Regional Map" />
                                </div>
                                <div className="w3-twothird">
                                    <h5>Feeds</h5>
                                    <table className="w3-table w3-striped w3-white">
                                        <tbody><tr>
                                            <td><i className="fa fa-user w3-text-blue w3-large" /></td>
                                            <td>New record, over 90 views.</td>
                                            <td><i>10 mins</i></td>
                                        </tr>
                                            <tr>
                                                <td><i className="fa fa-bell w3-text-red w3-large" /></td>
                                                <td>Database error.</td>
                                                <td><i>15 mins</i></td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-users w3-text-yellow w3-large" /></td>
                                                <td>New record, over 40 users.</td>
                                                <td><i>17 mins</i></td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-comment w3-text-red w3-large" /></td>
                                                <td>New comments.</td>
                                                <td><i>25 mins</i></td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-bookmark w3-text-blue w3-large" /></td>
                                                <td>Check transactions.</td>
                                                <td><i>28 mins</i></td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-laptop w3-text-red w3-large" /></td>
                                                <td>CPU overload.</td>
                                                <td><i>35 mins</i></td>
                                            </tr>
                                            <tr>
                                                <td><i className="fa fa-share-alt w3-text-green w3-large" /></td>
                                                <td>New shares.</td>
                                                <td><i>39 mins</i></td>
                                            </tr>
                                        </tbody></table>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="w3-container">
                            <h5>General Stats</h5>
                            <p>New Visitors</p>
                            <div className="w3-grey">
                                <div className="w3-container w3-center w3-padding" style={{ width: '25%' , backgroundColor:"#00bd56"}}>+25%</div>
                            </div>
                            <p>New Users</p>
                            <div className="w3-grey">
                                <div className="w3-container w3-center w3-padding" style={{ width: '50%', backgroundColor:"#00bd56" }}>50%</div>
                            </div>
                            <p>Bounce Rate</p>
                            <div className="w3-grey">
                                <div className="w3-container w3-center w3-padding" style={{ width: '75%', backgroundColor:"#00bd56" }}>75%</div>
                            </div>
                        </div>
                        <hr />
                        {/* <div className="w3-container">
                            <h5>Countries</h5>
                            <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                                <tbody><tr>
                                    <td>United States</td>
                                    <td>65%</td>
                                </tr>
                                    <tr>
                                        <td>UK</td>
                                        <td>15.7%</td>
                                    </tr>
                                    <tr>
                                        <td>Russia</td>
                                        <td>5.6%</td>
                                    </tr>
                                    <tr>
                                        <td>Spain</td>
                                        <td>2.1%</td>
                                    </tr>
                                    <tr>
                                        <td>India</td>
                                        <td>1.9%</td>
                                    </tr>
                                    <tr>
                                        <td>France</td>
                                        <td>1.5%</td>
                                    </tr>
                                </tbody></table><br />
                            <button className="w3-button w3-dark-grey">More Countries &nbsp;<i className="fa fa-arrow-right" /></button>
                        </div> */}
                        <hr />
                        <div className="w3-container">
                            <h5>Recent Pets</h5>
                            <ul className="w3-ul w3-card-4 w3-white">
                                <li className="w3-padding-16">
                                    <img src="../assets/images/gallery-5.jpg" className="w3-left w3-circle w3-margin-right" style={{ width: '55px' }} />
                                    <span className="">Mike</span><br />
                                </li>
                                <li className="w3-padding-16">
                                    <img src="../assets/images/gallery-6.jpg" className="w3-left w3-circle w3-margin-right" style={{ width: '55px' }} />
                                    <span className="">Jill</span><br />
                                </li>
                                <li className="w3-padding-16">
                                    <img src="../assets/images/gallery-7.jpg" className="w3-left w3-circle w3-margin-right" style={{ width: '55px' }} />
                                    <span className="">Jane</span><br />
                                </li>
                            </ul>
                        </div>
                        <hr />
                        <div className="w3-container">
                            <h5>Recent Adoptions</h5>
                            <div className="w3-row">
                                <div className="w3-col m2 text-center">
                                    <img className="w3-circle" src="../assets/images/image_1.jpg" style={{ width: '96px', height: '96px' }} />
                                </div>
                                <div className="w3-col m10 w3-container">
                                    <h4>John <span className="w3-opacity w3-medium">Sep 29, 2014, 9:12 PM</span></h4>
                                    <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br />
                                </div>
                            </div>
                            <div className="w3-row">
                                <div className="w3-col m2 text-center">
                                    <img className="w3-circle" src="../assets/images/image_2.jpg" style={{ width: '96px', height: '96px' }} />
                                </div>
                                <div className="w3-col m10 w3-container">
                                    <h4>Bo <span className="w3-opacity w3-medium">Sep 28, 2014, 10:15 PM</span></h4>
                                    <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br />
                                </div>
                            </div>
                        </div>
                        <br />
                    </div></div>
                     {/* <ScriptTag type="text/javascript" src="../assets/js/adminFunc.js" /> */}
            </>
        ) 
    }
}
export default Admin;