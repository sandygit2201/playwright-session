import { test, expect } from '@playwright/test'

test.beforeEach(async({page})=>{

    const USERNAME = 'antony.raj@hello.com'
    const PASSWORD = 'password12!@'

    await page.goto('/index.php?route=account/login')
    await page.getByPlaceholder('E-Mail Address').fill(USERNAME)
    await page.getByPlaceholder('Password').fill(PASSWORD)
    await page.locator('input[value="Login"]').click()
    await expect(page.getByText('Edit your account information')).toBeVisible()

    // screen shot to confirm login is successful 

})


test('Login as valid user and add address',async ({ page }) => {

    
    await page.locator("i[class='fas fa-2x mb-1 fa-address-card']").click()

    await page.locator("//a[text()='New Address']").click()

    await expect(page.locator('//h1[text()="Add Address"]')).toBeVisible()


    const address = {
        firstName:'antony',
        lastName:'raj',
        address1:'4-3-5',
        city:'Hyderabad',
        pincode:'1234',
        country:'India',
        state: '1486',

    }

    await page.locator('#input-firstname').fill(address.firstName)
    await page.locator('#input-lastname').fill(address.lastName)
    await page.locator('#input-address-1').fill(address.address1)
    await page.locator('#input-city').fill(address.city)
    await page.locator('#input-country').selectOption({label:address.country})
    await page.locator('#input-zone').selectOption(address.state)

    let buidID = '167'
    await page.screenshot({ path: `screenshots/${buidID}/addressDetails.png`});

    await page.locator('input[value="Continue"]').click()

})


test('search for a product and verify product details',async({page})=>{


    const productInfo ={

        name: 'Nikon D300',
        productCode: 'Product 4'

    }

    await page.locator('(//input[@aria-label="Search For Products"])[1]').fill(productInfo.name)

    await page.locator("//button[text()='Search']").click()

    await page.locator("(//h4/a[text()='Nikon D300'])[1]").click()
    await expect(page.locator(`//span[text()='Product Code:']/following-sibling::span[text()='${productInfo.productCode}']`)).toBeVisible()

    await page.locator("(//button[text()='Add to Cart'])[2]").click()



    // cy.get('ul li:first',{timeout:120000})

})