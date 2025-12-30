import {test,expect} from '@playwright/test'
import { exec } from 'child_process'

test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/pages/iot-dashboard')

})


// test.describe('test suite form layout page',()=>{

//     test.beforeEach(async({page})=>{

//         await page.getByText('Forms').click()
//         await page.getByText('Form Layout').click()

//     })
    
//     // test('input fields', async({page})=>{

//     //     const usingthegridemailonput = page.locator('nb-card', {hasText:"Using the Grid"}).getByRole('textbox', {name:'Email'})
//     //     await usingthegridemailonput.fill('ce.hardikdave@gmail.com')
//     //     console.log('Entered the name')
//     //     await usingthegridemailonput.clear()
//     //     console.log('Cleared')
//     //     await usingthegridemailonput.pressSequentially('test@test.com')

//     //     // generic assertion 
//     //     const inputval = await  usingthegridemailonput.inputValue()
//     //     expect(inputval).toEqual('test@test.com')
//     // })


    
// })

test('Check the drop down', async({page}, testinfo)=>{
        // test.describe.configure({retries:2})
        if(testinfo.retry)
        {
            // do db clean
        }
        const ddl = page.locator('ngx-header nb-select')
        await ddl.click()
    })