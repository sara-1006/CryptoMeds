import React, { useEffect, useState } from "react";
import Web3 from "web3";
import contractJSON from "./CryptoMedsSupplyChain.json";
import "./ViewProducts.css";

const ViewProducts = ({ contract, account }) => {
  const [medications, setMedications] = useState([]);

  useEffect(() => {
    const fetchMedications = async () => {
      const count = await contract.methods.medicationCount().call();
      const meds = [];
      for (let i = 1; i <= count; i++) {
        const medication = await contract.methods.getMedication(i).call();
        meds.push(medication);
      }
      setMedications(meds);
    };
    fetchMedications();
  }, [contract]);

  return (
    <div className="view-products">
      <h2>View Products</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Distributor</th>
            <th>Pharmacy</th>
            <th>Vendor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {medications.map((medication, index) => (
            <tr key={index}>
              <td>{medication.name}</td>
              <td>{medication.manufacturer}</td>
              <td>{medication.distributor}</td>
              <td>{medication.pharmacy}</td>
              <td>{medication.patient}</td>
              <td>{medication.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2024 CryptoMeds. All rights reserved.</p>
    </div>
  </footer>

    </div>
  );
};

export default ViewProducts;
