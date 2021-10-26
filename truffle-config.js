const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" 
    },
    mumbai: {
      provider: () => new HDWalletProvider(mnemonic, `wss://rpc-mumbai.maticvigil.com`),
      network_id: 80001,
      confirmations: 10,
      timeoutBlocks: 200,
      networkCheckTimeout: 100000000,
      skipDryRun: true
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/63bcfc12c17649afb9026e2c76aaa630`),
      network_id: 3,
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },

  compilers: {
    solc: {
      version: "0.8.7", 
      settings: {         
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  }
}