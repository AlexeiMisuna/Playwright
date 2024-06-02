import { Locator, Page } from "@playwright/test";

export class SearchPanel {
    readonly page: Page
    readonly searchPanel: Locator
    readonly searchButton: Locator

    constructor(page:Page) {
        this.page = page
        this.searchPanel = page.locator('[class="input-group-field"]').last()
        this.searchButton = page.locator('[class="button"]').last()
    }
}