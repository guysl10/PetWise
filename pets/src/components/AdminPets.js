import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class AdminPets extends Component {

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
                            <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bell fa-fw" />&nbsp; Stores</a>
                            <a href="/adminUsers" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bank fa-fw" />&nbsp; Users</a>
                        </div>
                    </nav>
                    {/* Overlay effect when opening sidebar on small screens */}
                    <div className="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{ cursor: 'pointer' }} title="close side menu" id="myOverlay" />
                    {/* !PAGE CONTENT! */}
                    <div className="w3-main" style={{ marginLeft: '300px', marginTop: '43px' }}>
                        {/* Header */}
                        <header className="w3-container" style={{ paddingTop: '13px' }}>
                            <h5><b><i className="fa fa-dashboard" /> Pets Management</b></h5>
                        </header>
                        <br />
                        <hr />
                        {/* search */}
                        <div className="header-left" style={{ padding: '1% 2.5%' }}>
                            <div className="menu-icon dw dw-menu" />
                            <div className="search-toggle-icon dw dw-search2" data-toggle="header_search" />
                            <div className="header-search">
                                <form>
                                    <div className="form-group mb-0">
                                        <i className="dw dw-search2 search-icon" />
                                        <input type="text" className="form-control search-input" placeholder="Search Here" />
                                   
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* results box */}
                        <div className="card-box mb-30" style={{ padding: '1% 2.5%' }}>
                            <h2 className="h4 pd-20">Next Items Were Found: </h2>
                            <table className="data-table table nowrap">
                                <thead>
                                    <tr>
                                        <th className="table-plus datatable-nosort">Product</th>
                                        <th>Name</th>
                                        <th>Color</th>
                                        <th>Age</th>
                                        <th>Breed</th>
                                        <th>Association</th>
                                        <th className="datatable-nosort">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table-plus">
                                            <img src="../assets/images/gallery-5.jpg" width={70} height={70} alt="" />
                                        </td>
                                        <td>
                                            <h5 className="font-16">Lucy</h5>
                                            Dog
                                        </td>
                                        <td>Black</td>
                                        <td>1</td>
                                        <td>רועה גרמני</td>
                                        <td>SOS חיות</td>
                                        <td>
                                            <div className="dropdown">
                                                <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                    <i className="dw dw-more" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                    <a className="dropdown-item" href="/adminViewPet"><i className="dw dw-eye" /> View</a>
                                                    <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                                                    <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-plus">
                                            <img src="../assets/images/gallery-6.jpg" width={70} height={70} alt="" />
                                        </td>
                                        <td>
                                            <h5 className="font-16">Max</h5>
                                           Dog
                                        </td>
                                        <td>brown</td>
                                        <td>2</td>
                                        <td>לברדור</td>
                                        <td>SOS חיות</td>
                                        <td>
                                            <div className="dropdown">
                                                <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                    <i className="dw dw-more" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                    <a className="dropdown-item" href="/adminViewPet"><i className="dw dw-eye" /> View</a>
                                                    <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                                                    <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-plus">
                                            <img src="../assets/images/gallery-3.jpg" width={70} height={70} alt="" />
                                        </td>
                                        <td>
                                            <h5 className="font-16">Luna</h5>
                                            Cat
                                        </td>
                                        <td>Orange</td>
                                        <td>3</td>
                                        <td>סיאמי</td>
                                        <td>SOS חיות</td>
                                        <td>
                                            <div className="dropdown">
                                                <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                    <i className="dw dw-more" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                    <a className="dropdown-item" href="/adminViewPet"><i className="dw dw-eye" /> View</a>
                                                    <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                                                    <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="table-plus">
                                            <img src="../assets/images/gallery-7.jpg" width={70} height={70} alt="" />
                                        </td>
                                        <td>
                                            <h5 className="font-16">Charlie</h5>
                                            Dog
                                        </td>
                                        <td>Gray</td>
                                        <td>4</td>
                                        <td>מעורב</td>
                                        <td>SOS חיות</td>
                                        <td>
                                            <div className="dropdown">
                                                <a className="btn btn-link font-24 p-0 line-height-1 no-arrow dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                    <i className="dw dw-more" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-icon-list">
                                                    <a className="dropdown-item" href="/adminViewPet"><i className="dw dw-eye" /> View</a>
                                                    <a className="dropdown-item" href="#"><i className="dw dw-edit2" /> Edit</a>
                                                    <a className="dropdown-item" href="#"><i className="dw dw-delete-3" /> Delete</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div></div>
            </>
        )
    }
}
export default AdminPets;