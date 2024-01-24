require("dotenv").config();
const Web3 = require("web3");
const { Provider } = require("../helpers/provider");
const web3 = new Web3(Provider);

const signTransaction = async (req, res) => {
  try {
    const { from, to, gas, data } = req.body;

    const nonce = await web3.eth.getTransactionCount(from);
    const gasPrice = await web3.eth.getGasPrice();

    const txObject = {
      from,
      to,
      nonce,
      gas,
      gasPrice,
      data,
    };

    const signedTransaction = await web3.eth.accounts.signTransaction(
      txObject,
      process.env.PRIVATE_KEY
    );

    const result = await web3.eth.sendSignedTransaction(
      signedTransaction.rawTransaction
    );

    res.json({ transactionHash: result.transactionHash });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error al procesar la transacción" });
  }
};

module.exports = {
  signTransaction,
};
