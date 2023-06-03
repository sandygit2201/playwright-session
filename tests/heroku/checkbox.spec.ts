import { test } from "@playwright/test";

test('select checkbox', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/checkboxes')

    await page.getByLabel('checkbox 1').check()
    console.log(page.locator('//h3').textContent())

})