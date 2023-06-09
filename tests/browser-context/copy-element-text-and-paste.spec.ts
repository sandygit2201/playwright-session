import { chromium, expect, test } from "@playwright/test";


test('multiple tabs', async () => {

    const browser = await chromium.launch({headless:false}); //initialize browser 
    const chromeContext = await browser.newContext(); //browser instance

    // tab2 
    const tab2 = await chromeContext.newPage()

    await tab2.goto('https://the-internet.herokuapp.com/iframe')

    const pageHeader  = tab2.locator('//h3').innerText()

    console.log('page header::'+pageHeader)

    const iframe = tab2.frameLocator('#mce_0_ifr').locator('html')

    await iframe.locator('#tinymce').click()
    await tab2.pause()
    await iframe.locator('#tinymce').type(pageHeader)

    await tab2.screenshot({ path: 'screenshots/multitabs/tab2.png' })

    await tab2.pause()

})