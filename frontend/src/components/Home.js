import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="welcome">
        <div className="welcome-text">
          <h2>Welcome to CryptoMeds</h2>
          <p>Your trusted blockchain-based pharmaceutical supply chain management system.</p>
        </div>
        <img src="/image2.jpg" alt="Welcome" />
      </section>

      <section className="about">
        <img src="/image1.jpg" alt="About CryptoMeds" />
        <div className="about-text">
          <h2>About CryptoMeds</h2>
          <p>
            CryptoMeds is a revolutionary platform designed to track and manage
            pharmaceutical supply chains using blockchain technology. By leveraging
            Ethereum smart contracts, we provide an immutable, transparent, and
            secure system for tracking medications from manufacturers to vendors.
          </p>
          <p>
            Our goal is to ensure the integrity of the pharmaceutical supply chain
            and eliminate fraud, counterfeit drugs, and inefficiencies. Through
            CryptoMeds, manufacturers, distributors, pharmacies, and vendors can
            interact seamlessly while ensuring the highest levels of security and
            transparency.
          </p>
          <p>
            By leveraging the power of blockchain, CryptoMeds brings an innovative
            solution to the pharmaceutical industry, creating a trustworthy and
            efficient system for managing pharmaceutical products globally.
          </p>
        </div>
      </section>

      <section className="about additional-content">
        
        <div className="add-about-text">
          <p>
            Join CryptoMeds today and become part of the solution to revolutionize
            the global healthcare supply chain.
          </p>
        
          <img src="/image3.jpg" alt="Blockchain Technology" />
        <img src="/image4.jpg" alt="Blockchain Technology" />
        <img src="/image5.jpeg" alt="Pharmaceutical Tracking" />

        </div>
        
      </section>

      <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2024 CryptoMeds. All rights reserved.</p>
    </div>
  </footer>

    </div>
  );
};

export default Home;
