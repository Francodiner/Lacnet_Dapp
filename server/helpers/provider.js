"use strict";

require("dotenv").config();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const privateKey = process.env.PRIVATE_KEY;

const Provider = new HDWalletProvider({
  privateKeys: [privateKey],
  providerOrUrl: process.env.PROVIDER_URL,
});

module.exports = {
  Provider,
};
