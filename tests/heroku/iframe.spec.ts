import { test,expect} from "@playwright/test";

test('iframe',async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/iframe')
    const frame1 = page.frameLocator('#mce_0_ifr').locator('html')

    await frame1.click()

    await frame1.type("Hello world")
   
})


test('iframes on page',async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/nested_frames')

    const topframe = await page.frameLocator('[name="frame-top"]')
    const lettFrame = topframe.frameLocator('[name="frame-left"]').locator('body')

    await expect(lettFrame).toHaveText('LEFT')


})