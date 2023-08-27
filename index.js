const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())
const readlineSync = require("readline-sync");
var fs = require("fs");
var delay = require("delay");
const chalk = require("chalk");
const path = require('path');





function gas(){
	(async () => {

		var privatekeylist = fs.readFileSync("privatekey.txt", "utf-8").split("\n");
		for (var index = 0; index < privatekeylist.length; index++) {
			proxy=privatekeylist[index].split("|")[1]
			hostproxy=proxy.split(":")[0]
			port=proxy.split(":")[1]
			usernameproxy=proxy.split(":")[2]
			pwproxy=proxy.split(":")[3]

			fs.rmSync('profilakun/1', { recursive: true, force: true });

			const paths = `${__dirname}/metamask/10.34.3_0/`;
			const browser = await puppeteer.launch({
				executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
				headless: false,
				ignoreDefaultArgs: ["--enable-automation"],
				userDataDir: './profilakun/1',
				slowMo: 10,
				ignoreHTTPSErrors: true,
				args: [
				`--proxy-server=${hostproxy}:${port}`,
				`--disable-extensions-except=${paths}`,
				`--load-extension=${paths}`,
				]
			});
			await delay(4000)
			var page = await browser.newPage();
			await page.authenticate({
				username: usernameproxy,
				password: pwproxy,
			});

			try{
				await page.goto('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#onboarding/welcome',{waitUntil:"networkidle0"});
				await page.click('#onboarding__terms-checkbox')
				await page.waitForTimeout(1000);
				await page.waitForSelector('#app-content > div > div.mm-box.main-container-wrapper > div > div > div > ul > li:nth-child(3) > button');
				await page.click('#app-content > div > div.mm-box.main-container-wrapper > div > div > div > ul > li:nth-child(3) > button');
				await page.waitForSelector('#app-content > div > div.mm-box.main-container-wrapper > div > div > div > div > button.button.btn--rounded.btn-primary.btn--large');
				await page.click('#app-content > div > div.mm-box.main-container-wrapper > div > div > div > div > button.button.btn--rounded.btn-primary.btn--large');
				await page.waitForSelector('#import-srp__srp-word-0')
				await page.click('#import-srp__srp-word-0')
				phrase = 'valid decorate message oyster soap excite rebel food alter spare steak apple'
				password = 'kitafokus123'
				for (const char of phrase) {
					if (char === ' ') {
						await page.keyboard.press("Tab");
						await delay(100)
						await page.keyboard.press("Tab");
					} else {
						page.keyboard.sendCharacter(char);
					}
				}
				await page.waitForSelector('#app-content > div > div.mm-box.main-container-wrapper > div > div > div > div.import-srp__actions > div > button')
				await page.click('#app-content > div > div.mm-box.main-container-wrapper > div > div > div > div.import-srp__actions > div > button')
				await page.type('#app-content > div > div.mm-box.main-container-wrapper > div > div > div > div.box.box--margin-top-3.box--flex-direction-row.box--justify-content-center.box--display-flex > form > div:nth-child(1) > label > input', password);
				await page.waitForTimeout(300)
				await page.type('#app-content > div > div.mm-box.main-container-wrapper > div > div > div > div.box.box--margin-top-3.box--flex-direction-row.box--justify-content-center.box--display-flex > form > div:nth-child(2) > label > input', password);
				await page.click('#app-content > div > div.mm-box.main-container-wrapper > div > div > div > div.box.box--margin-top-3.box--flex-direction-row.box--justify-content-center.box--display-flex > form > div.box.box--margin-bottom-4.box--flex-direction-row.box--justify-content-space-between.box--align-items-center.box--display-flex > label > input')
				await page.click('#app-content > div > div.mm-box.main-container-wrapper > div > div > div > div.box.box--margin-top-3.box--flex-direction-row.box--justify-content-center.box--display-flex > form > button')




				await page.waitForSelector('#app-content > div > div.mm-box.main-container-wrapper > div > div > div > div.box.box--flex-direction-row.box--text-align-center > h2')
				var test = await page.$eval("#app-content > div > div.mm-box.main-container-wrapper > div > div > div > div.box.box--flex-direction-row.box--text-align-center > h2", el => el.textContent);
				console.log(test)
				await delay(3000)
				await page.mouse.click(444, 622);


				await page.waitForSelector('#app-content > div > div.mm-box.main-container-wrapper > div > div > div > div.onboarding-pin-extension__buttons > button')
				await page.click('#app-content > div > div.mm-box.main-container-wrapper > div > div > div > div.onboarding-pin-extension__buttons > button')
				await page.waitForTimeout(300)
				await page.click('#app-content > div > div.mm-box.main-container-wrapper > div > div > div > div.onboarding-pin-extension__buttons > button')
				await page.waitForTimeout(1000)
				await page.mouse.click(1, 91);
				await page.waitForTimeout(500)
				await page.mouse.click(1, 91);
				await page.keyboard.press('Escape');




				try{
					console.log(chalk.green(index+1+' | '+privatekeylist[index]))
					await page.click('#app-content > div > div.box.multichain-app-header.box--display-flex.box--flex-direction-row.box--align-items-center.box--width-full.box--background-color-background-alternative > div > button > span > span.box.mm-text.mm-text--body-md.mm-text--font-weight-bold.mm-text--ellipsis.box--flex-direction-row.box--color-text-default')
					await page.waitForTimeout(500)

					await page.click('#popover-content > div > div > section > div.box.popover-content.box--display-flex.box--flex-direction-column.box--justify-content-flex-start.box--align-items-stretch.box--rounded-xl > div > div.mm-box.mm-box--padding-4 > div:nth-child(2) > button')
					await page.waitForSelector('#private-key-box')
					await page.waitForTimeout(500)
					await page.click('#private-key-box')
					await page.keyboard.sendCharacter(privatekeylist[index])
					await page.click('#popover-content > div > div > section > div.box.popover-content.box--display-flex.box--flex-direction-column.box--justify-content-flex-start.box--align-items-stretch.box--rounded-xl > div > div > div.box.box--display-flex.box--gap-4.box--flex-direction-row > button.box.mm-text.mm-button-base.mm-button-base--size-lg.mm-button-base--block.mm-button-primary.mm-text--body-md.box--padding-right-4.box--padding-left-4.box--display-inline-flex.box--flex-direction-row.box--justify-content-center.box--align-items-center.box--color-primary-inverse.box--background-color-primary-default.box--rounded-pill')
					await delay(4000)
				}catch{
					console.log('sudah di add')
				}


			}catch(cxz){

				if (cxz=='Error: No node found for selector: #onboarding__terms-checkbox') {
					console.log(chalk.green('Sudah input semua data private key'))
					console.log(chalk.green('login password'))
					await page.type("input[type=password]", 'kitafokus123\n')
					await delay(5000)
					await page.mouse.click(1, 91);
					await page.waitForSelector('#app-content > div > div.box.multichain-app-header.box--display-flex.box--flex-direction-row.box--align-items-center.box--width-full.box--background-color-background-alternative > div > div:nth-child(1) > button > p')
					var cekstatuslogin = await page.$eval("#app-content > div > div.box.multichain-app-header.box--display-flex.box--flex-direction-row.box--align-items-center.box--width-full.box--background-color-background-alternative > div > div:nth-child(1) > button > p", el => el.textContent);
					if(cekstatuslogin=='Ethereum Mainnet'){
						console.log(chalk.green('SUKSES LOGIN'))
					}
				}else{
					console.log(chalk.red('EROR CUK'))
					console.log('Ops ada eror dikit = '+cxz)
				}
			}


			try{
				console.log(chalk.magenta('Add BNB di metamask'))
				let cekbnb = await page.$eval("#app-content > div > div.box.multichain-app-header.box--display-flex.box--flex-direction-row.box--align-items-center.box--width-full.box--background-color-background-alternative > div > div:nth-child(1) > button > p", el => el.textContent);
				if (cekbnb!=='BNB Chain') {
					await page.goto('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/home.html#settings/networks/add-popular-custom-network',{waitUntil:"networkidle0"});
					await page.waitForSelector('#app-content > div > div.mm-box.main-container-wrapper > div > div.settings-page__content > div.settings-page__content__modules > div > div.box.add-network__main-container.box--margin-top-4.box--margin-bottom-1.box--flex-direction-row > div:nth-child(6) > div.box.box--margin-left-1.box--display-flex.box--flex-direction-row.box--align-items-center > button')
					await page.click('#app-content > div > div.mm-box.main-container-wrapper > div > div.settings-page__content > div.settings-page__content__modules > div > div.box.add-network__main-container.box--margin-top-4.box--margin-bottom-1.box--flex-direction-row > div:nth-child(6) > div.box.box--margin-left-1.box--display-flex.box--flex-direction-row.box--align-items-center > button')
					await page.waitForSelector('#popover-content > div > div > section > div > div > div.confirmation-footer > div > button.button.btn--rounded.btn-primary')
					await page.click('#popover-content > div > div > section > div > div > div.confirmation-footer > div > button.button.btn--rounded.btn-primary')
					try{
						await page.waitForSelector('#popover-content > div > div > section > div > div > button.button.btn--rounded.btn-primary.home__new-network-added__switch-to-button')
						await page.click('#popover-content > div > div > section > div > div > button.button.btn--rounded.btn-primary.home__new-network-added__switch-to-button')
					}catch(fsdhjg){
						console.log(fsdhjg)
						var asdkjhaskjd = readlineSync.question('Tambah waktu login ( Y / T ) :');
					}
					await delay(2000)
					await page.mouse.click(1, 91);
				}
				else{
					console.log(chalk.green('SUDAH ADD BNB'))
				}
			}catch(adawsda){console.log(chalk.red('OPS =>'+adawsda))}


			const pagesds = await browser.pages(); 

			for (let i = 1; i < pagesds.length; i++) {
				if (pagesds[i] !== page) {
					await pagesds[i].close();
				}
			}





			try{

				try{
					await page.goto('https://muaverse.build/boarding',{waitUntil:"networkidle0"});
					await page.waitForSelector('#TouchBar > div.wallet > span')
					await page.click('#TouchBar > div.wallet > span')
					await page.waitForSelector('#connect > div > div > div > div.content > div:nth-child(1) > div > span.describe')
					await page.click('#connect > div > div > div > div.content > div:nth-child(1) > div > span.describe')
					try{
						await page.waitForSelector('body > div:nth-child(7) > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > button > span',{timeout: 5000})
						await page.click('body > div:nth-child(7) > div > div:nth-child(2) > div:nth-child(3) > div:nth-child(3) > button > span')
					}catch(hadere){console.log(chalk.green('lanjoot'))}
					await delay(10000)

					const pagemeta = (await browser.pages())[2]
					await pagemeta.bringToFront();
					await pagemeta.waitForTimeout(1000)
					await pagemeta.mouse.click(1, 4)
					console.log(await pagemeta.$eval("#app-content > div > div > div > div.permissions-connect-choose-account__content > div.box.permissions-connect-header.box--flex-direction-column.box--justify-content-center.box--display-flex > div.permissions-connect-header__title", el => el.textContent))
					await pagemeta.waitForSelector('#app-content > div > div > div > div.permissions-connect-choose-account__content > div.choose-account-list > div.choose-account-list__header--multiple-items > div.choose-account-list__select-all > input')

					await pagemeta.click('#app-content > div > div > div > div.permissions-connect-choose-account__content > div.choose-account-list > div.choose-account-list__header--multiple-items > div.choose-account-list__select-all > input')
					await pagemeta.waitForTimeout(1000)
					await pagemeta.click('#app-content > div > div > div > div.permissions-connect-choose-account__content > div.choose-account-list > div.choose-account-list__header--multiple-items > div.choose-account-list__select-all > input')

					await pagemeta.click("#app-content > div > div > div > div.permissions-connect-choose-account__content > div.choose-account-list > div.choose-account-list__wrapper > div > div:nth-child(2) > div")
					await pagemeta.waitForSelector('#app-content > div > div > div > div.permissions-connect-choose-account__footer-container > div.page-container__footer > footer > button.button.btn--rounded.btn-primary.page-container__footer-button')
					await pagemeta.click('#app-content > div > div > div > div.permissions-connect-choose-account__footer-container > div.page-container__footer > footer > button.button.btn--rounded.btn-primary.page-container__footer-button')
					await pagemeta.waitForTimeout(1000)
					await pagemeta.waitForSelector('#app-content > div > div > div > div.page-container.permission-approval-container > div.permission-approval-container__content > div > div > div.permissions-connect-header__title')
					let akunke = await pagemeta.$eval("#app-content > div > div > div > div.page-container.permission-approval-container > div.permission-approval-container__content > div > div > div.permissions-connect-header__title", el => el.textContent);
					console.log(chalk.green(akunke))
					await pagemeta.waitForSelector('#app-content > div > div > div > div.page-container.permission-approval-container > div.permission-approval-container__footers > div.page-container__footer > footer > button.button.btn--rounded.btn-primary.page-container__footer-button')
					await pagemeta.click('#app-content > div > div > div > div.page-container.permission-approval-container > div.permission-approval-container__footers > div.page-container__footer > footer > button.button.btn--rounded.btn-primary.page-container__footer-button')
					await page.bringToFront();
					await delay(5000)

				}catch(tangkaperorconect){
					console.log(chalk.green('Sudah Konek wallet =>'+tangkaperorconect))
				}
				await delay(5000)

				try{
					console.log(chalk.magenta('check status minting...'))
					let cekminting = await page.$eval("#CardInfo > div.initOperate > div > div > span", el => el.textContent);
					if(cekminting==' Mint '){
						console.log(chalk.green(cekminting))
						await page.waitForSelector('#CardInfo > div.initOperate > div > div > span')
						await page.click('#CardInfo > div.initOperate > div > div > span')
						await delay(10000)
						const pageminting = (await browser.pages())[2]
						await pageminting.bringToFront()
						console.log('tunggu 1 detik')
						await pageminting.waitForTimeout(1000)
						await pageminting.mouse.click(1, 4)
						await pageminting.waitForSelector('#app-content > div > div > div > div.confirmation-footer > div > button.button.btn--rounded.btn-primary')
						await pageminting.click('#app-content > div > div > div > div.confirmation-footer > div > button.button.btn--rounded.btn-primary')
						await pageminting.waitForTimeout(2000)
						console.log('sudah aprove')
						console.log('switch network')
						await pageminting.waitForSelector('#app-content > div > div > div > div.confirmation-footer > div > button.button.btn--rounded.btn-primary')
						await pageminting.click('#app-content > div > div > div > div.confirmation-footer > div > button.button.btn--rounded.btn-primary')
						console.log('SUDAH MINTING')
						await delay(15000)
						const pageacc = (await browser.pages())[2]
						await pageacc.bringToFront()
						await pageacc.waitForSelector('#app-content > div > div > div > div.confirm-page-container-content > div.page-container__footer > footer > button.button.btn--rounded.btn-primary.page-container__footer-button')
						await pageacc.click('#app-content > div > div > div > div.confirm-page-container-content > div.page-container__footer > footer > button.button.btn--rounded.btn-primary.page-container__footer-button')

						await delay(10000)
						try{
							const pagesignature = (await browser.pages())[2]
							await pagesignature.bringToFront()
							await pagesignature.waitForSelector('#app-content > div > div > div > div.page-container__footer > footer > button.button.btn--rounded.btn-primary.page-container__footer-button')
							await pagesignature.click('#app-content > div > div > div > div.page-container__footer > footer > button.button.btn--rounded.btn-primary.page-container__footer-button')
							await delay(10000)

							console.log('aprove lagi')
							await page.bringToFront();
							await page.waitForSelector('#CardInfo > div.initOperate > div > div > span')
							await page.click('#CardInfo > div.initOperate > div > div > span')
							await delay(10000)
							const pageminting = (await browser.pages())[2]
							await pageminting.bringToFront()
							console.log('tunggu 1 detik')
							await pageminting.waitForTimeout(1000)
							await pageminting.mouse.click(1, 4)
							await pageminting.waitForSelector('#app-content > div > div > div > div.confirmation-footer > div > button.button.btn--rounded.btn-primary')
							await pageminting.click('#app-content > div > div > div > div.confirmation-footer > div > button.button.btn--rounded.btn-primary')
							await pageminting.waitForTimeout(2000)
							console.log('sudah aprove')
							console.log('switch network')
							await pageminting.waitForSelector('#app-content > div > div > div > div.confirmation-footer > div > button.button.btn--rounded.btn-primary')
							await pageminting.click('#app-content > div > div > div > div.confirmation-footer > div > button.button.btn--rounded.btn-primary')
						}catch{

						}


					}

					console.log('LANJUTKAN CLAIM DAILY')

				}catch(werosr){
					console.log('eror saat minting ='+werosr)
					console.log('sudah minting dan lanjut claim daily isi disini juga')
				}



				console.log('CLAIM DAILY')
				await page.bringToFront()
				console.log('klik check-in')
				await page.waitForSelector('#CardInfo > div.ownerOperate > div.n-spin-container > div > div')
				await page.click('#CardInfo > div.ownerOperate > div.n-spin-container > div > div')
				await delay(5000)
				try{
					console.log('sign signature')
					const pagesignature = (await browser.pages())[2]
					await pagesignature.bringToFront()
					await pagesignature.waitForSelector('#app-content > div > div > div > div.page-container__footer > footer > button.button.btn--rounded.btn-primary.page-container__footer-button')
					await pagesignature.click('#app-content > div > div > div > div.page-container__footer > footer > button.button.btn--rounded.btn-primary.page-container__footer-button')
					await delay(10000)
					console.log('sign signature done')
				}catch{

				}
			}catch(eror){
				console.log("erorbosqu= "+eror)
			}

			await browser.close();





		}
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