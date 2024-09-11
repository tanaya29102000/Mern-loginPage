// // import React, { useState, useEffect } from "react";
// // import { useNavigate } from "react-router-dom";
// // import "./Shop.css";

// // const products = [
// //   {
// //     id: 1,
// //     name: "Product 1",
// //     description: "This is the description for Product 1",
// //     price: 129.99,
// //     image:
// //       "https://www.jiomart.com/images/product/original/rvwsb1wsfr/livzing-square-flower-pot-with-bottom-tray-set-home-garden-office-plant-balcony-flowering-planter-9-inch-brown-pack-of-10-product-images-orvwsb1wsfr-p594649303-0-202210191625.jpg",
// //   },
// //   {
// //     id: 2,
// //     name: "Product 2",
// //     description: "This is the description for Product 2",
// //     price: 139.99,
// //     image:
// //       "https://cdn.shopify.com/s/files/1/2493/0462/files/Knox-Cylinder-Planter-Pot-12-inch-18-inch-White-Stainless-Steel-Metal-Round-Plant-Pot-NMN-Designs_1024x1024.jpg?v=1704022611",
// //   },
// //   {
// //     id: 3,
// //     name: "Product 3",
// //     description: "This is the description for Product 3",
// //     price: 900.99,
// //     image:
// //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSaysO7-fFC62A85PrOu1pMvYpw8XS15F2w&s",
// //   },
// //   {
// //     id: 4,
// //     name: "Product 4",
// //     description: "This is the description for Product 4",
// //     price: 190.99,
// //     image:
// //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8vjQc93kIE-oXLWWyGo4Tk_wndf_tn9P_Q&s",
// //   },
// //   {
// //     id: 5,
// //     name: "Product 5",
// //     description: "This is the description for Product 5",
// //     price: 190.99,
// //     image:
// //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2JtqJAyFsAJaTdEjMP3np7Oy-DcMWB083g&s",
// //   },
// //   {
// //     id: 6,
// //     name: "Product 6",
// //     description: "This is the description for Product 6",
// //     price: 109.99,
// //     image:
// //       "https://sereno.co.in/cdn/shop/products/grande_8860_si_1100x.jpg?v=1673855579",
// //   },
// //   {
// //     id: 7,
// //     name: "Product 7",
// //     description: "This is the description for Product 7",
// //     price: 119.99,
// //     image:
// //       "https://5.imimg.com/data5/PP/BR/CJ/SELLER-3572763/big-flower-pot.jpg",
// //   },
// //   {
// //     id: 8,
// //     name: "Product 8",
// //     description: "This is the description for Product 8",
// //     price: 159.99,
// //     image:
// //       "https://m.media-amazon.com/images/I/71PxwJAm5oL._AC_UF894,1000_QL80_.jpg",
// //   },
// //   {
// //     id: 9,
// //     name: "Product 9",
// //     description: "This is the description for Product 9",
// //     price: 129.99,
// //     image:
// //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLgeu5xxmpYbML1zzF7rAUOobK2SS3qtlyw&s",
// //   },
// //   {
// //     id: 10,
// //     name: "Product 10",
// //     description: "This is the description for Product 10",
// //     price: 119.99,
// //     image: "https://images.meesho.com/images/products/423093071/vryny_512.webp",
// //   },
// //   {
// //     id: 11,
// //     name: "Product 11",
// //     description: "This is the description for Product 11",
// //     price: 349.99,
// //     image:
// //       "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
// //   },
// //   {
// //     id: 12,
// //     name: "Product 12",
// //     description: "This is the description for Product 12",
// //     price: 249.99,
// //     image:
// //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDyVQI46QJnjH_X20nCBCNuoDPyucK9gsYA&s",
// //   },
// // ];
// // function Shop() {
// //   const [cart, setCart] = useState(
// //     () => JSON.parse(localStorage.getItem("cart")) || []
// //   );
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     localStorage.setItem("cart", JSON.stringify(cart));
// //   }, [cart]);

// //   const handleAddToCart = (product) => {
// //     setCart((prevCart) => {
// //       const existingProduct = prevCart.find((item) => item.id === product.id);
// //       if (existingProduct) {
// //         // Increase quantity if item is already in the cart
// //         return prevCart.map((item) =>
// //           item.id === product.id
// //             ? { ...item, quantity: item.quantity + 1 }
// //             : item
// //         );
// //       } else {
// //         // Add new item to the cart
// //         return [...prevCart, { ...product, quantity: 1 }];
// //       }
// //     });
// //   };

// //   navigate("/cart"); // Navigate to Cart page

// //   return (
// //     <div className="shop-container">
// //       <h1>Shop</h1>

