import {Page} from '@playwright/test';
import { HelperBase } from './helperBase';

export class FormLayoutPage extends HelperBase {

    // class name always starts with Capital letter e.g., FormLayoutPage
    // parameterized demo
    // private readonly page: Page;

    //  readonly page: Page
    // constructor(page: Page){
    //     this.page = page
    // }

    constructor(page: Page){
        super(page)
        // this.page = page;
    }

    // parameterized demo
    async submitusingselectoption(email: string, password: string, optionText: string){
        const usingthegridform = this.page.locator('nb-card', {hasText: "Using the grid"})
        await usingthegridform.getByRole('textbox', {name:"Email"}).fill(email)
        await usingthegridform.getByRole('textbox', {name:"Password"}).fill(password)
        await usingthegridform.getByRole('radio', {name:optionText}).check({force:true})
        await usingthegridform.getByRole('button').click()
    }


    async submitinlineform(name:string, email:string, rememberMe:boolean){
        const inlineform = this.page.locator('nb-card', {hasText: "Inline form"})
        await inlineform.getByRole('textbox', {name:"Jane Doe"}).fill(name)
        await inlineform.getByRole('textbox', {name:"Email"}).fill(email)
        if(rememberMe)
            await inlineform.getByRole('checkbox').check({force:true})
        await inlineform.getByRole('button').click()

    }
}