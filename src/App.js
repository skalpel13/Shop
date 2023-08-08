import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

const initItems = [
  {
    id: 1,
    title: "Chair Grey",
    img: "chair_gr.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    category: "chairs",
    price: "49.99",
  },
  {
    id: 2,
    title: "Table",
    img: "table.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    category: "tables",
    price: "79.99",
  },
  {
    id: 3,
    title: "Sofa",
    img: "sofa.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    category: "sofas",
    price: "299.99",
  },
  {
    id: 4,
    title: "Light",
    img: "light_table.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    category: "light",
    price: "29.99",
  },
  {
    id: 5,
    title: "Chair white",
    img: "chair_wh.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    category: "chairs",
    price: "49.99",
  },
  {
    id: 6,
    title: "Couch Table",
    img: "table_sm.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    category: "tables",
    price: "39.99",
  },
];

function App() {
  const [items, setItems] = useState(initItems);

  const [orders, setOrders] = useState([]);

  const [currentItems, setCurrentItems] = useState(items);

  const [showFullItem, setShowFullItem] = useState(false);

  const [fullItem, setFullItem] = useState({});

  const addToCart = (item) => {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) setOrders([...orders, item], console.log(orders));
  };

  const deleteOrder = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.filter((orders) => orders.id !== orderId)
    );
  };

  const chooseCategory = (category) => {
    if (category == "all") {
      setCurrentItems(items);
      return;
    }
    setCurrentItems(() => items.filter((el) => el.category == category));
  };

  const onShowItem = (item) => {
    setFullItem((prevItem) => item);
    setShowFullItem((prevShowFullItem) => !prevShowFullItem);
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items
        items={currentItems}
        addToCart={addToCart}
        onShowItem={onShowItem}
      />
      {showFullItem && (
        <ShowFullItem
          addToCart={addToCart}
          item={fullItem}
          onShowItem={onShowItem}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
