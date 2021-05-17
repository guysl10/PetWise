import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class login extends Component {
    render() {
        return (
            <>
                <div className="login" style={{ backgroundImage: 'url("../assets/images/bg_2.jpg")' ,width: "99vw", height: "70vh", backgroundColor: "#f0f2f5", display: "flex",alignItems: "center",justifyContent: "center"}}>
                    <div className="loginWrapper" style={{ width: "70%", display: "flex", justifyContent: "center"}}>
                        <div className="loginRight" style={{  display: "flex",justifyContent: "center"}}>
                            <div className="loginBox" style={{ height: "300px", padding: "12%",backgroundColor: "#f1f1f1",borderRadius: "10px",display: "flex",flexDirection: "column",justifyContent: "space-between"}}>
                                <input placeholder="Email" className="loginInput" style={{ height: "50px",borderRadius: "10px",border: "1px solid gray",fontSize: "18px",paddingLeft: "20px"}} />
                                <input placeholder="Password" className="loginInput" style={{ height: "50px",borderRadius: "10px",border: "1px solid gray",fontSize: "18px",paddingLeft: "20px"}} />
                                <button className="loginButton"
                                style={{ height: "50px",borderRadius: "10px",border: "none",backgroundColor: "#1775ee",color: "white",fontSize: "20px",fontWeight: "500",cursor: "pointer"}} >Log In</button>
                                <span className="loginForgot" style={{  textAlign: "center",color: "#1775ee"}} >Forgot Password?</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default login;