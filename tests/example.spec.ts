import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { Sign } from 'crypto';
import { SignInPage } from '../pages/signInPage';
import { SignOutPage } from '../pages/signOutPage';
import { ButtonsPage } from '../pages/buttonsPage';



test.describe('Homework 1', () => {
  let mainPage : MainPage

  test.beforeEach('Sign in', async ({ page }) => {
    mainPage = new MainPage(page)
    await mainPage.goToMainPage()
  })


  test('Has menu content', async ({ page }) => {
    await expect (mainPage.buttonBasket).toBeVisible()
    await mainPage.buttonBasket.click()
    await expect (mainPage.buttonSignIn).toBeVisible()
    await mainPage.buttonSignIn.click()
    await expect (mainPage.buttonSignUp).toBeVisible()
    await mainPage.buttonSignUp.click()
     await expect (mainPage.buttonQuestion).toBeVisible()
     await mainPage.buttonQuestion.click()
    });

    test('Has searching panel', async ({ page }) => {
      const searchPanel = page.getByPlaceholder("Product Search")
      await expect (searchPanel).toBeVisible()
      await searchPanel.click()
      });
   

    test('Has quick links', async ({ page }) => {
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
      let signInPage: SignInPage
      let signOutPage: SignOutPage
      let buttonsPage: ButtonsPage
      

        test.beforeEach('Sign in', async ({ page }) => {
          signInPage = new SignInPage(page)
          signOutPage = new SignOutPage(page) 
          buttonsPage = new ButtonsPage(page)
          await signInPage.goToMainPage()
          await signInPage.buttonSignIn.click()
          await signInPage.fieldUserName.clear()
          await signInPage.fieldUserName.fill('misuna')
          await signInPage.fieldPassword.clear()
          await signInPage.fieldPassword.fill('12345')
          await signInPage.buttonLogin.click()
          });

          
          test.afterEach('Sign out', async ({ page }) => {
            
            await signOutPage.buttonSignOut.click()

          });


        test('Has button and css-style', async ({ page }) => {
          
          await expect (buttonsPage.buttonMyOrders).toBeVisible()
          await expect (buttonsPage.buttonMyOrders).toHaveCSS('color', 'rgb(234, 172, 0)')
          await expect (buttonsPage.buttonMyAccount).toBeVisible()
          await expect (buttonsPage.buttonMyAccount).toHaveCSS('color', 'rgb(234, 172, 0)')
          await expect (buttonsPage.buttonsSignOut).toBeVisible()
          await expect (buttonsPage.buttonsSignOut).toHaveCSS('color', 'rgb(234, 172, 0)')
          })
      })
   