// //       <div className="products">
// //         {products.map((product) => (
// //           <div key={product.id} className="product">
// //             <img src={product.image} alt={product.name} />
// //             <h2>{product.name}</h2>
// //             <p>{product.description}</p>
// //             <p>${product.price.toFixed(2)}</p>
// //             <button
// //               onClick={() => handleAddToCart(product)}
// //               className={
// //                 cart.find((item) => item.id === product.id) ? "added" : ""
// //               }
// //             >
// //               {cart.find((item) => item.id === product.id)
// //                 ? "Added"
// //                 : "Add to Cart"}
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default Shop;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import "./Shop.css";
// import { addToCart, addToWishlist } from './api';


// // Sample product list
// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     description: "This is the description for Product 1",
//     price: 129.99,
//     image:
//       "https://www.jiomart.com/images/product/original/rvwsb1wsfr/livzing-square-flower-pot-with-bottom-tray-set-home-garden-office-plant-balcony-flowering-planter-9-inch-brown-pack-of-10-product-images-orvwsb1wsfr-p594649303-0-202210191625.jpg",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     description: "This is the description for Product 2",
//     price: 139.99,
//     image:
//       "https://cdn.shopify.com/s/files/1/2493/0462/files/Knox-Cylinder-Planter-Pot-12-inch-18-inch-White-Stainless-Steel-Metal-Round-Plant-Pot-NMN-Designs_1024x1024.jpg?v=1704022611",
//   },
//   {
//     id: 3,
//     name: "Product 3",
//     description: "This is the description for Product 3",
//     price: 900.99,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSaysO7-fFC62A85PrOu1pMvYpw8XS15F2w&s",
//   },
//   {
//     id: 4,
//     name: "Product 4",
//     description: "This is the description for Product 4",
//     price: 190.99,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8vjQc93kIE-oXLWWyGo4Tk_wndf_tn9P_Q&s",
//   },
//   {
//     id: 5,
//     name: "Product 5",
//     description: "This is the description for Product 5",
//     price: 190.99,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2JtqJAyFsAJaTdEjMP3np7Oy-DcMWB083g&s",
//   },
//   {
//     id: 6,
//     name: "Product 6",
//     description: "This is the description for Product 6",
//     price: 109.99,
//     image:
//       "https://sereno.co.in/cdn/shop/products/grande_8860_si_1100x.jpg?v=1673855579",
//   },
//   {
//     id: 7,
//     name: "Product 7",
//     description: "This is the description for Product 7",
//     price: 119.99,
//     image:
//       "https://5.imimg.com/data5/PP/BR/CJ/SELLER-3572763/big-flower-pot.jpg",
//   },
//   {
//     id: 8,
//     name: "Product 8",
//     description: "This is the description for Product 8",
//     price: 159.99,
//     image:
//       "https://m.media-amazon.com/images/I/71PxwJAm5oL._AC_UF894,1000_QL80_.jpg",
//   },
//   {
//     id: 9,
//     name: "Product 9",
//     description: "This is the description for Product 9",
//     price: 129.99,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLgeu5xxmpYbML1zzF7rAUOobK2SS3qtlyw&s",
//   },
//   {
//     id: 10,
//     name: "Product 10",
//     description: "This is the description for Product 10",
//     price: 119.99,
//     image: "https://images.meesho.com/images/products/423093071/vryny_512.webp",
//   },
//   {
//     id: 11,
//     name: "Product 11",
//     description: "This is the description for Product 11",
//     price: 349.99,
//     image:
//       "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
//   },
//   {
//     id: 12,
//     name: "Product 12",
//     description: "This is the description for Product 12",
//     price: 249.99,
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDyVQI46QJnjH_X20nCBCNuoDPyucK9gsYA&s",
//   },
// ];

// const Shop = ({ user, wishlist, addToCart, addToWishlist }) => {
//   const [localWishlist, setLocalWishlist] = useState(wishlist || []);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Sync local state with props
//     setLocalWishlist(wishlist);
//   }, [wishlist]);

//   const handleAddToCart = (product) => {
//     if (!user) {
//       navigate('/login'); // Redirect to login if not logged in
//       return;
//     }
//     addToCart(product);
//     alert('Product added to cart!');
//   };

//   const handleAddToWishlist = (product) => {
//     if (!user) {
//       navigate('/wishlist'); // Redirect to login if not logged in
//       return;
//     }
//     try {
//       addToWishlist(product);
//       // Update local wishlist state
//       setLocalWishlist((prevWishlist) => {
//         const isProductInWishlist = prevWishlist.some(item => item.id === product.id);
//         if (isProductInWishlist) {
//           return prevWishlist.filter(item => item.id !== product.id);
//         } else {
//           return [...prevWishlist, product];
//         }
//       });
//       alert('Product added to wishlist!');
//     } catch (error) {
//       console.error('Error adding to wishlist:', error);
//       alert('Error adding to wishlist. Please try again.');
//     }
//   };

