import React, { Component } from 'react';
import Pet from './pet';
import ScriptTag from 'react-script-tag';
import { Input, Space } from 'antd';
const { Search } = Input;

export default function Pets() {

  const [pets, setPets] = React.useState([]);
  const [fetchdPets, setfetchdPets] = React.useState([]);


  React.useEffect(() => {
    fetch('http://localhost:8000/petWise/adoptions')
      .then(response => response.json())
      .then(
        data => {
          setPets(data.data)
          setfetchdPets(data.data)
        }
      )
  }, [])
//   .then(response => response.json())
//     .then(response => {
//         console.log(response)
//     })
// }, [])

  const onSearch = value => {
    if (value == '') {
      setPets(fetchdPets)
    } else {
      setPets(fetchdPets.filter((data, key) => {
        if (data.description.search(value) != -1) {
          const d = {}
          d[key] = data
          return d
        }

      }))
    }
  };

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
        <section className="ftco-section">
          <Search placeholder="חיפוש"  onSearch={onSearch} style={{ width: 200 }} />

          <div className="container">
            <div className="row">
              {pets.map((data, key) => {
                return <Pet key={key} description={data.description} link={data.link} title={data.title} />
              })}
            </div>
            <div className="row mt-5">
              <div className="col text-center">
                <div className="block-27">
                  <ul>
                    <li><a href="#">&lt;</a></li>
                    <li className="active"><span>1</span></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">&gt;</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ScriptTag type="text/javascript" src="../assets/js/pets.js" />
      </div>
    </>
  );
}
