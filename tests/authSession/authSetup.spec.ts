import { test} from "@playwright/test";

const authFile = 'playwright/.auth/user.json';

test('user login',async ({page})=>{

    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').type('standard_user')
    await page.locator('#password').type('standard_user')
    await page.locator('#login-button').click()

    await page.waitForURL('https://www.saucedemo.com/');
    await page.context().storageState({ path: authFile });

})