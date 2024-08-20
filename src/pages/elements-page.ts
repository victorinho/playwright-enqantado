import {expect, type Locator, type Page} from '@playwright/test';

export class ElementsPage {
    readonly page: Page;
    readonly textBoxLocator: Locator;
    readonly checkBoxLocator: Locator;
    readonly radioButtonLocator: Locator;
    readonly webTablesLocator: Locator;
    readonly buttonsLocator: Locator;
    readonly linksLocator: Locator;
    readonly brokenLinksLocator: Locator;
    readonly uploadAndDownloadLocator: Locator;
    readonly dynamicPropertiesLocator: Locator;

    constructor(page: Page) {
        this.textBoxLocator = page.locator('li').filter({hasText: 'Text Box'});
        this.checkBoxLocator = page.locator('li').filter({hasText: 'Check Box'});
        this.radioButtonLocator = page.locator('li').filter({hasText: 'Radio Button'});
        this.webTablesLocator = page.locator('li').filter({hasText: 'Web Tables'});
        this.buttonsLocator = page.locator('li').filter({hasText: 'Buttons'});
        this.linksLocator = page.locator('li').filter({hasText: /^Links$/});
        this.brokenLinksLocator = page.locator('li').filter({hasText: 'Broken Links - Images'});
        this.uploadAndDownloadLocator = page.locator('li').filter({hasText: 'Upload and Download'});
        this.dynamicPropertiesLocator = page.locator('li').filter({hasText: 'Dynamic Properties'});
        this.page = page;
    }

    //Actions
    async clickTextBox() {
        await this.textBoxLocator.click();
    }

    //Assertions
    async checkMessageButton(text: string) {
        await expect(this.page.locator('#display')).toContainText(text);
    }

}