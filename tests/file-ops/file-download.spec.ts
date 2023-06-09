import { chromium, expect, test } from "@playwright/test"

test('alert1',async ()=>{

    const browser = await chromium.launch({headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://the-internet.herokuapp.com/download')

    const [download] = await Promise.all([
         page.waitForEvent('download'),
         page.locator("//a[text()='mindtek.jpg']").click()

    ])

    const fileName = 'downloads/'+ download.suggestedFilename();
    // const filePath =await  download.path()
    // console.log(filePath)
    console.log('fileName::'+fileName)
    await download.saveAs(fileName)

})