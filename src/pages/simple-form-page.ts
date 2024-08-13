import {expect, type Locator, type Page} from '@playwright/test';

export class SimpleFormPage {
    readonly page: Page;
    readonly messageBox: Locator;
    readonly showMessageButton: Locator;
    readonly numberOneBox: Locator;
    readonly numberTwoBox: Locator;
    readonly sumatoryButton: Locator;

    constructor(page: Page) {
        this.messageBox = page.getByPlaceholder('Please enter your Message');
        this.showMessageButton = page.getByRole('button', {name: 'Show Message'});
        this.numberOneBox = page.getByLabel('Enter a');
        this.numberTwoBox = page.getByLabel('Enter b');
        this.sumatoryButton = page.getByRole('button', {name: 'Get Total'});
        this.page = page;
    }

    //Actions
    async sendMessageBox(text: string) {
        await this.messageBox.fill(text);
    }

    async clickShowMessage() {
        await this.showMessageButton.click();
    }

    async numberForSum(numberOne: string, numberTwo: string){
        await this.numberOneBox.fill(numberOne);
        await this.numberOneBox.fill(numberTwo);
    }

    async clickShowSumatory(){
        await this.sumatoryButton.click();
    }


    //Assertions
    async checkMessageButton(text: string) {
        await expect(this.page.locator('#display')).toContainText(text);
    }

}