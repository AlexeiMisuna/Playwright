import { Locator, Page } from "@playwright/test"

export class Orders {
    readonly page: Page
    readonly myOrders: Locator
    readonly ordersList: Locator

    constructor(page:Page) {
        this.page = page
        this.myOrders = page.locator('[href="/order/listOrders"]')
        this.ordersList = page.locator('text="You have placed no orders."')
    }
}