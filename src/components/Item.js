import React from "react";

export default function Item(props) {
  const item = props.item;
  return (
    <div className="item">
      <img
        alt=""
        src={"./img/" + item.img}
        onClick={() => props.onShowItem(item)}
      />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div className="add-to-cart" onClick={() => props.addToCart({ ...item })}>
        +
      </div>
    </div>
  );
}
