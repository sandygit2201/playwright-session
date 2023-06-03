import { expect, test } from "@playwright/test";


test('accept alert - type1', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog',async (alert)=>{
        await alert.accept()
    })

    await page.locator("//button[text()='Click for JS Alert']").click()
    expect(page.getByText('You successfully clicked an alert')).toBeVisible()

    await page.screenshot({ path: 'screenshots/alerts/js-result.png' })

})

test('accept alert - type2-dismiss', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog',async (alert)=>{
        const textDisplayed = alert.message()
        expect(textDisplayed).toEqual('I am a JS Confirm')
        await alert.dismiss()

    })
    await page.locator("//button[text()='Click for JS Confirm']").click()
    expect(page.getByText('You clicked: Cancel')).toBeVisible()

    await page.screenshot({ path: 'screenshots/alerts/js-result-2-.png' })

})

test('accept alert - type2-accept', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog',async (alert)=>{
        await alert.accept()

    })
    await page.locator("//button[text()='Click for JS Confirm']").click()
    expect(page.getByText('You clicked: Cancel')).toBeVisible()

    await page.screenshot({ path: 'screenshots/alerts/js-result-2-.png' })

})


test.only('accept alert - type3-accept', async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog',async (alert)=>{
        await alert.accept('Hello world')
    })
    await page.locator("//button[text()='Click for JS Prompt']").click()
    expect(page.getByText('You entered: Hello world')).toBeVisible()

    await page.screenshot({ path: 'screenshots/alerts/js-result-3-.png' })

})