//   return (
//     <div className="shop-container">
//       <h1>Shop</h1>
//       <div className="products">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} className="product-img" />
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>${product.price.toFixed(2)}</p>
//             <div className="product-actions">
//               <button
//                 className="add-to-cart"
//                 onClick={() => handleAddToCart(product)}
//               >
//                 Add to Cart
//               </button>
//               <div
//                 className="wishlist-icon"
//                 onClick={() => handleAddToWishlist(product)}
//               >
//                 {localWishlist.some((item) => item.id === product.id) ? (
//                   <FaHeart />
//                 ) : (
//                   <FaRegHeart />
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Shop;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import "./Shop.css";

// Sample product list

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the description for Product 1",
    price: 129.99,
    image:
      "https://www.jiomart.com/images/product/original/rvwsb1wsfr/livzing-square-flower-pot-with-bottom-tray-set-home-garden-office-plant-balcony-flowering-planter-9-inch-brown-pack-of-10-product-images-orvwsb1wsfr-p594649303-0-202210191625.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the description for Product 2",
    price: 139.99,
    image:
      "https://cdn.shopify.com/s/files/1/2493/0462/files/Knox-Cylinder-Planter-Pot-12-inch-18-inch-White-Stainless-Steel-Metal-Round-Plant-Pot-NMN-Designs_1024x1024.jpg?v=1704022611",
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is the description for Product 3",
    price: 900.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBSaysO7-fFC62A85PrOu1pMvYpw8XS15F2w&s",
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is the description for Product 4",
    price: 190.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8vjQc93kIE-oXLWWyGo4Tk_wndf_tn9P_Q&s",
  },
  {
    id: 5,
    name: "Product 5",
    description: "This is the description for Product 5",
    price: 190.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC2JtqJAyFsAJaTdEjMP3np7Oy-DcMWB083g&s",
  },
  {
    id: 6,
    name: "Product 6",
    description: "This is the description for Product 6",
    price: 109.99,
    image:
      "https://sereno.co.in/cdn/shop/products/grande_8860_si_1100x.jpg?v=1673855579",
  },
  {
    id: 7,
    name: "Product 7",
    description: "This is the description for Product 7",
    price: 119.99,
    image:
      "https://5.imimg.com/data5/PP/BR/CJ/SELLER-3572763/big-flower-pot.jpg",
  },
  {
    id: 8,
    name: "Product 8",
    description: "This is the description for Product 8",
    price: 159.99,
    image:
      "https://m.media-amazon.com/images/I/71PxwJAm5oL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 9,
    name: "Product 9",
    description: "This is the description for Product 9",
    price: 129.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLgeu5xxmpYbML1zzF7rAUOobK2SS3qtlyw&s",
  },
  {
    id: 10,
    name: "Product 10",
    description: "This is the description for Product 10",
    price: 119.99,
    image: "https://images.meesho.com/images/products/423093071/vryny_512.webp",
  },
  {
    id: 11,
    name: "Product 11",
    description: "This is the description for Product 11",
    price: 349.99,
    image:
      "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
  },
  {
    id: 12,
    name: "Product 12",
    description: "This is the description for Product 12",
    price: 249.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKDyVQI46QJnjH_X20nCBCNuoDPyucK9gsYA&s",
  },
];

const Shop = ({ user, wishlist, addToCart, addToWishlist }) => {
  const [localWishlist, setLocalWishlist] = useState(wishlist || []);
  const navigate = useNavigate();

  useEffect(() => {
    // Sync local state with props
    setLocalWishlist(wishlist);
  }, [wishlist]);

  const handleAddToCart = (product) => {
    if (!user) {
      navigate("/login"); // Redirect to login if not logged in
      return;
    }
    addToCart(product);
    alert("Product added to cart!");
  };

  const handleAddToWishlist = (product) => {
    if (!user) {
      navigate("/login"); // Redirect to login if not logged in
      return;
    }
    addToWishlist(product);
    alert("Product added to wishlist!");
  };

  return (
    <div className="shop-container">
      <h1>Shop</h1>

      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>${product.price.toFixed(2)}</p>

            <div className="actions">
              <button
                onClick={() => handleAddToCart(product)}
                className={
                  localWishlist.find((item) => item.id === product.id)
                    ? "added"
                    : ""
                }
              >
                {localWishlist.find((item) => item.id === product.id)
                  ? "Added"
                  : "Add to Cart"}
              </button>
              <button
                onClick={() => handleAddToWishlist(product)}
                className="wishlist-btn"
              >
                {localWishlist.find((item) => item.id === product.id) ? (
                  <FaHeart />
                ) : (
                  <FaRegHeart />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;


