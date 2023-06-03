import { test, chromium, expect } from "@playwright/test"

test('iframes on page',async ()=>{

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page1 =  await context.newPage()
    const page2 =  await context.newPage()


    await page1.goto('https://the-internet.herokuapp.com/abtest')

    await expect(page1.getByText('A/B Test')).toBeVisible()

    let dataOnPage= await page1.locator('//p').textContent()

    await page2.goto('https://the-internet.herokuapp.com/iframe')
    const frame1 = page2.frameLocator('#mce_0_ifr').locator('html')

    await frame1.click()

    await frame1.type(dataOnPage)

})