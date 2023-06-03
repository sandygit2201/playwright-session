import { test, expect } from '@playwright/test';

test('user registration', async ({ page }) => {

  const user = {
    firstName: "antony",
    lastName: "raj",
    email: "antony.raj1@hello.com",
    telephone: "+91 9999999999",
    password: "password12!@"

  }

  await page.goto('/index.php?route=account/register')
  await expect(page).toHaveTitle('Register Account')

  // locator using placeholder
  await page.getByPlaceholder('First Name').fill(user.firstName)
  await page.getByPlaceholder('Last Name').fill(user.lastName)
  await page.getByPlaceholder('E-Mail').fill(user.email)
  await page.getByPlaceholder('Telephone').fill(user.telephone)
  await page.locator('#input-password').fill(user.password)
  await page.locator('#input-confirm').fill(user.password)
  await page.getByText('I have read and agree to the').click()

  await page.locator('input[value="Continue"]').click()

  await expect(page.getByText('Your Account Has Been Created!')).toBeVisible()

});

//try to register the same user again and verify message saying that user already exists

