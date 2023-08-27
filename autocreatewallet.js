const readlineSync = require("readline-sync");
const ethers = require('ethers');
var fs = require("fs");



async function createWalletAndCheckBalance() {
	const wallet = ethers.Wallet.createRandom();

	console.log('Generated Wallet Address:', wallet.address);
	console.log('Generated Private Key:', wallet.privateKey);
	await fs.appendFileSync('privateKey.txt', wallet.privateKey+'\n');
	console.log('Berhasil disimpan di privateKey.txt')
}


const jumlahwallet = readlineSync.question('MASUKAN JUMLAH WALLET YANG INGIN DIBUAT : ');
for (var i = jumlahwallet - 1; i >= 0; i--) {
	createWalletAndCheckBalance().catch(err => console.error(err));
}


