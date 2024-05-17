import { Locator, Page } from "@playwright/test";
import { MainPage } from "./mainPage";

export class ButtonsPage  {
    readonly page: Page
    readonly buttonMyOrders: Locator
    readonly buttonMyAccount: Locator
    readonly buttonsSignOut: Locator
    
    constructor(page: Page) {
     
        this.page = page
        this.buttonMyOrders = page.locator('[href="/order/listOrders"]')
        this.buttonMyAccount = page.locator('[href="/account/editAccountForm"]')
        this.buttonsSignOut = page.locator('[href="/account/signoff"]')
    }

}
