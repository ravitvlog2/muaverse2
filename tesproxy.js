// const puppeteer = require('puppeteer')

// var fs = require("fs");


// (async () => {
// 	var privatekeylist = fs.readFileSync("privatekey.txt", "utf-8").split("/\n|\r/");
// 	proxy=privatekeylist[0].split("|")[1]
// 	hostproxy=proxy.split(":")[0]
// 	port=proxy.split(":")[1]
// 	username=proxy.split(":")[2]
// 	pw=proxy.split(":")[3]






// 	try{const browser = await puppeteer.launch({
// 		executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
// 		headless: false, 
// 		args: [
// 		`--proxy-server=${hostproxy}:${port}`,
// 		]
// 	});
// 	console.log(username+' : '+pw)
// 	const page = await browser.newPage();
// 	await page.authenticate({
// 		username: username,
// 		password: pw,
// 	});


// 	await page.goto('https://whatismyipaddress.com/')




// }catch(das){console.log(das)}

// })();





var delay = require("delay");
function gas(){
	(async () => {
		console.log('start')
		await delay(10000)
		console.log('stop')

	})();
}


(async () => {
	do{
		gas();
		console.log(chalk.green('==== DONE SEMUA AKUN ===='))
		console.log(chalk.green('==== DELAY 24 JAM + 2 menit ===='))
		await delay(86550000) 
		console.log('jalan function selesai')
	}while(true)

})();