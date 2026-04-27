import React from "react";
import { useNavigate } from "react-router-dom";

function ItemCard({ item }) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/item/${item.id}`)}>
      <img src={item.image} alt={item.itemname} />
      <h3>{item.itemname}</h3>
      <p>{item.category}</p>
    </div>
  );
}

export default ItemCard;