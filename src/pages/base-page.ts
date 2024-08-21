import { type Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async goto() {
        await this.page.goto('https://demoqa.com');
        await this.page.locator('div').filter({ hasText: /^Elements$/ }).nth(1).click();
    }

}