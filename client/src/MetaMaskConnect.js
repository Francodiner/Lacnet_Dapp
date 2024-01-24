import React from "react";

function MetaMaskConnect({ connected, connectWithMetamask }) {
  return (
    <button
      className="btn btn-primary"
      onClick={connectWithMetamask}
      disabled={connected}
    >
      {connected ? "Conectado" : "Conectarse con MetaMask"}
    </button>
  );
}

export default MetaMaskConnect;
