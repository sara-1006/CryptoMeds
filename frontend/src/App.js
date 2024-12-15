import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Web3 from "web3";
import contractJSON from "./CryptoMedsSupplyChain.json";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import ViewProducts from "./components/ViewProducts";
import "./App.css";

const App = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const init = async () => {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.enable();

        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        const networkId = await web3.eth.net.getId();
        const deployedNetwork = contractJSON.networks[networkId];
        if (deployedNetwork) {
          const instance = new web3.eth.Contract(
            contractJSON.abi,
            deployedNetwork.address
          );
          setContract(instance);
        } else {
          alert("Smart contract not deployed to detected network.");
        }
      } else {
        alert("Please install MetaMask!");
      }
    };
    init();
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/add-product"
            element={<AddProduct contract={contract} account={account} />}
          />
          <Route
            path="/view-products"
            element={<ViewProducts contract={contract} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
