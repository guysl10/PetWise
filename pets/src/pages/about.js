import React, { Component } from 'react';
import petGalleryItem from './petGalleryItem';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class about extends Component {

  render() {
    return (
      <>
        <div>
          <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: 'url("../assets/images/bg_2.jpg")' }} data-stellar-background-ratio="0.5">
            <div className="overlay" />
            <div className="container">
              <div className="row no-gutters slider-text align-items-end">
                <div className="col-md-9 pb-5" style={{textAlign: "right", margin: "0 auto"}}>
                  <p className="breadcrumbs mb-2">
                  <span>אודות <i className="ion-ios-arrow-forward" /></span>
                  <span className="mr-2"><a href="/">בית <i className="ion-ios-arrow-forward" /></a></span> 
                  </p>
                  <h1 className="mb-0 bread">אודות</h1>
                </div>
              </div>
            </div>
          </section>
          <section className="ftco-section">
            <div className="container">
            {/* <div className="login" style={{ backgroundImage: 'url("../assets/images/bg_2.jpg")' ,width: "99vw", height: "70vh", backgroundColor: "#f0f2f5", display: "flex",alignItems: "center",justifyContent: "center"}}>
                    <div className="loginWrapper" style={{ width: "70%", display: "flex", justifyContent: "center"}}>
                        <div className="loginRight" style={{  display: "flex",justifyContent: "center"}}>
                            <div className="loginBox" style={{ height: "300px", padding: "12%",backgroundColor: "#f1f1f1",borderRadius: "10px",display: "flex",flexDirection: "column",justifyContent: "space-between"}}>
                                <input placeholder="מייל" className="loginInput" style={{ height: "50px",borderRadius: "10px",border: "1px solid gray",fontSize: "18px",paddingLeft: "20px"}} />
                                <input placeholder="סיסמה" className="loginInput" style={{ height: "50px",borderRadius: "10px",border: "1px solid gray",fontSize: "18px",paddingLeft: "20px"}} />
                                <button className="loginButton"
                                style={{ height: "50px",borderRadius: "10px",border: "none",backgroundColor: "#1775ee",color: "white",fontSize: "20px",fontWeight: "500",cursor: "pointer"}} >התחבר</button>
                                <span className="loginForgot" style={{  textAlign: "center",color: "#1775ee"}} >?שכחת סיסמה</span>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
          </section>
        </div>
      </>
    )
  }
}
export default about;

