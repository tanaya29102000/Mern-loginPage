// // // import React from 'react';
// // // import './Wishlist.css';
// // // import { toast } from 'react-toastify';

// // // const Wishlist = ({ wishlist, addToCart, removeFromWishlist }) => {
// // //   const handleAddToCart = (item) => {
// // //     addToCart(item); // This will handle the login check
// // //   };

// // //   const handleRemoveFromWishlist = (item) => {
// // //     removeFromWishlist(item);
// // //     toast.info(`${item.name} has been removed from your wishlist!`);
// // //   };

// // //   return (
// // //     <div className="wishlist-page">
// // //       <h1 className="wishlist-title">Your Wishlist</h1>
// // //       {wishlist.length === 0 ? (
// // //         <p className="empty-wishlist">Your wishlist is empty</p>
// // //       ) : (
// // //         <div className="wishlist-items">
// // //           {wishlist.map(item => (
// // //             <div key={item.id} className="wishlist-item">
// // //               <img src={item.img} alt={item.name} className="wishlist-item-img" />
// // //               <div className="wishlist-item-details">
// // //                 <h2 className="wishlist-item-name">{item.name}</h2>
// // //                 <p className="wishlist-item-price">₹{item.price}</p>
// // //                 <button className="add-to-cart" onClick={() => handleAddToCart(item)}>
// // //                   Add to Cart
// // //                 </button>
// // //                 <button className="remove-from-wishlist" onClick={() => handleRemoveFromWishlist(item)}>
// // //                   Delete
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default Wishlist;
// // import React, { useEffect, useState } from 'react';
// // import './Wishlist.css';
// // import { toast } from 'react-toastify';
// // import axios from 'axios';

// // const Wishlist = ({ userId, addToCart }) => {
// //   const [wishlist, setWishlist] = useState([]);

// //   useEffect(() => {
// //     const fetchWishlist = async () => {
// //       try {
// //         const response = await axios.get(`/api/wishlist/${userId}`);
// //         setWishlist(response.data);
// //       } catch (error) {
// //         console.error('Error fetching wishlist:', error);
// //       }
// //     };

// //     fetchWishlist();
// //   }, [userId]);

// //   const handleRemoveFromWishlist = async (productId) => {
// //     try {
// //       await axios.delete('/api/wishlist', { data: { userId, productId } });
// //       setWishlist(wishlist.filter(item => item.productId !== productId));
// //       toast.info('Item has been removed from your wishlist!');
// //     } catch (error) {
// //       console.error('Error removing from wishlist:', error);
// //     }
// //   };

// //   return (
// //     <div className="wishlist-page">
// //       <h1 className="wishlist-title">Your Wishlist</h1>
// //       {wishlist.length === 0 ? (
// //         <p className="empty-wishlist">Your wishlist is empty</p>
// //       ) : (
// //         <div className="wishlist-items">
// //           {wishlist.map(item => (
// //             <div key={item.productId} className="wishlist-item">
// //               <img src={item.image} alt={item.name} className="wishlist-item-img" />
// //               <div className="wishlist-item-details">
// //                 <h2 className="wishlist-item-name">{item.name}</h2>
// //                 <p className="wishlist-item-price">₹{item.price}</p>
// //                 <button className="add-to-cart" onClick={() => addToCart(item)}>
// //                   Add to Cart
// //                 </button>
// //                 <button className="remove-from-wishlist" onClick={() => handleRemoveFromWishlist(item.productId)}>
// //                   Delete
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Wishlist;
// import React, { useEffect, useState } from 'react';
// import './Wishlist.css';
// import { toast } from 'react-toastify';
// import axios from 'axios';

// const Wishlist = ({ userId, addToCart }) => {
//   const [wishlist, setWishlist] = useState([]);

//   useEffect(() => {
//     const fetchWishlist = async () => {
//       try {
//         const response = await axios.get(`/api/wishlist/${userId}`);
//         console.log('Fetched wishlist:', response.data); // Debugging line
//         setWishlist(response.data);
//       } catch (error) {
//         console.error('Error fetching wishlist:', error);
//       }
//     };

//     fetchWishlist();
//   }, [userId]);

//   const handleRemoveFromWishlist = async (productId) => {
//     try {
//       await axios.delete('/api/wishlist', { data: { userId, productId } });
//       setWishlist(prevWishlist => prevWishlist.filter(item => item.productId !== productId));
//       toast.info('Item has been removed from your wishlist!');
//     } catch (error) {
//       console.error('Error removing from wishlist:', error);
//     }
//   };

//   return (
//     <div className="wishlist-page">
//       <h1 className="wishlist-title">Your Wishlist</h1>
//       {wishlist.length === 0 ? (
//         <p className="empty-wishlist">Your wishlist is empty</p>
//       ) : (
//         <div className="wishlist-items">
//           {wishlist.map(item => (
//             <div key={item.productId} className="wishlist-item">
//               <img src={item.image} alt={item.name} className="wishlist-item-img" />
//               <div className="wishlist-item-details">
//                 <h2 className="wishlist-item-name">{item.name}</h2>
//                 <p className="wishlist-item-price">₹{item.price}</p>
//                 <button className="add-to-cart" onClick={() => addToCart(item)}>
//                   Add to Cart
//                 </button>
//                 <button className="remove-from-wishlist" onClick={() => handleRemoveFromWishlist(item.productId)}>
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Wishlist;
import React, { useEffect, useState } from 'react';
import './Wishlist.css';
import { toast } from 'react-toastify';
import axios from 'axios';

const Wishlist = ({ userId, addToCart }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    if (!userId) {
      // console.error('User ID is undefined');
      return;
    }

    const fetchWishlist = async () => {
      try {
        const response = await axios.get(`/api/wishlist/${userId}`);
        console.log('Fetched wishlist:', response.data); // Debugging line
        setWishlist(response.data);
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    fetchWishlist();
  }, [userId]);

  const handleRemoveFromWishlist = async (productId) => {
    try {
      await axios.delete('/api/wishlist', { data: { userId, productId } });
      setWishlist(prevWishlist => prevWishlist.filter(item => item.productId !== productId));
      toast.info('Item has been removed from your wishlist!');
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  return (
    <div className="wishlist-page">
      <h1 className="wishlist-title">Your Wishlist</h1>
      {wishlist.length === 0 ? (
        <p className="empty-wishlist">Your wishlist is empty</p>
      ) : (
        <div className="wishlist-items">
          {wishlist.map(item => (
            <div key={item.productId} className="wishlist-item">
              <img src={item.image} alt={item.name} className="wishlist-item-img" />
              <div className="wishlist-item-details">
                <h2 className="wishlist-item-name">{item.name}</h2>
                <p className="wishlist-item-price">₹{item.price}</p>
                <button className="add-to-cart" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
                <button className="remove-from-wishlist" onClick={() => handleRemoveFromWishlist(item.productId)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
