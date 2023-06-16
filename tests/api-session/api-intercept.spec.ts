import { test } from "@playwright/test";


test('intercept an api on the page',async ({page}) => {

    const response = page.waitForResponse('**/api/users/2')

    await page.goto('https://reqres.in/')
    await page.locator("[data-id='users-single'] a").click()

    const responseData = await 

    
})