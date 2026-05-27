import { test, expect } from '@playwright/test'

import { CartPage } from '../page-objects/CartPage'
import { CheckoutPage } from '../page-objects/CheckoutPage'
import { InventoryPage } from '../page-objects/InventoryPage'
import { LoginPage } from '../page-objects/LoginPage'

test.describe('Checkout', () => {
  test('Test standard_user able to add products to cart and complete the full checkout process successfully', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventory = new InventoryPage(page)
    const cart = new CartPage(page)
    const checkout = new CheckoutPage(page)

    await loginPage.goto()
    await loginPage.loginAs('standard_user', 'secret_sauce')
    await inventory.navigate()
    await inventory.addItemToCart('Sauce Labs Bike Light')
    await inventory.goToCart()
    await cart.checkout()
    await checkout.fillInformation('Test', 'New', '1011')

    const subtotal = await checkout.readSubtotal()
    const tax = await checkout.readTax()
    const total = await checkout.readTotal()
    const expectedTotal = parseFloat((subtotal + tax).toFixed(2))
    expect(total).toEqual(expectedTotal)
    expect(total).toBeCloseTo(expectedTotal, 2)

    await checkout.finish()
    await checkout.expectOrderComplete()
  })
})
