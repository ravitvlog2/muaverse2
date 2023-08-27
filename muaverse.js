  const puppeteer = require('puppeteer')
  const dappeteer = require('dappeteer')
  // const dappeteer = require('@chainsafe/dappeteer');





  async function main() {

    const browser = await dappeteer.launch(puppeteer)
    const metamask = await dappeteer.getMetamask(browser)

    
    
    console.log('TUNGGU')
    await metamask.importAccount('mansion occur pioneer hockey moment room nominee can minor border phone thunder')
  // // create a new page and visit your dapp
  const page = await browser.newPage();
  await page.goto('https://example.com/');

  // // you can change the network if you want
  // await metaMask.switchNetwork('goerli');

  // // do something in your dapp that prompts MetaMask to add a Token
  // const addTokenButton = await page.$('#add-token');
  // await addTokenButton.click();
  // // instruct MetaMask to accept this request
  // await metaMask.acceptAddToken();

  // // do something that prompts MetaMask to confirm a transaction
  // const payButton = await page.$('#pay-with-eth');
  // await payButton.click();

  // // 🏌
  // await metaMask.confirmTransaction();
}

main();