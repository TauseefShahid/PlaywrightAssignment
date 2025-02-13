import { Page, expect } from '@playwright/test';

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addToCart(productName: string) {
    await this.page.click(`text=${productName}`);
    await this.page.click('button:has-text("Add to Cart")');
  }

  async navigateToCart() {
    await this.page.click('.shopping_cart_link');
  }
}