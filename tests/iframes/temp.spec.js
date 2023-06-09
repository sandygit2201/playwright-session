
import { test } from "@playwright/test";

test('handle iframes',async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/iframe')

    const title = (await page.locator('//h3').textContent()).valueOf()

    const iframe =  page.frameLocator('#mce_0_ifr').locator('html')

    await iframe.locator('#tinymce').click()
    await iframe.locator('#tinymce').type(title)

    await page.screenshot({path:'screenshots/iframes/1.png'})

    await page.pause()

})