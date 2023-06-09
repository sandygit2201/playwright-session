import { expect, test } from "@playwright/test";

test('darg and rop',async({page})=>{


    await page.goto('https://jqueryui.com/droppable/')

   expect( page.locator('//h1[text()="Droppable"]')).toBeVisible()

   let iframe = page.frameLocator('[class="demo-frame"]')
    const source =  iframe.locator('#draggable')
    const dest =  iframe.locator('#droppable')



    const sourceEle =await source.boundingBox()
    const destEle = await dest.boundingBox()


    let startX = sourceEle.x + sourceEle.width/2
    let startY = sourceEle.y + sourceEle?.height/2

    let distX = destEle?.x + destEle?.width/2
    let distY = destEle?.y + destEle?.height/2

    console.log(`Source::${startX},${startY}`)
    console.log(`Dest::${distX},${distY}`)

    await page.pause()

    await page.mouse.move(startX,startY).then(async()=>{
        await page.mouse.down()
    }).then(async ()=>{
        await page.mouse.move(distX,distY)
    }).then(async()=>{
        await page.mouse.down()
    })
    // await page.mouse.down()
    // await page.mouse.move(distX,distY)
    // await page.mouse.down()
     await page.pause()


})