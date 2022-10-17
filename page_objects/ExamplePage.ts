import { expect, Locator, Page } from "@playwright/test"
import { AbstractPage } from "./AbstractPage"

export class ExamplePage extends AbstractPage{
    
    //Define Selector
    readonly page: Page
    readonly h1title: Locator

    //Intializa Selectors
    constructor(page: Page){
        super(page)
        this.page = page,
        this.h1title = page.locator("h1")
    }
    
    //Define Pages methods
    async visit(){
        await this.page.goto("https://example.com") 
    }

    async checktitle(){
        await expect(this.h1title).toHaveText("Example Domain")
    }
}