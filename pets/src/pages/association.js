import React from "react";


export default function Association({ website, information, email, name, facebook }) {

    return (
        <div className="col-md-4 d-flex ">
        <div className="blog-entry align-self-stretch">
          <a href="blog-single.html" className="block-20 rounded" style={{ backgroundImage: 'url("../assets/images/image_5.jpg")' }}>
          </a>
          <div className="text p-4">
            <div className="meta mb-2">
              <div><a href="#">April 07, 2020</a></div>
              <div><a href="#">AAAAAAAA</a></div>
              <div><a href="#">{facebook}</a></div>
              <div><a href="#" className="meta-chat"><span className="fa fa-comment" /> 3</a></div>
            </div>
            <h3 className="heading"><a href="#">{facebook}</a></h3>
          </div>
        </div>
      </div>
    );
}