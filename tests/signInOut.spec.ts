import { test, expect, Page } from "@playwright/test";
import { SignInPage } from "../pages/signInPage";
import { SignOutPage } from "../pages/signOutPage";
import { ButtonsPage } from "../pages/buttonsPage";

test.describe("Homework 2", () => {
  let signInPage: SignInPage;
  let signOutPage: SignOutPage;
  let buttonsPage: ButtonsPage;

  test.beforeEach("Sign in", async ({ page }) => {
    signInPage = new SignInPage(page);
    signOutPage = new SignOutPage(page);
    buttonsPage = new ButtonsPage(page);
    await signInPage.goToMainPage();
    await signInPage.buttonSignIn.click();
    await signInPage.fieldUserName.clear();
    await signInPage.fieldUserName.fill("misuna");
    await signInPage.fieldPassword.clear();
    await signInPage.fieldPassword.fill("12345");
    await signInPage.buttonLogin.click();
  });

  test.afterEach("Sign out", async ({ page }) => {
    await signOutPage.buttonSignOut.click();
  });

  test("Has button and css-style", async ({ page }) => {
    await expect(buttonsPage.buttonMyOrders).toBeVisible();
    await expect(buttonsPage.buttonMyOrders).toHaveCSS(
      "color",
      "rgb(234, 172, 0)"
    );
    await expect(buttonsPage.buttonMyAccount).toBeVisible();
    await expect(buttonsPage.buttonMyAccount).toHaveCSS(
      "color",
      "rgb(234, 172, 0)"
    );
    await expect(buttonsPage.buttonsSignOut).toBeVisible();
    await expect(buttonsPage.buttonsSignOut).toHaveCSS(
      "color",
      "rgb(234, 172, 0)"
    );
  });
});
