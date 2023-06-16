import { test, expect } from "@playwright/test";

test('login as user - test1', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')

    await page.locator('#login-button').click()
    expect(page.url()).toContain('inventory.html')

    await page.pause()

})

test('login as user - add product to card', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')

    await page.locator('#login-button').click()
    
    await page.locator("//button[text()='Add to cart']").first().click()

    await page.pause()
})