import { test, expect } from "@playwright/test";


test.beforeEach('Test', async({page})=>{

    // await page.goto('https://www.google.com/')
    await page.goto(process.env.URL1)

})


test('My test @smoke', async({page})=>{

    // await page.getByRole('')
    console.log('Test passed')
    console.log('Running from GIT CI')
})