import { Locator, Page } from "@playwright/test";
import { MainPage } from "./mainPage";

export class SignInPage extends MainPage {
    readonly page: Page;
    readonly buttonSignIn: Locator;
    readonly fieldUserName: Locator;
    readonly fieldPassword: Locator;
    readonly buttonLogin: Locator;
    readonly panelFailed: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.buttonSignIn = page.locator('text="Sign In"');
        this.fieldUserName = page.locator('[name="username"]');
        this.fieldPassword = page.locator('[name="password"]');
        this.buttonLogin = page.locator('text="Login"');
        this.panelFailed = page.locator('[class="panel failed"]');
    }
}
