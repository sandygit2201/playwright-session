
import { expect, test } from "@playwright/test";

test('nested iframe', async ({page})=>{

await page.goto('https://the-internet.herokuapp.com/nested_frames')

const parentIframe = page.frameLocator('frame[name="frame-top"]').locator('html')

const iframeMiddle = parentIframe.frameLocator('frame[name="frame-middle"]')
                                 .locator('html')

await page.screenshot({path:'screenshots/iframes/netsted.png'})
expect(await iframeMiddle.locator('#content').textContent()).toEqual('MIDDLE')

})