import { Page, expect } from "@playwright/test";    
import { NavigationPage } from "./navigationPage";  
import { FormLayoutPage } from "./formLayoutPage";
import { DatePickerPage } from "./datePicker";

export class PageManager{

    private readonly page:Page
    private readonly navigationobj : NavigationPage
    private readonly formlayoutobj: FormLayoutPage
    private readonly datepickerobj: DatePickerPage

    constructor(page : Page){
        this.page = page
        this.navigationobj = new NavigationPage(this.page)
        this.datepickerobj = new DatePickerPage(this.page)
        this.formlayoutobj = new FormLayoutPage(this.page)
    }

    navigateTo(){
        return this.navigationobj
    }

    onFormlayoutpage(){
        return this.datepickerobj
    }

    onDatepickerpage(){
        return this.datepickerobj
    }
}