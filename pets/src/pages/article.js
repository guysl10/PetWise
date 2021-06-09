import React from "react";


export default function Article({ datetime, desc, title,date, link}) {

    return (
        <div className="col-md-4 d-flex ">
        <div className="blog-entry align-self-stretch">
          <div className="text p-4">
            <div className="meta mb-2">
              <div>{datetime}</div>
              <div><a href={link}>{title}</a></div>
              <div><span className="fa fa-comment" /> {date}</div>
            </div>
            <h3 className="heading"><a href={link}>{desc}</a></h3>
          </div>
        </div>
      </div>
    );
}