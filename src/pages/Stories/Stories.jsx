import axios from "axios";
import React, { useEffect, useState } from "react";

const Stories = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        // console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex flex-wrap ">
        {product.map((product) => (
          <div className="m-4 w-sm">
            <h2>Name: {product.title}</h2>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>

          </div>
        ))}
      </div>
    </>
  );
};

export default Stories;
