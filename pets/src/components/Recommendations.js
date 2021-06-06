import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from "react-router-dom";


class Recommendations extends Component {
    render() {
        return (

            <>
                {/* recommends */}
                <div className="row no-gutters">
                    <h4 style={{ paddingTop: "1%", margin: "0 auto", borderBottom: "0.5px solid" }} >הצעות</h4>
                </div>


                <div className="row no-gutters d-flex recomd" style={{ justifyContent: "space-between", padding: "1%" }}>
                    <div className="col-md-3 recomd-box">
                        <div className="work mb-3 img d-flex align-items-end" style={{ backgroundImage: 'url("../assets/images/image_5.jpg")' }}>
                            <div className="desc w-100 px-4">
                                <div className="text w-100 mb-3">
                                    <span style={{ color: "black" }}>מוצר</span>
                                    <span style={{ color: "black" }}>לינק</span>
                                    {/* <h2 style={{color:"black"}}><Link to="/">link</Link></h2> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 recomd-box">
                        <div className="work mb-3 img d-flex align-items-end" style={{ backgroundImage: 'url("../assets/images/image_5.jpg")' }}>
                            <div className="desc w-100 px-4">
                                <div className="text w-100 mb-3">
                                    <span>name</span>
                                    <h2><Link to="/">link</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 recomd-box" >
                        <div className="work mb-3 img d-flex align-items-end" style={{ backgroundImage: 'url("../assets/images/image_5.jpg")' }}>
                            <div className="desc w-100 px-4">
                                <div className="text w-100 mb-3">
                                    <span>name</span>
                                    <h2><Link to="/">link</Link></h2>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>

        )
    }
}
export default Recommendations;