import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">

      <div className="services-section">
        <h2 className="services-title">Our Services</h2>
        <div className="image-gallery">
          <div className="gallery-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5MMQo8EFqDvz8xd9FX9oXJ25I9syPiflGg&s" alt="Gallery Image 1" />
            <p className="image-description">Stylish Apparel: Discover our exclusive range of stylish and trendy clothing designed to elevate your fashion game.</p>
          </div>
          <div className="gallery-item">
            <img src="https://image.made-in-china.com/202f0j00SHGqBLvRZYkm/Outdoor-Indoor-Decoration-Pink-Ceramic-Large-Flower-Pots-Cheap-Pots-for-Plants-Flower.webp" alt="Gallery Image 2" />
            <p className="image-description">Elegant Home Décor: Explore our elegant home décor items that add a touch of sophistication to your living space.</p>
          </div>
          <div className="gallery-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqHAlIxiYZDiQ3QrMw_S0ttvWma9re1sFaow&s" alt="Gallery Image 3" />
            <p className="image-description">Personalized Gifts: Find the perfect personalized gifts for your loved ones, combining thoughtfulness with style.</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
