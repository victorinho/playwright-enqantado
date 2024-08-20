import {test, expect} from '@playwright/test';
import {LandingPage} from "../src/pages/landing-page";
import {BasePage} from "../src/pages/base-page";
import {ElementsPage} from "../src/pages/elements-page";

test.beforeEach(async ({page}) => {
    // Runs before each test.
    const basePage = new BasePage(page);
    const landingPage = new LandingPage(page);
    await basePage.goto();
    await landingPage.selectElementsPage()
});

test('test Single Input Field', async ({page}) => {
    const simpleFormPage = new ElementsPage(page);
    await simpleFormPage.clickTextBox();
});

test('sum test', async ({page}) => {
    const simpleFormPage = new ElementsPage(page);
    /*await simpleFormPage.numberForSum('10','20')
    await simpleFormPage.clickShowSumatory()

    await page.getByLabel('Enter a').click();
    await page.getByLabel('Enter a').fill('10');
    await page.getByLabel('Enter b').click();
    await page.getByLabel('Enter b').fill('20');
    await page.getByRole('button', {name: 'Get Total'}).click();*/
    await expect(page.getByText('30')).toBeVisible();
});