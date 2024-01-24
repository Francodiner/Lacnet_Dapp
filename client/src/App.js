// App.js
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { contractAddress, contractABI } from "./ContractInfo";
import Greeting from "./Greeting";
import MetaMaskConnect from "./MetaMaskConnect";
import SetGreetingName from "./SetGreetingName";

function App() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [connected, setConnected] = useState(false);
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    async function initializeWeb3() {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);

        try {
          const accounts = await web3Instance.eth.getAccounts();

          if (accounts.length > 0) {
            setWeb3(web3Instance);
            setAccounts(accounts);
            setConnected(true);
          }

          window.ethereum.on("accountsChanged", (newAccounts) => {
            setAccounts(newAccounts);
            setConnected(newAccounts.length > 0);
          });
        } catch (error) {
          console.error(error);
        }
      }
    }

    initializeWeb3();
  }, []);

  const connectWithMetamask = async () => {
    if (!connected) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const accounts = await web3.eth.getAccounts();

        setAccounts(accounts);
        setConnected(true);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const setGreetingWithName = async (nameInput) => {
    try {
      const contract = new web3.eth.Contract(contractABI, contractAddress);

      await contract.methods
        .setGreetingWithName(nameInput)
        .send({ from: accounts[0] });

      const greetingFromContract = await contract.methods.sayHello().call();
      setGreeting(greetingFromContract);

      handleTransaction();
      setName("");
    } catch (error) {
      console.error(error);
    }
  };

  const showAlert = async () => {
    try {
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const greetingFromContract = await contract.methods.sayHello().call();
      setGreeting(greetingFromContract);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTransaction = async () => {
    try {
      const transactionData = {
        from: accounts[0],
        to: contractAddress,
        gas: 31000,
        data: web3.utils.toHex(greeting),
      };

      const response = await fetch("http://localhost:3001/transaction/sign", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transactionData),
      });

      const responseData = await response.json();
      console.log("Hash de transacción:", responseData.transactionHash);
    } catch (error) {
      console.error("Error al procesar la transacción:", error);
    }
  };

  return (
    <div
      className="App d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f0f0f0" }}
    >
      <div className="text-center">
        {connected ? (
          <>
            <h1 className="mb-4">Bienvenido</h1>
            <p className="mb-4">Dirección de billetera: {accounts[0]}</p>
            <SetGreetingName
              name={name}
              setNameAndGreet={setGreetingWithName}
            />
            <Greeting greeting={greeting} />
            <button className="btn btn-success" onClick={showAlert}>
              Mostrar Saludo
            </button>
          </>
        ) : (
          <MetaMaskConnect
            connected={connected}
            connectWithMetamask={connectWithMetamask}
          />
        )}
      </div>
    </div>
  );
}

export default App;
