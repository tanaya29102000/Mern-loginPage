import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <img
          src={
            "https://cdn.shopify.com/s/files/1/2493/0462/files/Knox-Cylinder-Planter-Pot-12-inch-18-inch-White-Stainless-Steel-Metal-Round-Plant-Pot-NMN-Designs_1024x1024.jpg?v=1704022611"
          }
          alt="About Us"
          className="about-image"
        />
        <p>Welcome to Our Company!</p>
        <p>
          We are excited to offer a wide range of products available for
          purchase through our partnership with the Ajio website. Whether you're
          looking for fashion, electronics, or home essentials, we provide
          quality products that you can trust.
        </p>
        <p>
          Our products are available for purchase both online and offline,
          giving you the flexibility to shop in the way that suits you best. You
          can easily browse our collection online, make secure purchases, and
          have your items delivered right to your doorstep. Alternatively, you
          can visit our physical stores for a more personalized shopping
          experience.
        </p>
        <p>
          At our company, we strive to bring you the best in style and
          convenience. Shop with us today and discover the difference in quality
          and service that sets us apart.
        </p>
        <p>
          Thank you for choosing us for your shopping needs. We look forward to
          serving you!
        </p>
      </div>
    </div>
  );
};

export default About;
