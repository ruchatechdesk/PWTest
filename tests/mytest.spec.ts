import { test, expect } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

test.beforeEach('Test', async({page})=>{

    await page.goto('https://www.google.com/')
    await argosScreenshot(page,"TestPage")
    // await page.goto(process.env.URL1)

})


test('My test @smoke', async({page})=>{

    // await page.getByRole('')
    console.log('Test passed')
    console.log('Running from GIT CI')
})