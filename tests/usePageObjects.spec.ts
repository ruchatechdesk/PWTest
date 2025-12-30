import {test, expect} from '@playwright/test'
import {NavigationPage} from '../pw-practice-app-master/page-objects/navigationPage'
import {FormLayoutPage} from '../pw-practice-app-master/page-objects/formLayoutPage'
import {PageManager} from '../pw-practice-app-master/page-objects/pageManager'
import { faker } from '@faker-js/faker';


test.beforeEach(async({page})=>{
    await page.goto('http://localhost:4200/pages/iot-dashboard')
    // await page.goto(process.env.)

})

// test('Navigation to form page', async({page})=>{

//     const pm = new PageManager(page)
//     // const navigateTo = new NavigationPage(page)
//     // await pm.navigateTo().formLayoutPage()
//     await pm.navigateTo().datePickerPage()
//     await pm.navigateTo().smartTablePage()
//     await pm.navigateTo().tooltipPage()
// })

test('parameterized tests methods', async({page})=>{

    const randomname = faker.name.fullName()
    const randomemail = `${randomname}${faker.company}@test.com`

    console.log('random name ' +randomname)
    // const navigateto = new NavigationPage(page)
    const onformlayoutpage = new FormLayoutPage(page)

    // await navigateto.formLayoutPage()
    await page.getByTitle('Forms').click()
    await page.getByTitle('Form Layouts').click()
    // await onformlayoutpage.submitusingselectoption('test@test22.com','11testdata', 'Option 2')
    await onformlayoutpage.submitinlineform(randomname, 'john@yahoo.in', false)
    await page.screenshot({path:'screenshots/formsLayoutPage.png'})
})

