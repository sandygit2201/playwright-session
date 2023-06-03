import { test } from "@playwright/test";

test('select dropdown', async ({page}) =>{

 await page.goto('http://autopract.com/selenium/dropdown1/')

 await page.locator('.custom-select').selectOption({value:'item4'})

 await page.screenshot({ path: 'screenshots/dropdown.png' })

})