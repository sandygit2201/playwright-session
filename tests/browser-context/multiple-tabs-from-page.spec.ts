import { test,chromium, expect } from "@playwright/test";


test('multiple tabs',async ()=>{

    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://letcode.in/windows')

    await page.pause()


    const [testTab] = await Promise.all([

        context.waitForEvent('page'),
        page.click('#home')
    ])
   await  testTab.waitForLoadState()

   expect(testTab.url()).toContain('test')
   await page.pause()

   await page.bringToFront()

   const [alertTab] = await Promise.all([
    context.waitForEvent('page'),
    page.click('#multi')
   ])
   await alertTab.waitForLoadState()

   expect(alertTab.url()).toContain('alert')
   await page.pause()

})