import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScriptTag from 'react-script-tag';
import Pet from "../pages/pet";

// class Admin extends Component {
export default function Admin() {
    const [pets_count, setPetsCount] = React.useState([]);
    const [users_count, setUsersCount] = React.useState([]);
    const [products_count, setProductsCount] = React.useState([]);
    const [adoption_days_count, setAdoptionDays] = React.useState([]);
    const [latestpets, setLatestPets] = React.useState([]);

   React.useEffect(() => {
    fetch('http://localhost:8000/petWise/summary/pets')
      .then(response => response.json())
      .then(
        data => {
            setPetsCount(data.len);
        }
      )
  }, [])

   React.useEffect(() => {
    fetch('http://localhost:8000/petWise/summary/products')
      .then(response => response.json())
      .then(
        data => {
            setProductsCount(data.len);
        }
      )
  }, [])

    React.useEffect(() => {
    fetch('http://localhost:8000/petWise/summary/adoption_days')
      .then(response => response.json())
      .then(
        data => {
            setAdoptionDays(data.len);
        }
      )
  }, [])

    React.useEffect(() => {
    fetch('http://localhost:8000/petWise/summary/users')
      .then(response => response.json())
      .then(
        data => {
            setUsersCount(data.len);
        }
      )
  }, [])

      React.useEffect(() => {
    fetch('http://localhost:8000/petWise/summary/last_pets')
      .then(response => response.json())
      .then(
        data => {
            console.log(data.data)
          setLatestPets(data.data)
        }
      )
  }, [])

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
                            <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bell fa-fw" />&nbsp; Stores</a>
                            <a href="/adminUsers" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bank fa-fw" />&nbsp; Users</a>
                        </div>
                    </nav>
                    {/* Overlay effect when opening sidebar on small screens */}
                    <div className="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{ cursor: 'pointer' }} title="close side menu" id="myOverlay" />
                    {/* !PAGE CONTENT! */}
                    <div className="w3-main" style={{ marginLeft: '300px', marginTop: '43px' }}>
                        {/* Header */}
                        <header className="w3-container" style={{ paddingTop: '22px' }}>
                        </header>
                        <div className="w3-row-padding w3-margin-bottom">
                            <div className="w3-quarter">
                                <div className="w3-container w3-red w3-padding-16" style={{background: "linear-gradient(45deg, #207dff 0%, #00bd55 100%)", borderRadius: "10px"}}>
                                    <div className="w3-left"><i className="fa fa-comment w3-xxxlarge" /></div>
                                    <div className="w3-right">
                                        <h3>{adoption_days_count}</h3>
                                    </div>
                                    <div className="w3-clear" />
                                    <h4>ימי אימוץ</h4>
                                </div>
                            </div>
                            <div className="w3-quarter">
                                <div className="w3-container w3-blue w3-padding-16" style={{background: "linear-gradient(45deg, #207dff 0%, #00bd55 100%)", borderRadius: "10px"}}>
                                    <div className="w3-left"><i className="fa fa-eye w3-xxxlarge" /></div>
                                    <div className="w3-right">
                                        <h3>{pets_count}</h3>
                                    </div>
                                    <div className="w3-clear" />
                                    <h4>חיות</h4>
                                </div>
                            </div>
                            <div className="w3-quarter">
                                <div className="w3-container w3-teal w3-padding-16" style={{background: "linear-gradient(45deg, #207dff 0%, #00bd55 100%)", borderRadius: "10px"}}>
                                    <div className="w3-left"><i className="fa fa-share-alt w3-xxxlarge" /></div>
                                    <div className="w3-right">
                                        <h3>{products_count}</h3>
                                    </div>
                                    <div className="w3-clear" />
                                    <h4>מוצרים</h4>
                                </div>
                            </div>
                            <div className="w3-quarter">
                                <div className="w3-container w3-orange w3-text-white w3-padding-16" style={{background: "linear-gradient(45deg, #207dff 0%, #00bd55 100%)", borderRadius: "10px"}}>
                                    <div className="w3-left"><i className="fa fa-users w3-xxxlarge" /></div>
                                    <div className="w3-right">
                                        <h3>{users_count}</h3>
                                    </div>
                                    <div className="w3-clear" />
                                    <h4>יוזרים</h4>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="w3-container">
                            <h5 style={{ textAlign: "right", padding: "0 1%"}}>עוד נתונים</h5>
                            <p style={{ textAlign: "right", padding: "0 1%"}}>מבקרים חדשים</p>
                            <div className="w3-grey">
                                <div className="w3-container w3-center w3-padding" style={{ width: '25%' , backgroundColor:"#00bd56"}}>+25%</div>
                            </div>
                            <p style={{ textAlign: "right", padding: "0 1%"}}>משתמשים חדשים</p>
                            <div className="w3-grey">
                                <div className="w3-container w3-center w3-padding" style={{ width: '50%', backgroundColor:"#00bd56" }}>50%</div>
                            </div>
                        </div>
                        <hr />
                        <hr />
                        <div className="w3-container">
                            <h5 style={{ textAlign: "right", padding: "0 1%"}}>חיות שנוספו לאחרונה</h5>
                            <ul className="w3-ul w3-card-4 w3-white">
                                {/*<li className="w3-padding-16" style={{ textAlign: "center" }}>*/}
                                {/*    <img src="../assets/images/gallery-5.jpg" className="w3-circle w3-margin-right" style={{ width: '55px' }} />*/}
                                {/*    <span className="">מיקי</span><br />*/}
                                {/*</li>*/}
                                {/*<li className="w3-padding-16" style={{ textAlign: "center" }}>*/}
                                {/*    <img src="../assets/images/gallery-6.jpg" className="w3-circle w3-margin-right" style={{ width: '55px' }} />*/}
                                {/*    <span className="">סימבה</span><br />*/}
                                {/*</li>*/}
                                {/*<li className="w3-padding-16" style={{ textAlign: "center" }}>*/}
                                {/*    <img src="../assets/images/gallery-7.jpg" className="w3-circle w3-margin-right" style={{ width: '55px' }} />*/}
                                {/*    <span className="">קייט</span><br />*/}
                                {/*</li>*/}
                                <div>
                                    {
              latestpets.map((data, key) => {
                return <Pet key={key} description={data.description} url={data.url} images={data.images} type={data["סוג"]} name={data["שם בעל חיים"]} spec={data.id}  />
              })}
                                        </div>
                            </ul>
                        </div>
                        <hr />
                        <div className="w3-container">
                            <h5 style={{ textAlign: "right", padding: "0 1%"}}>ימי אימוץ שנוספו לאחרונה</h5>
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

// export default Admin;