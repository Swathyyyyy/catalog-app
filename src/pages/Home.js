import React from "react";
import data from "../data/data.json";
import CategorySection from "../components/CategorySection";

function Home() {
  const groupedData = data.reduce((acc, item, index) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push({ ...item, id: index });
    return acc;
  }, {});

  return (
    <div className="container">
      <h1>Product Catalog</h1>

      {Object.keys(groupedData).map((category) => (
        <CategorySection
          key={category}
          title={category}
          items={groupedData[category]}
        />
      ))}
    </div>
  );
}

export default Home;