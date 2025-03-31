// import React  from "react";
// const Value =()=>{

//     return(
//         <div className="">
//             <table>
//                 <thead>
//                     <th>ID</th>
//                     <th>Name</th>
//                     <th>Email</th>
//                     <th>Number</th>
//                     <th>Action</th>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>1</td>
//                         <td>sri</td>
//                         <td>sri@123</td>
//                         <td>9876544321</td>
//                         <td></td>
//                     </tr>
//                 </tbody>
//             </table>

//         </div>
//     )
// }
// export default Value;

import React from "react";
const ProductList = () => {
  const Product = {
    cement: [
      {
        id: 1,
        name: "Cement",
        price: 500,
        category: "Cement",
        image: "https://5.imimg.com/data5/LR/OI/MY-39094180/cement.jpg ",
      },
      {
        id: 1,
        name: "Cement",
        price: 500,
        category: "Cement",
        image: "https://5.imimg.com/data5/LR/OI/MY-39094180/cement.jpg ",
      },
      {
        id: 1,
        name: "Cement",
        price: 500,
        category: "Cement",
        image: "https://5.imimg.com/data5/LR/OI/MY-39094180/cement.jpg ",
      },
    ],
    stell: [
      {
        id: 2,
        name: "Steel",
        price: 3000,
        category: "Steel",
        image:
          " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbEAXh-jXOQQns9iczhxXhAXrcI-bggqkjQ&s",
      },
    ],
    bricks: [
      {
        id: 3,
        name: "Bricks",
        price: 7,
        category: "Bricks",
        image: " ",
      },
    ],
    pipes: [
      {
        id: 5,
        name: "Pipes",
        price: 150,
        category: "Pipes",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo-ZwcBB-e1Pd4TRff_Dm7UlWZdYQtkgGUGw&s ",
      },
    ],
    tiles: [
      {
        id: 5,
        name: "tiles",
        price: 150,
        category: "tiles",
        image:
          " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzS34ynGnzO6jEa4PpFOeVqvGHhMWSJBTXyw&s",
      },
    ],
  };
  const allProducts = Object.values(Product).flat();
  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h2>Product List</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {allProducts.map((Product) => (
            <div
              key={Product.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                textAlign: "center",
                width: "200px",
              }}
            >
              <img
                src={Product.image}
                alt={Product.producteName}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
              <h3>{Product.name}</h3>
              <p>Price: ₹{Product.price}</p>

              {/* <p>{mobile.specification}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ProductList;

<div class="ticker-container">
  <div class="ticker-wrap">
    <ul class="ticker" style="animation-duration: 100s;">
      <li class="ticker__item">Web development</li>
      <li class="ticker__item">Cloud Solutions</li>
      <li class="ticker__item">Cloud InfraStructure</li>
      <li class="ticker__item">Digital marketing</li>
      <li class="ticker__item">Mobile Application Development</li>
      <li class="ticker__item">Artificial Intelligence</li>
    
     
    
    </ul>
  </div>
</div>










// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// const ProductList = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     brand: "",
//     price: "",
//     image: null,
//   });
//   const [preview, setPreview] = useState(null);
//   const [submittedData, setSubmittedData] = useState(null); // Store submitted data

//   // Handle Input Change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // Handle Image Upload
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setFormData((prevData) => ({ ...prevData, image: file }));
//       setPreview(URL.createObjectURL(file)); // Preview the selected image
//     }
//   };

//   // Handle Form Submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmittedData({
//       ...formData,
//       imagePreview: preview, // Include image preview for display
//     });
//     alert("Form submitted successfully!");
//     setFormData({
//       name: "",
//       brand: "",
//       price: "",
//       image: null,
//     });
//     setPreview(null);
//   };

//   return (
//     <div className="container vh-100 d-flex flex-column justify-content-center align-items-center">
//       <div className="card p-4 mb-4">
//         <h3 className="text-center mb-4">Product Details</h3>
//         <form onSubmit={handleSubmit}>
//           {/* Name Field */}
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">Product Name:</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="form-control"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </div>

//           {/* Brand Field */}
//           <div className="mb-3">
//             <label htmlFor="brand" className="form-label">Brand:</label>
//             <input
//               type="text"
//               id="brand"
//               name="brand"
//               className="form-control"
//               value={formData.brand}
//               onChange={handleChange}
//             />
//           </div>

//           {/* Price Field */}
//           <div className="mb-3">
//             <label htmlFor="price" className="form-label">Price:</label>
//             <input
//               type="number"
//               id="price"
//               name="price"
//               className="form-control"
//               value={formData.price}
//               onChange={handleChange}
//             />
//           </div>

//           {/* Image Upload Field */}
//           <div className="mb-3">
//             <label htmlFor="image" className="form-label">Upload Image:</label>
//             <input
//               type="file"
//               id="image"
//               name="image"
//               accept="image/*"
//               className="form-control"
//               onChange={handleImageChange}
//             />
//           </div>

//           {/* Image Preview */}
//           {preview && (
//             <div className="mb-3 text-center">
//               <p>Image Preview:</p>
//               <img
//                 src={preview}
//                 alt="Preview"
//                 className="img-thumbnail"
//                 style={{ width: "100px", height: "100px", objectFit: "cover" }}
//               />
//             </div>
//           )}

//           {/* Submit Button */}
//           <button type="submit" className="btn btn-primary w-100">
//             Submit
//           </button>
//         </form>
//       </div>

//       {/* Display Submitted Data */}
//       {submittedData && (
//         <div className="card p-4">
//           <h4 className="text-center mb-4">Submitted Product Details</h4>
//           <p><strong>Product Name:</strong> {submittedData.name}</p>
//           <p><strong>Brand:</strong> {submittedData.brand}</p>
//           <p><strong>Price:</strong> ${submittedData.price}</p>
//           {submittedData.imagePreview && (
//             <div>
//               <strong>Uploaded Image:</strong>
//               <img
//                 src={submittedData.imagePreview}
//                 alt="Uploaded"
//                 className="img-thumbnail mt-2"
//                 style={{ width: "100px", height: "100px", objectFit: "cover" }}
//               />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductList;