import React, { Component } from 'react';
import Pet from "../pages/pet";

export default function AdminOverview() {
    const [pets_count, setPetsCount] = React.useState([]);
    const [users_count, setUsersCount] = React.useState([]);
    const [products_count, setProductsCount] = React.useState([]);
    const [adoption_days_count, setAdoptionDays] = React.useState([]);
    const [latestpets, setLatestPets] = React.useState([]);
    const [latestproducts, setLatestProducts] = React.useState([]);

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
            console.log(data.data.data);
          setLatestPets(data.data.data);
        }
      )
  }, [])

  React.useEffect(() => {
    fetch('http://localhost:8000/petWise/summary/last_products')
      .then(response => response.json())
      .then(
        data => {
            console.log(data.data.data);
          setLatestProducts(data.data.data);
        }
      )
  }, [])

    const listpets = latestpets.map((pet) =>
        <ul key={pet.toString()}>
            {<Pet key={key} description={data.description} url={data.url} images={data.images} type={data["סוג"]} name={data["שם בעל חיים"]} spec={data.id}  />}
        </ul>
    );

        return (
            <>
                        <div className="w3-row-padding w3-margin-bottom">
                            <div className="w3-quarter">
                                <div className="w3-container w3-red w3-padding-16" style={{background: "linear-gradient(45deg, #207dff 0%, #00bd55 100%)", borderRadius: "10px"}}>
                                    <div className="w3-left"><i className="fa fa-comment w3-xxxlarge" /></div>
                                    <div className="w3-right">
                                        <h3>{products_count}</h3>
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
                            <h5 style={{ textAlign: "right", padding: "0 1%"}}>חיות שנוספו לאחרונה</h5>
                                <ul className="w3-ul w3-card-4 w3-white">
                                <li className="w3-padding-16" style={{ textAlign: "center" }}>
                                    {listpets}

                                    {/*<div>*/}
                                    {/*        {*/}
                                    {/*        latestpets.map((pet)=>{pet.map((data, key) => {*/}
                                    {/*        return <Pet key={key} description={data.description} url={data.url} images={data.images} type={data["סוג"]} name={data["שם בעל חיים"]} spec={data.id}  />*/}
                                    {/*      })*/}
                                    {/*        })}*/}
                                    {/*</div>*/}
                                </li>
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
      
            </>
        ) 
    }
