import { Locator, Page } from "@playwright/test";
import { SignInPage } from "./signInPage";

export class SignOutPage {
    readonly page: Page
    readonly buttonSignOut: Locator
    readonly buttonSignIn: Locator

    constructor(page: Page) {
        this.page = page
        this.buttonSignOut = page.locator('text="Sign Out"')
        this.buttonSignIn = page.locator('text="Sign In"')

    }

}