import { test, expect } from '@playwright/test';

test.describe('Homework 1', () => {
  test('Has menu content', async ({ page }) => {
    await page.goto('https://jpetstore.aspectran.com/');
    const buttonBasket = page.locator('[href="/cart/viewCart"]')
    await expect (buttonBasket).toBeVisible()
    await buttonBasket.click()
    const buttonSignIn = page.locator('text="Sign In"')
    await expect (buttonSignIn).toBeVisible()
    await buttonSignIn.click()
    const buttonSignUp = page.locator('text="Sign Up"')
    await expect (buttonSignUp).toBeVisible()
    await buttonSignUp.click()
     const buttonQuestion = page.locator('[href="/help.html"]')
     await expect (buttonQuestion).toBeVisible()
     await buttonQuestion.click()
    });
    test('Has searching panel', async ({ page }) => {
      await page.goto('https://jpetstore.aspectran.com/');
      const searchPanel = page.getByPlaceholder("Product Search")
      await expect (searchPanel).toBeVisible()
      await searchPanel.click()
      });
      test('Has quick links', async ({ page }) => {
        await page.goto('https://jpetstore.aspectran.com/');
        const linkFish = page.locator('[href="/categories/FISH"]').first()
        await expect (linkFish).toBeVisible()
        await linkFish.click()
        const linkDogs = page.locator('[href="/categories/DOGS"]').nth(0)
        await expect (linkDogs).toBeVisible()
        await linkDogs.click()
        const linkReptiles = page.locator('text="Reptiles"').first()
        await expect (linkReptiles).toBeVisible()
        await linkReptiles.click()
        const linkCats = page.locator('[href="/categories/CATS"]').nth(0)
        await expect (linkCats).toBeVisible()
        await linkCats.click()
        const linkBirds = page.locator('text="Birds"').first()
        await expect (linkBirds).toBeVisible()
        await linkBirds.click()
        });
  })
      test.describe('Homework 2', () => {
        test.beforeEach('Sign in', async ({ page }) => {
          await page.goto('https://jpetstore.aspectran.com/');
          const buttonSignIn = page.locator('text="Sign In"')
          await expect (buttonSignIn).toBeVisible()
          await buttonSignIn.click()
          const fieldUserName = page.locator('[name="username"]')
          const fieldPassword = page.locator('[name="password"]')
          await fieldUserName.fill('misuna')
          await fieldPassword.fill('12345')
          const buttonLogin = page.locator('text="Login"')
          await expect (buttonLogin).toBeVisible()
          await buttonLogin.click()
          });
          test.afterEach('Sign out', async ({ page }) => {
          const buttonSignOut = page.locator('text="Sign Out"')
          const buttonSignIn = page.locator('text="Sign In"')
          await expect (buttonSignOut).toBeVisible()
          await buttonSignOut.click()
          await expect (buttonSignIn).toBeVisible()
          });
          test('Has button and css-style', async ({ page }) => {
                  const buttonMyOrders = page.locator('[href="/order/listOrders"]')
                  const buttonMyAccount = page.locator('[href="/account/editAccountForm"]')
                  const buttonSignOut = page.locator('[href="/account/signoff"]')
                  await expect (buttonMyOrders).toBeVisible()
                  await expect (buttonMyOrders).toHaveCSS('color', 'rgb(234, 172, 0)')
                  await expect (buttonMyAccount).toBeVisible()
                  await expect (buttonMyAccount).toHaveCSS('color', 'rgb(234, 172, 0)')
                  await expect (buttonSignOut).toBeVisible()
                  await expect (buttonSignOut).toHaveCSS('color', 'rgb(234, 172, 0)')
          })
      })