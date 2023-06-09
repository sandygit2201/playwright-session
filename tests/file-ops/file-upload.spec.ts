import { chromium, expect, test } from "@playwright/test"

test('alert1',async ()=>{

    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()

    const fileToUpload = 'screenshots/alerts/js-result-2.png'

    await page.goto('https://the-internet.herokuapp.com/upload')

    await page.locator('#file-upload').setInputFiles(fileToUpload)

    await page.locator('#file-submit').click()

    expect (page.getByText('File Uploaded!')).toBeVisible()

    await page.screenshot({path:'screenshots/uploads/1.png'})

    await page.pause()

})