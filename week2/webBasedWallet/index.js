const ethers = require('ethers');

// Import necessary libraries

// Create an empty array to store wallets
const wallets = [];

// Function to generate a new mnemonic
function generateMnemonic() {
    const mnemonic = ethers.Wallet.createRandom().mnemonic;
    return mnemonic;
}

// Function to create a new wallet using a mnemonic
function createWallet(mnemonic) {
    const wallet = ethers.Wallet.fromMnemonic(mnemonic);
    wallets.push(wallet);
    return wallet;
}

// Function to get the public key associated with a wallet
function getPublicKey(wallet) {
    return wallet.address;
}

// Example usage
const mnemonic = generateMnemonic();
const wallet1 = createWallet(mnemonic);
const wallet2 = createWallet(mnemonic);

console.log('Mnemonic:', mnemonic);
console.log('Wallet 1 Public Key:', getPublicKey(wallet1));
console.log('Wallet 2 Public Key:', getPublicKey(wallet2));