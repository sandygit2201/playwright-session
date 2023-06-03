import { chromium, expect, test } from "@playwright/test";


test('multiple tabs', async () => {

    const browser = await chromium.launch(); //initialize browser 
    const chromeContext = await browser.newContext(); //browser instance

    //    tab1 
    const tab1 = await chromeContext.newPage() //browser tab

    await tab1.goto('https://the-internet.herokuapp.com/abtest')

    expect(await tab1.locator("div[class='example'] h3").textContent())
        .toContain('A/B Test')

    const dataOnPage = await tab1.locator("//div[@id='content']//p").textContent()

    await tab1.screenshot({ path: 'screenshots/multitabs/tab1' })


    // tab2 
    const tab2 = await chromeContext.newPage()

    await tab2.goto('https://the-internet.herokuapp.com/iframe')

    const iframe = tab2.frameLocator('#mce_0_ifr').locator('html')

    await iframe.locator('#tinymce').click()
    await iframe.locator('#tinymce').type(dataOnPage)

    await tab2.screenshot({ path: 'screenshots/multitabs/tab2' })

})