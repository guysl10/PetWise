import React, { Component } from 'react';
import Pet from './pet';
import ScriptTag from 'react-script-tag';
import Recommendations from '../components/Recommendations';

export default function Pets() {

  const [pets, setPets] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/petWise/adoption')
      .then(response => response.json())
      .then(
        data => {
          setPets(data.data)
        }
      )
  }, [])
//     .then(response => response.json())
//     .then(response => {
//         console.log(response)
//     })
// }, [])

  return (
    <>
      <div>
        <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: 'url("../assets/images/bg_2.jpg")' }} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text align-items-end">
              <div className="col-md-9 pb-5" style={{textAlign: "right", margin: "0px auto"}}>
                <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">בית <i className="ion-ios-arrow-forward" /></a></span> <span>חיות <i className="ion-ios-arrow-forward" /></span></p>
                <h1 className="mb-0 bread">חיות</h1>
              </div>
            </div>
          </div>
        </section>

<Recommendations />
        
        <section className="ftco-section">
          <div className="container">
            <div className="row">
              {pets.map((data, key) => {
                return <Pet key={key} description={data.description} url={data.url} images={data.images} type={data["סוג"]} name={data["שם בעל חיים"]} spec={data.id}  />
              })}
            </div>

          </div>
        </section>
        <ScriptTag type="text/javascript" src="../assets/js/pets.js" />
      </div>
    </>
  );
}
