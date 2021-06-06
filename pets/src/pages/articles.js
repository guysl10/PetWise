import React, { Component } from 'react';
import Article from "./article";

export default function Articles() {

  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/petWise/articles')
      .then(response => response.json())
      .then(
        data => {
          setArticles(data.data)
        }
      )
  }, [])
//     .then(response => response.json())
//     .then(response => {
//         console.log(response.data[0])
//     })
// }, [])

  return (
    <>
      <div>
        <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: 'url("../assets/images/bg_2.jpg")' }} data-stellar-background-ratio="0.5">
          <div className="overlay" />
          <div className="container">
            <div className="row no-gutters slider-text align-items-end">
              <div className="col-md-9 pb-5" style={{ textAlign: "right", margin: "0 auto" }}>
                <p className="breadcrumbs mb-2">
                  <span>כתבות <i className="ion-ios-arrow-forward" /></span>
                  <span className="mr-2"><a href="/">בית <i className="ion-ios-arrow-forward" /></a></span>
                </p>
                <h1 className="mb-0 bread">כתבות</h1>
              </div>
            </div>
          </div>
        </section>
        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row d-flex">

              {articles.map((data, key) => {
                return <Article key={key} datetime={data.datetime} desc={data.desc} title={data.title} date={data.date} link={data.link} />
              })}

            </div>

          </div>
        </section>
      </div>
    </>
  )
}