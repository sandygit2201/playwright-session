import { expect, test } from "@playwright/test"

test('alert1',async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog',async (alert)=>{
        await alert.accept()
    })

    await page.locator("//button[text()='Click for JS Alert']").click()


})

test('alert2',async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog',async (alert)=>{
        await alert.dismiss()
    })

    await page.locator("//button[text()='Click for JS Confirm']").click()

    await expect(page.locator('#result')).toHaveText('You clicked: Cancel')

})


test.only('alert3',async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog',async (alert)=>{
        const textOnAlert = alert.message()
        console.log(textOnAlert)
        await alert.accept('Hello world')
      
    })

    await page.locator("//button[text()='Click for JS Prompt']").click()

    await expect(page.locator('#result')).toHaveText('You entered: Hello world')

})