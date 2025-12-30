import {test, expect} from '@playwright/test'
import { deserialize } from 'v8'


test.beforeEach(async({page})=>{

    await page.goto('http://localhost:4200/pages/iot-dashboard')
    // await page.getByText('Forms').click()
    //  console.log('Clicked Forms')
    // await page.getByText('Form Layouts').click()

})
// test('test radio button',async({page})=>{

//     const usingradio =  await page.locator('nb-card', {hasText: 'Using the Grid'})
    

// })


test('Tooltip test', async({page})=>{

    await page.getByText('Modal & Overlays').click()
    await page.getByText('Tooltip').click()

    const tooltipcard = await page.locator('nb-card', {hasText: "Tooltip Placements"});
    await tooltipcard.getByRole('button', {name: "Top"}).hover()

    // page.getByRole(''tooltip')
    //     const tooltip = await page.locator('nb-tooltip', text)
})


test('Dialog', async({page})=>{

        
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

    page.on('dialog', dialog => {

        expect(dialog.message()).toEqual('Are you sure you want to delete?')
        dialog.accept()
    })
    await page.getByRole('table').locator('tr', {hasText:'mdo@gmail.com'}).locator('.nb-trash').click()
})