import { expect, test } from "@playwright/test";


test('checkbox and radio button', async({page})=>{

    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp')

    expect(await page.isChecked('//label[contains(text(),"Two")]/input[@type="checkbox"]')).toBeFalsy()

})