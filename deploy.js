const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode}= require('./compile');

const provider = new HDWalletProvider (
  'dizzy filter text that fuel camp clay drink oyster advance minor mom',
  'https://rinkeby.infura.io/FbqgP7dTVC7fADXxy6Lw'
);

const web3 = new Web3 (provider);

const deploy= async() => {
  const acc = await web3.eth.getAccounts();
  const gasPrice = web3.utils.toWei('2', 'gwei');
  console.log('Attempting to deploy from Account -',acc[0]);

  result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({data: '0x'+bytecode, arguments: ['Ankit here'] })
  .send({gas:'4000000', from: acc[0], gasPrice: web3.utils.toWei('2', 'gwei')});

  console.log('contract deployed to address -',result.options.address);
};
deploy();
