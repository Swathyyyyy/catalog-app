import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.json";


function Detail() {
  const { id } = useParams();
  const item = data[id];

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="top-bar">
        <button onClick={() => navigate("/")}>⬅ Back</button>
      </div>

      <h1>{item.itemname}</h1>

      <img  className="detail-img" src={item.image} alt={item.itemname} />

      <h3>Category: {item.category}</h3>

      {item.itemprops.map((prop, index) => (
        <p key={index}>
          <strong>{prop.label}:</strong> {prop.value}
        </p>
      ))}
    </div>
  );
}

export default Detail;