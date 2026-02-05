import { browser } from 'k6/browser';
import { check } from 'k6';

export const options = {
  scenarios: {
    ui: {
      executor: 'shared-iterations',
      vus: 1,
      iterations: 1,
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
};


export default async function () {
  const page = await browser.newPage();

  try {

    await page.goto('https://demoblaze.com/prod.html?idp_=1#');

    const addBtn = page.locator("//a[normalize-space()='Add to cart']");
      await addBtn.waitFor();
      await addBtn.click();
      await page.waitForTimeout(2000);

    await page.goto('https://demoblaze.com/cart.html');

    const btnPlaceOrder = page.locator("//button[normalize-space()='Place Order']");
      await btnPlaceOrder.waitFor();
    const isVisible = await btnPlaceOrder.isVisible();
      check(isVisible, {
        'Locator ditemukan': (v) => v === true,
      });
      await btnPlaceOrder.click();

    const purchase = page.locator("//button[normalize-space()='Purchase']");
      await purchase.waitFor();

      await page.locator('#name').fill('Jili');
      await page.locator('#country').fill('Indonesia');
      await page.locator('#city').fill('Jakarta');
      await page.locator('#card').fill('123456789');
      await page.locator('#month').fill('3');
      await page.locator('#year').fill('2030');


      await purchase.click();
    
    const ThankYou = page.locator("//div[contains(@class,'showSweetAlert visible')]");
      await ThankYou.waitFor();

    const btnOKthankyou = page.locator("//button[normalize-space()='OK']");
      await btnOKthankyou.waitFor();
      await btnOKthankyou.click();
    
      await page.waitForTimeout(2000);

  } finally {
    await page.close();
  }
}
