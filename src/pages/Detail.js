import React from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json";

function Detail() {
  const { id } = useParams();
  const item = data[id];

  return (
    <div className="container">
      <h1>{item.itemname}</h1>
      <img src={item.image} alt={item.itemname} />

      <h3>Category: {item.category}</h3>

      {item.itemprops.map((prop, index) => (
        <p key={index}>
          {prop.label}: {prop.value}
        </p>
      ))}
    </div>
  );
}

export default Detail;