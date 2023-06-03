import * as fs from 'fs';

import { test} from "@playwright/test";

test('iframe',async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/iframe')
    const frame1 = page.frameLocator('#mce_0_ifr').locator('html')

    await frame1.click()

    const data = fs.readFileSync('../../testData/news.txt','utf-8')

    await frame1.type(data)

})