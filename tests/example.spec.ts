import {test, expect} from '@playwright/test';
import {TextBoxPage} from "@/pages/text-box-page";
import {BasePage} from "@/pages/base-page";
import {ElementsPage} from "@/pages/elements-page";

test.beforeEach(async ({page}) => {
    // Runs before each test.
    const basePage = new BasePage(page);
    await basePage.goto();
});

test('test Single Input Field', async ({page}) => {
    const simpleFormPage = new ElementsPage(page);
    const textBoxPage = new TextBoxPage(page);
    await simpleFormPage.clickTextBox();
    await textBoxPage.sendFullName("Victor Delgado");
    await textBoxPage.sendEmail("victor@enqantado.com");
    await textBoxPage.sendCurrentAdress("123");
    await textBoxPage.sendPermanentAdress("123");
});

test('sum test', async ({page}) => {
    const simpleFormPage = new ElementsPage(page);
});