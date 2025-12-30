import {test, expect} from '@playwright/test'
// import {Page} from '@playwright/page'

// run before every single test 
test.beforeEach(async({page})=>
{
    await page.goto("http://localhost:4200/pages/iot-dashboard");
    console.log('From before each')
    await page.getByText('Forms').click();
    console.log('Clicked Forms')
    await page.getByText('Form Layouts').click();
    console.log('Clicked Form layout')
})


test.skip('Locator syntax rules', async({page})=>{
    
    // by tag name
    page.locator('input');

    //by id 
    page.locator('#inputEmail');

    //by class  
    page.locator('.shape-rectangle');

    //by attribute
    page.locator('[placeholder="Email"]');

    //by Class value
    page.locator('[class=""]');

    // by various selectors 
    page.locator('input[placeholder="Email"]')
    page.locator('LOCATOR1LOCATOR2') // with no space with LOCATOR1LOCATOR2

    // by xpath
    page.locator('')

    //by partial text
    page.locator(':text("Using")')

    // by exact text match
    page.locator(':text-is("Using the Grid")')
})



// test.describe('New use case',async({page})=>{

//     await page.locator('nb-card nb-radio : text-is("Option 1)').click();
//     await page.locator('nb-card').locator('nb-radio').locator('text-is("Option 1")').click();

// })


// test('new case', async({page})=>{

//     const basicForm = page.locator('nb-card').filter({hasText: "Basic form"}) 

//     // await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: "Email"}).fill('ce.hardikrdave@gmail.com')
//     // await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: "password"}).fill('test')
//     // await page.locator('nb-card').filter({hasText: "Basic form"}).getByRole('textbox', {name: "button"}).click()

//     await basicForm.getByRole('textbox', {name: "Email"}).fill('ce.hardikrdave@gmail.com')
//     await basicForm.getByRole('textbox', {name: "password"}).fill('test')
//     await basicForm.getByRole('textbox', {name: "button"}).click()

//     await expect(basicForm.getByRole('textbox', {name: "Email"})).toHaveValue('ce.hardikrdave@gmail.com')

// })


// test('extracting values',async({page})=>{

// const basicForm = page.locator('nb-card').filter({hasText: "Basic form"}) 

// })


test('check the assertion', async({page})=>{

    // General assertion
    const value = 5
    expect(value).toEqual(5)

    const basicForm = page.locator('nb-card').filter({hasText: "Basic form"}).locator('button') 
    const text = await basicForm.textContent()
    expect(text).toEqual("Submit")

    // locators assertion 

    await expect(basicForm).toHaveText('Submit')


    //soft assertion

    // when test continues execution when assertion is failed

    await expect.soft(basicForm).toHaveText('Submit5')
    await basicForm.click()
})
// 0

// test case template boiler plate
//  MIMP Syntax PArt 1
// test('',()=> {

// })
// //  MIMP Syntax PArt 2
//  test('',async ({page})=> {
        // await page.goto('')
// // })

// test.describe('Test suite1',()=>{


//     // test.beforeEach(async ({page})=>{
//     // await page.getByText('Charts').click();    
//     // })

//         test('Navigate to datepicker page',async ({page})=>{
//         await page.getByText('Datepicker').click()
//     })
    
//     test('The first test case',async ({page}) => {
//         await page.getByText('Form Layouts').click();
//     })



// })

// test.describe.skip('suite1', ()=>{

//     test.beforeEach(async(page)=>{
//     await page.goto("https://testautomationpractice.blogspot.com/");
// })

// test('the first test', async ({page}) => {
//     // await page.goto("https://testautomationpractice.blogspot.com/");
//     // await page.getByText('Name').click;
//     // await page.getByText('phone').click;
//     console.log('TEst')
    
//     // https://www.google.in
//     // https://testautomationpractice.blogspot.com/
// })


// test('the second test', async ({page}) => {
//     // await page.goto("https://testautomationpractice.blogspot.com/");
//     await page.getByText('Sunday').click;
//     // await page.getByText('phone').click;
    
//     // https://www.google.in
//     // https://testautomationpractice.blogspot.com/
// })




// test.describe.only('suite2', ()=>{

//     test.beforeEach(async(page)=>{
//     await page.goto("http://localhost:4200/");
// })

// test('the first test', async ({page}) => {
//     // await page.goto("https://testautomationpractice.blogspot.com/");
//     await page.getByText('Name').click;
//     await page.getByText('phone').click;
    
//     // https://www.google.in
//     // https://testautomationpractice.blogspot.com/
// })


// test('the second test', async ({page}) => {
//     // await page.goto("https://testautomationpractice.blogspot.com/");
//     await page.getByText('Sunday').click;
//     // await page.getByText('phone').click;
    
//     // https://www.google.in
//     // https://testautomationpractice.blogspot.com/
// })




