import { type Locator, type Page } from '@playwright/test';

export class TextBoxPage {
    readonly page: Page;
    readonly fullNameLocator: Locator;
    readonly emailLocator: Locator;
    readonly currentAdress: Locator;
    readonly permanentAdress: Locator;
    readonly buttonLocator: Locator;

    constructor(page: Page) {
        this.fullNameLocator = page.getByPlaceholder('Full Name');
        this.emailLocator = page.getByPlaceholder('name@example.com');
        this.currentAdress = page.getByPlaceholder('Current Address');
        this.permanentAdress = page.locator('#permanentAddress');
        this.buttonLocator = page.getByRole('button', { name: 'Submit' });
    }

    /*
    await page.getByPlaceholder('Full Name').click();
  await page.getByPlaceholder('Full Name').fill('hola');
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').fill('email');
  await page.getByPlaceholder('Current Address').click();
  await page.getByPlaceholder('Current Address').fill('adress');
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').fill('permanent');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByPlaceholder('name@example.com').click();
  await page.getByPlaceholder('name@example.com').press('Alt+@');
  await page.getByPlaceholder('name@example.com').fill('email@g.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('Name:hola').click();
  await page.getByText('Email:email@g.com').click();
  await page.getByText('Current Address :adress').click();
  await page.getByText('Permananet Address :permanent').click();
    * */

    async sendFullName(text : string) {
        await this.fullNameLocator.fill(text);
    }
    async sendEmail(text : string) {
        await this.emailLocator.fill(text);
    }
    async sendCurrentAdress(text : string) {
        await this.currentAdress.fill(text);
    }
    async sendPermanentAdress(text : string) {
        await this.permanentAdress.fill(text);
    }
    async clickSubmit() {
        await this.buttonLocator.click();
    }

}