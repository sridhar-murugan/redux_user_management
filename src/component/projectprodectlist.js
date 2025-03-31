



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
//     console.log("Form Data:", formData);
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
//     <div className="d-flex justify-content-center align-items-center vh-100">
//       <div className="card p-4 " >
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
//     </div>
//   );
// };

// export default ProductList;







import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const ProductList = () => {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    image: null,
  });
  const [preview, setPreview] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevData) => ({ ...prevData, image: file }));
      setPreview(URL.createObjectURL(file)); // Preview the selected image
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send data, including the image
    const data = new FormData();
    data.append("name", formData.name);
    data.append("brand", formData.brand);
    data.append("price", formData.price);
    data.append("image", formData.image);

    try {
      // Send POST request to the backend
      const response = await fetch("http://localhost:5001/products", { 

        // i am resently hide
      // const response = await fetch("http://your-backend-api-url.com/products", {
        method: "POST",
        body: data,
      });
      if (response.ok) {
        alert("Product successfully submitted!");
        setFormData({
          name: "",
          brand: "",
          price: "",
          image: null,
        });
        setPreview(null);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      alert("An error occurred while submitting the form.");
      console.error("Error:", error);
    }
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   const data = new FormData();
  //   data.append("name", formData.name);
  //   data.append("brand", formData.brand);
  //   data.append("price", formData.price);
  //   data.append("image", formData.image);
  
  //   try {
  //     const response = await fetch("http://localhost:5001/products", {
  //       method: "POST",
  //       body: data,
  //     });
  
  //     if (response.ok) {
  //       alert("Product successfully submitted!");
  //       setFormData({ name: "", brand: "", price: "", image: null });
  //       setPreview(null);
  //     } else {
  //       let errorMessage = "An error occurred!";
  //       try {
  //         const errorData = await response.json();
  //         errorMessage = errorData.message || errorMessage;
  //       } catch (jsonError) {
  //         console.error("Error parsing JSON:", jsonError);
  //       }
  //       alert(`Error: ${errorMessage}`);
  //     }
  //   } catch (error) {
  //     alert("An error occurred while submitting the form.");
  //     console.error("Error:", error);
  //   }
  // };
  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h3 className="text-center mb-4">Product Details</h3>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Product Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          {/* Brand Field */}
          <div className="mb-3">
            <label htmlFor="brand" className="form-label">Brand:</label>
            <input
              type="text"
              id="brand"
              name="brand"
              className="form-control"
              value={formData.brand}
              onChange={handleChange}
            />
          </div>

          {/* Price Field */}
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Price:</label>
            <input
              type="number"
              id="price"
              name="price"
              className="form-control"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          {/* Image Upload Field */}
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Upload Image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="form-control"
              onChange={handleImageChange}
            />
          </div>
          {/* Image Preview */}
          {preview && (
            <div className="mb-3 text-center">
              <p>Image Preview:</p>
              <img
                src={preview}
                alt="Preview"
                className="img-thumbnail"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductList;
