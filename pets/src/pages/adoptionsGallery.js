import React, { Component } from 'react';
import PetGalleryItem from './petGalleryItem';
import {Spin} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


export default function AdoptionsGallery() {

  const [pets, setPets] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/petWise/adoption_days')
      .then(response => response.json())
      .then(
        data => {
          setPets(data.data)
        }
      )
  }, [])

  const loading = () => {
    if(pets.length == 0) {
      return <Spin tip="בטעינה..." indicator={antIcon} style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}/>
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
                <p className="breadcrumbs mb-2"><span className="mr-2"><a href="/">בית <i className="ion-ios-arrow-forward" /></a></span> <span>ימי אימוץ <i className="ion-ios-arrow-forward" /></span></p>
                <h1 className="mb-0 bread">ימי אימוץ</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section">
          <div className="container">
            <div className="row">
              {
                loading()
              }
              {pets &&
              pets.length > 0 &&
              pets.map((data, key) => {
                return <PetGalleryItem key={key} description={data.description} link={data.link} title={data.title} />
              })}
            </div>
            {/* <div className="row mt-5">
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
            </div> */}
        
          </div>
        </section>
       
      </div>
    </>
  );
}
