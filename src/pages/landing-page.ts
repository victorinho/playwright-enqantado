import { type Locator, type Page } from '@playwright/test';

export class LandingPage {
    readonly elementsLocator: Locator;

    constructor(page: Page) {
        this.elementsLocator = page.locator('div').filter({ hasText: /^Elements$/ }).nth(1);
    }

    async selectElementsPage() {
        await this.elementsLocator.click();
    }

}