import { expect, test } from "@playwright/test";
// import users from '@testData/users.json'
import users from "testData/users.json"


test('read txt file',async({page})=>{


    await page.goto("https://www.saucedemo.com/")

    await page.locator("#user-name").type(users.username)
    await page.locator("#password").type(users.password)

    await page.pause()

    await page.locator('#login-button').click()

    expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html')


    await page.pause()
})