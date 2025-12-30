import { Page, expect, test } from "@playwright/test";
// import {test} from '@playwright/test'


test.beforeEach(async({page})=>{
    await page.goto(process.env.URL1)
})


test('',async({page})=>{

    console.log('')
})