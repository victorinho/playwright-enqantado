import {test, expect} from '@playwright/test';
import {LandingPage} from "../src/pages/landing-page";
import {BasePage} from "../src/pages/base-page";
import {SimpleFormPage} from "../src/pages/simple-form-page";

test.beforeEach(async ({page}) => {
    // Runs before each test.
    const basePage = new BasePage(page);
    const landingPage = new LandingPage(page);
    await basePage.goto();
    await landingPage.selectSimpleFormDemo();
});

test('test Single Input Field', async ({page}) => {
    const simpleFormPage = new SimpleFormPage(page);
    await simpleFormPage.sendMessageBox('enqantado');
    await simpleFormPage.clickShowMessage();
    await simpleFormPage.checkMessageButton('enqantado');
});

test('sum test', async ({page}) => {
    await page.getByLabel('Enter a').click();
    await page.getByLabel('Enter a').fill('10');
    await page.getByLabel('Enter b').click();
    await page.getByLabel('Enter b').fill('20');
    await page.getByRole('button', {name: 'Get Total'}).click();
    await expect(page.getByText('30')).toBeVisible();
});