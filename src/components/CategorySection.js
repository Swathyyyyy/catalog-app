import React from "react";
import ItemCard from "./ItemCard";

function CategorySection({ title, items }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="grid">
        {items.slice(0, 4).map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CategorySection;