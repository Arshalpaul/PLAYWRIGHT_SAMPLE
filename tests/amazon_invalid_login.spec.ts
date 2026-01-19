import { test, expect } from '@playwright/test';

test('Record_test', async ({ page }) => {

  await test.step('Navigate to amazon website', async () => {
    await page.goto('https://www.amazon.com/');
  });
  await test.step('Click on sign in link', async () => {
    await page.getByRole('link', { name: 'Hello, sign in Account & Lists' }).click();
  });
  await test.step('Enter email', async () => {
    await page.getByRole('textbox', { name: 'Enter mobile number or email' }).fill('jvcjksDBfkbse');
  });
  await test.step('Click continue', async () => {
    await page.getByRole('button', { name: 'Continue' }).click();
  });
  await test.step('Check for invalid email alert', async () => {
    await expect(page.locator('#invalid-email-alert')).toContainText('Invalid email address');
  });
});