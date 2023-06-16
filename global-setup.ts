import { Browser, chromium, expect } from "@playwright/test";

async function createAuthSessions() {

    const browser1: Browser = await chromium.launch({headless:false})
    const context1 = await browser1.newContext()
    const page1 = await context1.newPage()
   

    await page1.goto('https://www.saucedemo.com/')
    await page1.locator('#user-name').fill('standard_user')
    await page1.locator('#password').fill('secret_sauce')

    await page1.locator('#login-button').click()

    expect(page1.url()).toContain('inventory.html')

    await page1.context().storageState({ path: "./standard-user.json" })

    await browser1.close()

    const browser2: Browser = await chromium.launch({headless:false})
    const context2 = await browser2.newContext()
    const page2 = await context1.newPage()


    await page2.goto('https://www.saucedemo.com/')
    await page2.locator('#user-name').fill('problem_user')
    await page2.locator('#password').fill('secret_sauce')

    await page2.locator('#login-button').click()

    expect(page2.url()).toContain('inventory.html')

    await page2.context().storageState({ path: "./problem_user.json" })
    await browser2.close()


    

}

export default createAuthSessions;