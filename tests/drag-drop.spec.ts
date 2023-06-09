import { expect, test } from "@playwright/test";

test('drag and drop ', async ({ page }) => {

    await page.goto('https://jqueryui.com/droppable/')

    expect(await page.locator("//h1[text()='Droppable']")).toBeVisible

    await page.pause()
    const frame1 = page.frameLocator('[class=demo-frame]')

    let sourceEle = await frame1.locator('#draggable')
    let distEle = await frame1.locator('#droppable')

    let srcBox = await sourceEle.boundingBox()
    let distBox = await distEle.boundingBox()

    let sourceXpos = srcBox?.x + srcBox?.width / 2
    let sourceYPos = srcBox?.y + srcBox?.height / 2

    let distXpos = distBox?.x + distBox?.width / 2
    let distYpos = distBox.y + distBox?.height / 2


    await page.mouse.move(sourceXpos, sourceYPos)
    await page.mouse.down()
    await page.mouse.move(distXpos, distYpos)
    await page.mouse.up()

    await page.pause()

    expect(frame1.locator("//div/p[text()='Dropped!']")).toBeVisible()

    await page.pause()


})