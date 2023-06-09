import { test ,expect} from "@playwright/test";
import users from '@testData/users.json';

test('read data from json',async ({page})=>{
  
      await page.goto('/index.php?route=account/login')
      await page.getByPlaceholder('E-Mail Address').fill(users.user1.username)
      await page.getByPlaceholder('Password').fill(users.user1.password)
      await page.locator('input[value="Login"]').click()
      await expect(page.getByText('Warning: No match for E-Mail Address and/or Password.')).toBeVisible()

})