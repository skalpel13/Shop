import React, { useState } from "react";

export default function Categories(props) {
  const categoriesInit = [
    {
      key: "all",
      name: "All",
    },
    {
      key: "chairs",
      name: "Chairs",
    },
    {
      key: "tables",
      name: "Tables",
    },
    {
      key: "sofas",
      name: "Sofas",
    },
    {
      key: "light",
      name: "Light",
    },
  ];
  const [categories, setCategories] = useState(categoriesInit);

  return (
    <div className="categories">
      {categories.map((el) => (
        <div key={el.key} onClick={() => props.chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
}
