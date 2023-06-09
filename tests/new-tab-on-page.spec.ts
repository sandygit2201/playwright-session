import { test } from "@playwright/test";


test('new tab',async({page})=>{


await page.goto('https://the-internet.herokuapp.com/download')
const downloadPromise = page.waitForEvent('download');

await page.locator("//a[text()='logs.png']").click()
const download = await downloadPromise;
console.log(await download.path());
await download.saveAs('downloads/logs1.png');

})