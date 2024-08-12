import { test, expect } from '@playwright/test';


test('test Single Input Field', async ({ page }) => {
  await page.goto('https://demo.seleniumeasy.com/');
  await page.locator('#treemenu').getByRole('link', { name: 'Input Forms' }).click();
  await page.getByRole('link', { name: 'Simple Form Demo' }).click();
  await page.getByPlaceholder('Please enter your Message').fill('enqantado');
  await page.getByRole('button', { name: 'Show Message' }).click();
  await expect(page.locator('#display')).toContainText('enqantado');
});

test('sum test', async ({ page }) => {
  await page.goto('https://demo.seleniumeasy.com/');
  await page.locator('#treemenu').getByRole('link', { name: 'Input Forms' }).click();
  await page.getByRole('link', { name: 'Simple Form Demo' }).click();
  await page.getByLabel('Enter a').click();
  await page.getByLabel('Enter a').fill('10');
  await page.getByLabel('Enter b').click();
  await page.getByLabel('Enter b').fill('20');
  await page.getByRole('button', { name: 'Get Total' }).click();
  await expect(page.getByText('30')).toBeVisible();
});