import { test } from "@playwright/test";
import * as fs from 'fs';

test('handle iframes',async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/iframe')

    const iframe =  page.frameLocator('#mce_0_ifr').locator('html')

    const data = fs.readFileSync('testData/news.txt','utf-8')

    await iframe.locator('#tinymce').click()
    await iframe.locator('#tinymce').type(data)

    await page.pause()

    await page.screenshot({path:'screenshots/iframes/1.png'})


})