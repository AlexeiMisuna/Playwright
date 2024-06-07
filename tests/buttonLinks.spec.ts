import { test, expect, Page } from '@playwright/test';
import { MainPage } from '../pages/mainPage';


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