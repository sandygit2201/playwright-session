import {expect, test} from '@playwright/test'


test.use({storageState:'./problem_user.json'})
test.skip('login session',async ({page})=>{
    
   await page.goto('https://www.saucedemo.com/inventory.html')
   await expect(page.getByText("Products")).toBeVisible()
   await page.pause()
})
test('click on product',async ({page})=>{
    
   await page.goto('https://www.saucedemo.com/inventory.html')
   await page.getByText('Add to cart').first().click()
   await page.pause()
})
