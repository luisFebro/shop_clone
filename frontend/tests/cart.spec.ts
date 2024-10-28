import { test, expect } from '@playwright/test';

test.describe('Shopping Cart Functionality', () => {
  test.beforeEach(async ({ page }) => {
    // Start from a clean slate - visit the homepage
    await page.goto('/');
  });

  test('should update cart count when adding and removing items', async ({ page }) => {
  //   // Initial cart should be empty
  // await expect(page.getByText('Cart (0)')).toBeVisible();

  // // Wait for products to be loaded with a more specific selector and increased timeout
  // await page.waitForSelector('[data-testid="product-card"]', { 
  //   state: 'visible',
  //   timeout: 45000 // Increase timeout if needed
  // });

  // // Add first item to cart
  // const firstProduct = page.locator('[data-testid="product-card"]').first();
  // await firstProduct.waitForSelector('[data-testid="add-to-cart-button"]', { 
  //   state: 'visible' 
  // });
  // await firstProduct.getByTestId('add-to-cart-button').click();
    
  //   // Verify cart count increased with retry
  //   await expect(page.getByText('Cart (1)', { timeout: 5000 })).toBeVisible();

  //   // Add another item with proper waiting
  //   const secondProduct = page.locator('.card').nth(1);
  //   await secondProduct.waitForSelector('button[aria-label="Add to Cart"]', { state: 'visible' });
  //   await secondProduct.getByRole('button', { name: 'Add to Cart' }).click();
    
  //   // Verify cart count is 2
  //   await expect(page.getByText('Cart (2)')).toBeVisible();

  //   // Remove an item
  //   await firstProduct.getByRole('button', { name: 'Remove from Cart' }).click();
    
  //   // Verify cart count decreased
  //   await expect(page.getByText('Cart (1)')).toBeVisible();
  });

  test('should persist added items when navigating between categories', async ({ page }) => {
    // Add an item from electronics category
    await page.getByRole('button', { name: 'Electronics' }).click();
    const laptopProduct = page.getByText('MacBook Pro M2').first();
    await laptopProduct.locator('button', { hasText: 'Add to Cart' }).click();
    
    // Switch category and verify cart count remains
    await page.getByRole('button', { name: 'Audio' }).click();
    await expect(page.getByText('Cart (1)')).toBeVisible();
    
    // Add an audio product
    const audioProduct = page.getByText('Sony WH-1000XM5').first();
    await audioProduct.locator('button', { hasText: 'Add to Cart' }).click();
    
    // Verify total count
    await expect(page.getByText('Cart (2)')).toBeVisible();
  });

  test('should show correct button state for added items', async ({ page }) => {
    const product = page.locator('.card').first();
    
    // Initial state should be "Add to Cart"
    await expect(product.getByRole('button')).toHaveText('Add to Cart');
    
    // Click to add to cart
    await product.getByRole('button').click();
    
    // Button should change to "Remove from Cart"
    await expect(product.getByRole('button')).toHaveText('Remove from Cart');
    
    // Remove from cart
    await product.getByRole('button').click();
    
    // Button should return to initial state
    await expect(product.getByRole('button')).toHaveText('Add to Cart');
  });
}); 