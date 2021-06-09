import React, { Component } from 'react';
import Article from "./article";
import { Input, Space, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
const { Search } = Input;



export default function Articles() {

  const [articles, setArticles] = React.useState([]);
  const [fetchdArticles, setFetchedArticles] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/petWise/articles')
      .then(response => response.json())
      .then(
        data => {
          setArticles(data.data)
          setFetchedArticles(data.data)
        }
      )
  }, [])
//     .then(response => response.json())
//     .then(response => {
//         console.log(response.data[0])
//     })
// }, [])
  const onSearch = value => {
    if (value == '') {
      setArticles(fetchdArticles)
    } else {
      setArticles(fetchdArticles.filter((data, key) => {
        if (data.title.search(value) != -1 || data.desc.search(value) != -1) {
          const d = {}
          d[key] = data
          return d
        }

      }))
    }
  };

  const loading = () => {
    if(fetchdArticles.length == 0) {
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
        <Search placeholder="חיפוש"  onSearch={onSearch}  style={{ width: 200,
          marginLeft: "45%",
          paddingBottom: '0%'}} />

        <section className="ftco-section bg-light">
          <div className="container">
            <div className="row d-flex">
              {
                loading()
              }
              {fetchdArticles &&
              fetchdArticles.length > 0 && articles.map((data, key) => {
                return <Article key={key} datetime={data.datetime} desc={data.desc} title={data.title} date={data.date} link={data.link} />
              })}

            </div>

          </div>
        </section>
      </div>
    </>
  )
}