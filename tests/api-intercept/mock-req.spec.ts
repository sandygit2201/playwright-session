import { expect, test } from "@playwright/test";


test('verify for get req',async({page})=>{
    await page.route('**/api/users/2',(route)=>{

        route.fulfill({
            status:205,
            contentType:"application/json",
            path: 'mockedResponse.json',
            headers:{"accept":"application/playwright"}
        })

    })
    await page.goto('https://reqres.in/')

    const getUserResponsePromise = page.waitForResponse('**/api/users/2')
    await page.locator("[data-id='users-single'] a").click()
    const getResponse = await getUserResponsePromise

    console.log((await getResponse.body()).toString())
    console.log(getResponse.status())
    console.log(getResponse.headers())
    
})