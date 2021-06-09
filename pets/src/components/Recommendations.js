import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Recommendation from "../components/Recommendation";


class Recommendations extends Component {
    render() {
        return (

            <>
                {/* recommends */}
                <div className="row no-gutters">
                    <h4 style={{ paddingTop: "1%", margin: "0 auto", borderBottom: "0.5px solid" }} >הצעות</h4>
                </div>


                <div className="row no-gutters d-flex recomd" style={{ justifyContent: "space-between", padding: "1%" }}>

                    <Recommendation />
                    <Recommendation />
                    <Recommendation />

                </div>
            </>

        )
    }
}
export default Recommendations;