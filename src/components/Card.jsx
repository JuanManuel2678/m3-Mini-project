import React from "react";
import start from "/image/icon-star.svg";

export default function Card({
  item: { superHost, title, rating, type, beds,photo, city },
}) {
  return (
    <li className="Card">
      <figure className="img_container">
        <img src={photo} alt="Character img" height="200" />
      </figure>

      <div className="data_container">
        {superHost && <span>SUPER HOST</span>}
        <h5 className="h5-1">
          {type} {beds !== null && `. ${beds} beds`}
        </h5>
        <div className="rating">
          <h5 className="h5-2">
            <figure>
              <img src={start} alt="icon estrella " /> 
            </figure>
            {rating}
          </h5>
        </div>
      </div>

      <h2>{title}</h2>
    </li>
  );
}
