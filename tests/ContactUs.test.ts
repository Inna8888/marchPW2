import { randomUUID } from 'crypto';
import { test, expect } from '@playwright/test';

test('user can submit contact us form', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/');
  await page.getByRole ('link', {name: 'Contact Us'}).first().click();
  await page.getByPlaceholder('You Full Name').fill('test');
  await page.getByPlaceholder('Your Email Address').fill(`test.${ randomUUID }test@gmail.com`);
  await page.getByPlaceholder('Please Describe Your Message').fill('test hfjhsdkfd gfhfjh hghjghjhgjghjg');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByPlaceholder('Please Describe Your message')).toBeEmpty();
});

