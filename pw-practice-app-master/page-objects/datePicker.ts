import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class DatePickerPage extends HelperBase{

    // private readonly page: Page

    constructor(page:Page)
    {
        super(page)
        // this.page = page
    }
}