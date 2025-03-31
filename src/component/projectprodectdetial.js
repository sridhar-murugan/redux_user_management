// import React from "react";
// import { useParams } from "react-router-dom";

// const products = [
//   { id: 1, name: "Cement", price: 500, description: "High-quality cement",brand:" ultratech", image: "cement.jpg" },
//   { id: 2, name: "Steel", price: 3000, description: "Durable steel rods",brand:" JSW steel", image: "steel.jpg" },
//   { id: 3, name: "Bricks", price: 7, description: "Strong and durable bricks",brand:"bricks red ", image: "bricks.jpg" },
//   { id: 4, name: "Tiles", price: 200, description: "Beautiful ceramic tiles",brand:" Orientbell Tiles", image: "tiles.jpg" },
//   { id: 5, name: "pipes", price: 150, description: "high quality pipes",brand:" finolex", image: "pipes.jpg" },
// ];

// const ProductDetails = () => {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === parseInt(id));

//   if (!product) {
//     return <h2>Product not found!</h2>;
//   }

//   return (
//     <div className="product-details">
//       <h2>{product.name}</h2>
//       <img src={product.image} alt={product.name} />
//       <p>{product.description}</p>
//       <p>Price: ₹{product.price}</p>
//       <button>Add to Cart</button>
//     </div>
//   );
// };

// export default ProductDetails;




import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Cement", price: 500, description: "High-quality cement", brand: "Ultratech", image: "/images/cement.jpg" },
  { id: 2, name: "Steel", price: 3000, description: "Durable steel rods", brand: "JSW Steel", image: "/images/steel.jpg" },
  { id: 3, name: "Bricks", price: 7, description: "Strong and durable bricks", brand: "Bricks Red", image: "/images/bricks.jpg" },
  { id: 4, name: "Tiles", price: 200, description: "Beautiful ceramic tiles", brand: "Orientbell Tiles", image: "/images/tiles.jpg" },
  { id: 5, name: "Pipes", price: 150, description: "High-quality pipes", brand: "Finolex", image: "/images/pipes.jpg" },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="product-details">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Brand: {product.brand}</p>
      <p>Price: ₹{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetails;

