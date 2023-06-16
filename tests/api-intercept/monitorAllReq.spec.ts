import { test } from "@playwright/test";

test('log all requests in a page', async({page})=>{

page.on('request', request => console.log('>>', request.method(), request.url()));
page.on('response', response => console.log('<<', response.status(), response.url()));

await page.goto('https://automationexercise.com/');

})