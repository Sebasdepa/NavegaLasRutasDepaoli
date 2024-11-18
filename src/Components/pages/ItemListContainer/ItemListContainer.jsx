import { useEffect } from "react";
import { useState } from "react";
import { products } from "../../../products";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    let task = new Promise((res, rej) => {
      res(products);
    });
    task
      .then((resp) => {
        setMyProducts(resp);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finally");
      });
  }, []);
  return <ItemList myProducts={myProducts} />;
};

export default ItemListContainer;