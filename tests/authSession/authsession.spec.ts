import {test} from '@playwright/test'


test('login session',async ({browser})=>{

   const context =  await browser.newContext({
        storageState:'./saucedemoauth.json'
    })

    const page = await context.newPage()

    await page.goto('https://www.saucedemo.com/inventory.html')

    await page.pause()

})