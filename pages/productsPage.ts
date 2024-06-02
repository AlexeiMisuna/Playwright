import { Locator, Page } from "@playwright/test"

export class ProductsPage {
    readonly page: Page
    readonly fishProduct: Locator
    readonly dogProduct: Locator
    readonly nonExistentProduct: Locator

    constructor(page:Page) {
        this.page = page
        this.fishProduct = page.locator('[href="/products/FI-SW-01"]').first()
        this.dogProduct = page.locator('[href="/products/K9-BD-01"]').first()
        this.nonExistentProduct = page.locator('text="Beer"')
    }
}