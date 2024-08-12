import { type Locator, type Page } from '@playwright/test';

export class LandingPage {
    readonly inputForm: Locator;
    readonly simpleFormDemo: Locator;

    constructor(page: Page) {
        this.inputForm = page.locator('#treemenu').getByRole('link', { name: 'Input Forms' });
        this.simpleFormDemo = page.getByRole('link', { name: 'Simple Form Demo' });
    }

    async selectSimpleFormDemo() {
        await this.inputForm.click();
        await this.simpleFormDemo.click();
    }

}