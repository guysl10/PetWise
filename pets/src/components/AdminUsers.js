import React, { Component } from 'react';

class AdminUsers extends Component {

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
                            <a href="/adminPets" className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw" />&nbsp; Pets</a>
                            <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw" />&nbsp; Adoptions Days</a>
                            <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bullseye fa-fw" />&nbsp; Articles</a>
                            <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-diamond fa-fw" />&nbsp; Associations</a>
                            <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bell fa-fw" />&nbsp; Stores</a>
                            <a href="/adminUsers" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-bank fa-fw" />&nbsp; Users</a>
                        </div>
                    </nav>
                    {/* Overlay effect when opening sidebar on small screens */}
                    <div className="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{ cursor: 'pointer' }} title="close side menu" id="myOverlay" />
                    {/* !PAGE CONTENT! */}
                    <div className="w3-main" style={{ marginLeft: '300px', marginTop: '43px' }}>


                        <div className="row no-gutters" style={{ padding: "0% 3%", paddingBottom: "12%" }}>
                            <div style={{ width: "100%" }}>
                                <table className="w3-table w3-striped w3-white">
                                    <thead>
                                        <tr>
                                            <th className="table-plus">סיסמה</th>
                                            <th>אימייל</th>
                                            <th>שם</th>
                                        </tr>
                                    </thead>
                                    <tbody><tr>
                                        <td>12345678</td>
                                        <td>israel@gmail.com</td>
                                        <td>ישראל ישראלי</td>
                                    </tr>
                                        <tr>
                                            <td>12345678</td>
                                            <td>israel@gmail.com</td>
                                            <td>ישראל ישראלי</td>
                                        </tr>
                                        <tr>
                                            <td>12345678</td>
                                            <td>israel@gmail.com</td>
                                            <td>ישראל ישראלי</td>
                                        </tr>
                                        <tr>
                                            <td>12345678</td>
                                            <td>israel@gmail.com</td>
                                            <td>ישראל ישראלי</td>
                                        </tr>
                                        <tr>
                                            <td>12345678</td>
                                            <td>israel@gmail.com</td>
                                            <td>ישראל ישראלי</td>
                                        </tr>
                                        <tr>
                                            <td>12345678</td>
                                            <td>israel@gmail.com</td>
                                            <td>ישראל ישראלי</td>
                                        </tr>
                                        <tr>
                                            <td>12345678</td>
                                            <td>israel@gmail.com</td>
                                            <td>ישראל ישראלי</td>
                                        </tr>
                                    </tbody></table>
                            </div>

                        </div>


                    </div></div>
            </>
        )
    }
}
export default AdminUsers;