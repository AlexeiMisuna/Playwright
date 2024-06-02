import { test, expect, Page } from '@playwright/test';
import { MainPage } from '../pages/mainPage';
import { Sign } from 'crypto';
import { SignInPage } from '../pages/signInPage';
import { SignOutPage } from '../pages/signOutPage';
import { ButtonsPage } from '../pages/buttonsPage';
import { exec } from 'child_process';
import { SearchPanel } from '../pages/searchPanel';
import { ProductsPage } from '../pages/productsPage';
import { Orders } from '../pages/ordersPage';

test.describe('Search tests', () => {
    let searchPanel: SearchPanel 
    let searchButton: SearchPanel
    let signInPage: SignInPage
    let fishProduct: ProductsPage
    let dogProduct: ProductsPage
    let nonExinonExistentProduct: ProductsPage

    test('Search existing product without authorization', async ({ page }) => {
    searchPanel = new SearchPanel(page)
    searchButton = new SearchPanel(page)
    signInPage = new SignInPage(page)
    fishProduct = new ProductsPage(page)
    dogProduct = new ProductsPage(page)
    await signInPage.goToMainPage()
    await expect (searchPanel.searchPanel).toBeVisible()
    await expect (searchPanel.searchButton).toBeVisible()
    await searchPanel.searchPanel.clear()
    await searchPanel.searchPanel.fill('Male Adult Bulldog')
    await searchButton.searchButton.click()
    await expect (dogProduct.dogProduct).toBeVisible()
    await searchPanel.searchPanel.clear()
    await searchPanel.searchPanel.fill('Large Angelfish')
    await searchButton.searchButton.click()
    await expect (fishProduct.fishProduct).toBeVisible()
  })
test('Search existing product with authorization', async ({ page }) => {
        signInPage = new SignInPage(page)
        searchPanel = new SearchPanel(page)
       searchButton = new SearchPanel(page)
      signInPage = new SignInPage(page)
       fishProduct = new ProductsPage(page)
      dogProduct = new ProductsPage(page)
        await signInPage.goToMainPage()
        await signInPage.buttonSignIn.click()
        await signInPage.fieldUserName.clear()
        await signInPage.fieldUserName.fill('misuna')
        await signInPage.fieldPassword.clear()
        await signInPage.fieldPassword.fill('12345')
        await signInPage.buttonLogin.click()
        await expect (searchPanel.searchPanel).toBeVisible()
        await expect (searchPanel.searchButton).toBeVisible()
        await searchPanel.searchPanel.clear()
        await searchPanel.searchPanel.fill('Male Adult Bulldog')
        await searchButton.searchButton.click()
        await expect (dogProduct.dogProduct).toBeVisible()
        await searchPanel.searchPanel.clear()
        await searchPanel.searchPanel.fill('Large Angelfish')
        await searchButton.searchButton.click()
        await expect (fishProduct.fishProduct).toBeVisible()
})
test('Search non-existent product', async ({ page }) => {
  searchPanel = new SearchPanel(page)
  searchButton = new SearchPanel(page)
  signInPage = new SignInPage(page)
  fishProduct = new ProductsPage(page)
  dogProduct = new ProductsPage(page)
  nonExinonExistentProduct = new ProductsPage(page)
  await signInPage.goToMainPage()
  await expect (searchPanel.searchPanel).toBeVisible()
  await expect (searchPanel.searchButton).toBeVisible()
  await searchPanel.searchPanel.clear()
  await searchPanel.searchPanel.fill('Beer')
  await searchButton.searchButton.click()
  await expect (nonExinonExistentProduct.nonExistentProduct).toBeHidden()

})
})

test.describe('Orders tests', () => {
let signInPage: SignInPage
let myOrders: Orders
let ordersList: Orders

test.only('My orders list', async ({ page }) => {
  signInPage = new SignInPage(page)
  myOrders = new Orders(page)
  ordersList = new Orders(page)
  await signInPage.goToMainPage()
  await signInPage.buttonSignIn.click()
  await signInPage.fieldUserName.clear()
  await signInPage.fieldUserName.fill('misuna')
  await signInPage.fieldPassword.clear()
  await signInPage.fieldPassword.fill('12345')
  await signInPage.buttonLogin.click()
  await expect (myOrders.myOrders).toBeVisible()
  await myOrders.myOrders.click()
  await expect (ordersList.ordersList).toBeVisible()
})
})