import { Locator, Page } from "@playwright/test";
import { constrainedMemory } from "process";

export class MainPage {
  readonly page: Page;
  readonly buttonBasket: Locator;
  readonly buttonSignIn: Locator;
  readonly buttonSignUp: Locator;
  readonly buttonQuestion: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonBasket = page.locator('[href="/cart/viewCart"]');
    this.buttonSignIn = page.locator('text="Sign In"');
    this.buttonSignUp = page.locator('text="Sign Up"');
    this.buttonQuestion = page.locator('[href="/help.html"]');
  }
  async goToMainPage() {
    await this.page.goto("https://jpetstore.aspectran.com/");
  }
}
