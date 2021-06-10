import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pet from '../pages/pet';

var uid = '';

function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function checkCookie() {
        var user = getCookie("uid");
        if (user != "") {
            uid = user
        } else {
            user = (new Date()).valueOf().toString();
            if (user != "" && user != null) {
                setCookie("uid", user, 365);
            }
        }
    }



export default function Recommendations()  {
        const [recommendations, setRec] = React.useState([]);

 React.useEffect(async () => {
    await fetch('http://localhost:8000/petWise/use_analytics/get_recommended',{
  method: "POST",
  body: JSON.stringify({uid:uid}),
                    headers:{
      'Content-Type': 'application/json'
                    }
})
      .then(response => response.json())
      .then(
        data => {
            setRec(data)
        }
      )}, [])



        return (

            <>
                {checkCookie()}
                {/* recommends */}
                <div className="row no-gutters">
                    <h4 style={{ paddingTop: "1%", margin: "0 auto", borderBottom: "0.5px solid" }} >הצעות</h4>
                </div>


                <div className="row no-gutters d-flex recomd" style={{ justifyContent: "space-between", padding: "1%" }}>
                    {recommendations["data"]!= undefined && <Pet description={recommendations["data"][0].description} url={recommendations["data"][0].url} images={recommendations["data"][0].images} type={recommendations["data"][0]["סוג"]} name={recommendations["data"][0]["שם בעל חיים"]} spec={recommendations["data"][0]["מספר מודעה"]} />}
                    {recommendations["data"]!= undefined && <Pet description={recommendations["data"][1].description} url={recommendations["data"][1].url} images={recommendations["data"][1].images} type={recommendations["data"][1]["סוג"]} name={recommendations["data"][1]["שם בעל חיים"]} spec={recommendations["data"][1]["מספר מודעה"]} />}
                    {recommendations["data"]!= undefined && <Pet description={recommendations["data"][2].description} url={recommendations["data"][2].url} images={recommendations["data"][2].images} type={recommendations["data"][2]["סוג"]} name={recommendations["data"][2]["שם בעל חיים"]} spec={recommendations["data"][2]["מספר מודעה"]} />}
                    {/*{recommendations["data"]!= undefined && <Pet description={recommendations["data"][3].description} url={recommendations["data"][3].url} images={recommendations["data"][3].images} type={recommendations["data"][3]["סוג"]} name={recommendations["data"][3]["שם בעל חיים"]} spec={recommendations["data"][3]["מספר מודעה"]} />}*/}
                    {/*{recommendations["data"]!= undefined && <Pet description={recommendations["data"][4].description} url={recommendations["data"][4].url} images={recommendations["data"][4].images} type={recommendations["data"][4]["סוג"]} name={recommendations["data"][4]["שם בעל חיים"]} spec={recommendations["data"][4]["מספר מודעה"]} />}*/}




                </div>
            </>

        )
    }

