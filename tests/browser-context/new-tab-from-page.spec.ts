import { chromium, expect, test } from "@playwright/test";

test('handle new tab opened from the page',async()=>{

    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://the-internet.herokuapp.com/windows')

    await page.pause()

    const [newTab1] = await Promise.all([
         context.waitForEvent('page'),
         await page.locator("//a[text()='Click Here']").click()
    ])
    
    await newTab1.waitForLoadState()
    expect(newTab1.url()).toEqual('https://the-internet.herokuapp.com/windows/new')
    await page.pause()

    await page.bringToFront()

    await page.pause()
    const [newTab2] = await Promise.all([
        context.waitForEvent('page'),
        await page.locator("//a[text()='Click Here']").click()
   ])
   
   await newTab2.waitForLoadState()
   expect(newTab2.url()).toEqual('https://the-internet.herokuapp.com/windows/new')
   await page.pause()

   const pages = newTab1.context().pages()

   console.log('Pages number of pages::'+ pages.length)

   expect(pages.length).toEqual(3)

})