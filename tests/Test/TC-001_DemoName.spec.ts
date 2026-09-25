import { test, expect } from '@playwright/test';

test(
  'DemoName',
  {
    annotation: { type: 'QADENCE_TC_ID', description: 'TC-001' },
    tag: ['@QADENCE_TC_ID:TC-001'],
  },
  async ({ page }) => {


    await test.step('#01 - Navigate to https://www.saucedemo.com/', async () => {
      await page.goto('https://www.saucedemo.com/');
    });

    await test.step('#02 - Click on the login credentials element within the login credentials container', async () => {
      await page.locator('[data-test="login-credentials-container"]').locator('[data-test="login-credentials"]').click();
    });

    await test.step('#03 - Click on the main section containing \'LoginAccepted usernames\' text', async () => {
      await page.getByRole("main").filter({ hasText: "LoginAccepted usernames" }).click();
    });

    await test.step('#04 - Click on the login password element within the login credentials container', async () => {
      await page.locator('[data-test="login-credentials-container"]').locator('[data-test="login-password"]').click();
    });

    await test.step('#05 - Click on the login password element within the login credentials container', async () => {
      await page.locator('[data-test="login-credentials-container"]').locator('[data-test="login-password"]').click();
    });

    await test.step('#06 - Click on the Username textbox', async () => {
      await page.getByRole("textbox", { name: "Username", exact: true }).click();
    });

    await test.step('#07 - Click on the main section containing \'LoginAccepted usernames\' text', async () => {
      await page.getByRole("main").filter({ hasText: "LoginAccepted usernames" }).click();
    });

  }
);

