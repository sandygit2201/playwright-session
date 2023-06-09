import { test,expect } from "@playwright/test";
import readExcel from "utils/readExcel";

test('read data',async({page})=>{

    const users = await readExcel.getUsers()

    console.log(users)

    await page.goto("https://www.saucedemo.com/")

    await page.locator("#user-name").type(users[0].userId.trim())
    await page.locator("#password").type(users[0].password.trim())

    await page.pause()

    await page.locator('#login-button').click()

    await page.pause()


    expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html')


    await page.pause()

})