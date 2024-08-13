import {expect, type Locator, type Page} from '@playwright/test';

export class SimpleFormPage {
    readonly page: Page;
    readonly messageBox: Locator;
    readonly showMessageButton: Locator;
    readonly messageAssertion: Locator;

    constructor(page: Page) {
        this.messageBox = page.getByPlaceholder('Please enter your Message');
        this.showMessageButton = page.getByRole('button', {name: 'Show Message'});
        this.page = page;
    }

    async sendMessageBox(text: string) {
        await this.messageBox.fill(text);
    }

    async clickShowMessage() {
        await this.showMessageButton.click();
    }

    async checkMessageButton(text: string) {
        await expect(this.page.locator('#display')).toContainText(text);
    }

}