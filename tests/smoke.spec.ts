import { test, expect } from '@playwright/test'
import { LoginPage } from '../page-objects/LoginPage'

test.describe('Smoke Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.loginAs('standard_user', 'secret_sauce')
  })
  test('Test standard_user able to successfully login with valid credentials and access the inventory page', async ({ page }) => {
    await expect(page).toHaveURL(/inventory\.html$/)
    await expect(page.getByTestId('title')).toHaveText('Products')
  })
})

test.describe('Smoke Tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto()
    await loginPage.loginAs('locked_out_user', 'secret_sauce')
  })

  test('Test locked_out_user is denied access with appropriate error message displayed', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.expectErrorContaining('Sorry, this user has been locked out.');
  })
})
