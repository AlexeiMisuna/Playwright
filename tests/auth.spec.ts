import { test, expect, Page } from '@playwright/test';
import { SignInPage } from '../pages/signInPage';
import { SignOutPage } from '../pages/signOutPage';


test.describe('Authorization tests', () => {
    let signInPage: SignInPage
    let signOutPage: SignOutPage

    test('Authorization with valid data', async ({ page }) => {
      signInPage = new SignInPage(page)
      signOutPage = new SignOutPage(page)
      await signInPage.goToMainPage()
      await signInPage.buttonSignIn.click()
      await signInPage.fieldUserName.clear()
      await signInPage.fieldUserName.fill('misuna')
      await signInPage.fieldPassword.clear()
      await signInPage.fieldPassword.fill('12345')
      await signInPage.buttonLogin.click()
      await expect(signOutPage.buttonSignOut).toBeVisible()
  })
  test('Authorization with invalid data', async ({ page }) => {
    signInPage = new SignInPage(page)
    signOutPage = new SignOutPage(page)
    await signInPage.goToMainPage()
    await signInPage.buttonSignIn.click()
    await signInPage.fieldUserName.clear()
    await signInPage.fieldUserName.fill('abra')
    await signInPage.fieldPassword.clear()
    await signInPage.fieldPassword.fill('kadabra')
    await signInPage.buttonLogin.click()
    await expect(signInPage.panelFailed).toBeVisible()
  })
})