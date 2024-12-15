import React, { useState } from "react";
import Web3 from "web3";
import contractJSON from "./CryptoMedsSupplyChain.json";
import "./AddProduct.css";

const AddProduct = ({ contract, account }) => {
  const [form, setForm] = useState({
    name: "",
    manufacturer: "",
    distributor: "",
    pharmacy: "",
    patient: "",
    status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addMedication = async () => {
    const { name, manufacturer, distributor, pharmacy, patient, status } = form;
    await contract.methods
      .addMedication(name, manufacturer, distributor, pharmacy, patient, status)
      .send({ from: account });
  };

  return (
    <div className="add-product">
      <h2>Add New Medication</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMedication();
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Medication Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="manufacturer"
          placeholder="Manufacturer"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="distributor"
          placeholder="Distributor"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="pharmacy"
          placeholder="Pharmacy"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="vendor"
          placeholder="Vendor"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          onChange={handleInputChange}
        />
        <button type="submit">Add Medication</button>
      </form>

      <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2024 CryptoMeds. All rights reserved.</p>
    </div>
  </footer>

    </div>
  );
};

export default AddProduct;
