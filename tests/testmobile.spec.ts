import {test, expect} from '@playwright/test'

test.beforeEach('',async({page})=>{
    await page.goto('http://localhost:4200/pages/iot-dashboard')

})

test('Mobile device demo', async({page})=>{

    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()
    const emailinput = page.locator('nb-card', {hasText:"Using the Grid"}).getByRole('textbox', {name:"Email"})
    await emailinput.fill('test@test.com')
    await emailinput.clear()
    await emailinput.fill('test2@test.com')
})