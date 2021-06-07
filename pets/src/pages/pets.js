import React, { Component } from 'react';
import Pet from './pet';
import ScriptTag from 'react-script-tag';
import { LoadingOutlined } from '@ant-design/icons';



import Recommendations from '../components/Recommendations';

import { Input, Space, Carousel, Spin, Pagination} from 'antd';



const { Search } = Input;

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


export default function Pets() {

  const [pets, setPets] = React.useState([]);
  const [fetchdPets, setfetchdPets] = React.useState([]);
  const [minValue, setMinValue] = React.useState(0);
  const [maxValue, setMaxValue] = React.useState(9);

  React.useEffect(() => {
    fetch('http://localhost:8000/petWise/adoption')
      .then(response => response.json())
      .then(
        data => {
          setPets(data.data)
          setfetchdPets(data.data)
        }
      )
  }, [])
//     .then(response => response.json())
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

  const handleChange = value => {
    if (value <= 1) {
      setMinValue(0)
      setMaxValue(9)
    } else {
        setMinValue(maxValue)
        setMaxValue(value * 9)
    }
  };

  const loading = () => {
    if(pets.length == 0) {
      return <Spin tip="בטעינה..." indicator={antIcon} style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
      }}/>
    }
  };

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
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

<Recommendations />
        <Search placeholder="חיפוש"  onSearch={onSearch} style={{ width: 200,
          marginLeft: "45%",
          paddingBottom: '0%'}} />

        <section className="ftco-section">


          <div className="container">

            <div className="row">
              {
                loading()
              }
              {pets &&
              pets.length > 0 &&
              pets.slice(minValue, maxValue).map((data, key) => {
                return <Pet key={key} description={data.description} url={data.url} images={data.images} type={data["סוג"]} name={data["שם בעל חיים"]} spec={data.id}  />
              })}
            </div>

          </div>
          {pets &&
          pets.length > 0 && <Pagination
              defaultCurrent={1}
              defaultPageSize={9}
              onChange={handleChange}
              total={pets.length}
              // simple={true}
              style={{marginLeft: "40%"}}
          /> }
        </section>
        <ScriptTag type="text/javascript" src="../assets/js/pets.js" />
      </div>
    </>
  );
}
