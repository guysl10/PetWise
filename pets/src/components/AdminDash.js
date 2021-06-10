import React, { Component , useState } from 'react';
import AdminInfo from './AdminInfo';
import AdminOverview from './AdminOverview';
import AdminUsers from './AdminUsers';

export default function AdminDash() {

const [active, setActive] = useState("general");


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
                                <span>Welcome, <strong>Admin</strong></span><br />
                            </div>
                        </div>
                        <hr />
                        <div className="w3-container">
                            <h5>Dashboard</h5>
                        </div>
                        <div className="w3-bar-block">
                            <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onClick="w3_close()" title="close menu"><i className="fa fa-remove fa-fw" />&nbsp; Close Menu</a>
                            <a href="#" onClick={() => setActive("general")} className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw" />&nbsp; Overview</a>
                            <a href="#" onClick={() => setActive("users")} className="w3-bar-item w3-button w3-padding"><i className="fa fa-bank fa-fw" />&nbsp; Users</a>
                        </div>
                    </nav>
                    {/* Overlay effect when opening sidebar on small screens */}
                    <div className="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{ cursor: 'pointer' }} title="close side menu" id="myOverlay" />
                    <div className="w3-main" style={{ marginLeft: '300px', marginTop: '43px' }}>
                        {/* Header */}
                        <header className="w3-container" style={{ paddingTop: '13px' }}>
                            <h5><b><i className="fa fa-dashboard" /> {active} management</b></h5>
                        </header>
                        <br />
                        <hr />
                        {/*///////////////////////// CONTENT ////////////////////// */}
                        {active == "general"  &&  <AdminOverview page="general" />}
                        {active == "users"  &&  <AdminUsers page="users" />}

                    </div>
                </div>
            </>
        
        ) 
    }
