import {test} from '@playwright/test'
import { faker } from '@faker-js/faker'
import {NavigationPage} from '../pw-practice-app-master/page-objects/navigationPage'
import {FormLayoutPage} from '../pw-practice-app-master/page-objects/formLayoutPage'
import {PageManager} from '../pw-practice-app-master/page-objects/pageManager'


test.beforeEach('before', async({page})=>{
    await page.goto('http://localhost:4200/pages/iot-dashboard')
})


test('New Test fixtures', async({page})=>{
        const randomname = faker.name.fullName()
        const randomemail = `${randomname}${faker.company}@test.com`
    
        console.log('random name ' +randomname)
        const onformlayoutpage = new FormLayoutPage(page)
    
        // await navigateto.formLayoutPage()
        await page.getByTitle('Forms').click()
        await page.getByTitle('Form Layouts').click()
        // await onformlayoutpage.submitusingselectoption('test@test22.com','11testdata', 'Option 2')
        await onformlayoutpage.submitinlineform(randomname, 'john@yahoo.in', false)
        await page.screenshot({path:'screenshots/formsLayoutPage.png'})
})