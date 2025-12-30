import {Locator, LocatorScreenshotOptions, Page} from '@playwright/test'
import { HelperBase } from './helperBase'

export class NavigationPage extends HelperBase{

    // Class name always starts with capital letter

    readonly page: Page
    readonly formlayoutmenuitem: Locator
    readonly datapickerMenuitem: Locator
    readonly smartMenuitem: Locator
    readonly tooltipMenuitem: Locator

    // type of parameter declaration in typescript 
    constructor(page: Page){
        super(page)
        // this.page = page
         // this.page is relates to  readonly page: Page
        this.formlayoutmenuitem = page.getByText('Form Layouts')
        this.datapickerMenuitem = page.getByText('DatePicker')
        this.smartMenuitem = page.getByText('Smart Table')
        this.tooltipMenuitem = page.getByText('tooltip')
    }

    async formLayoutPage(){
        // await this.page.getByText('Forms').click()
        await this.selectGroupMenuItem('Forms')
        // await this.page.waitForTimeout(2000)
        // await this.page.getByText('Form Layouts').click()
        await this.formlayoutmenuitem.click()
        await this.waitforNumberofseconds(2)
    }

    async datePickerPage(){

        // await this.page.getByText('Forms').click()
        await this.selectGroupMenuItem('Forms')
        await this.page.waitForTimeout(2000)
        // await this.page.getByText('DatePicker').click()
        await this.datapickerMenuitem.click()
    }

    
    async smartTablePage(){
        await this.selectGroupMenuItem('Tables & Data')
        await this.page.waitForTimeout(2000)
        // await this.page.getByText('Tables & Data').click()
        // await this.page.getByText('Smart Table').click()
        await this.smartMenuitem.click()
    }

    async tooltipPage(){
        // await this.page.getByText('Modal & Overlays').click()
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.page.waitForTimeout(2000)
        // await this.page.getByText('tooltip').click()
        await this.tooltipMenuitem.click()
        
    }

    private async selectGroupMenuItem(groupitemTitle: string){
        const groupMenuitem = this.page.getByTitle(groupitemTitle)
        const expandedstate = await groupMenuitem.getAttribute('aria-expanded')
        if(expandedstate == 'false')
                await groupMenuitem.click()
    }
}