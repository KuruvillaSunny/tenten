import { expect, Locator, Page } from "@playwright/test";
import { Duration, InterestRate } from "../utilities/types";



export default class InterestCalculatorPage {
  private page: Page;
  readonly principleAmountSlector: Locator;
  readonly selectInterestRateMain: Locator;
  readonly acceptTermsCheckBox: Locator;
  readonly calculateButton: Locator;
  readonly interestAmount: Locator;
  readonly totalAmount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.principleAmountSlector = this.page.getByRole("slider", {
      name: "Principal Amount:",
    });
    this.selectInterestRateMain = page.getByRole("button", {
      name: "Select Interest Rate",
    });
    this.acceptTermsCheckBox = page.getByRole("checkbox", {
      name: "Please accept this mandatory",
    });
    this.calculateButton = page.getByRole("button", { name: "Calculate" });
    this.interestAmount = page.getByRole("heading", {
      name: "Interest Amount:",
    });
    this.totalAmount = page.getByRole("heading", {
      name: "Total Amount with Interest:",
    });
  }

  public async SelectPrincipleAmount({
    principleamount,
  }: {
    principleamount: number;
  }): Promise<void> {
    await this.principleAmountSlector.waitFor({
      state: "visible",
      timeout: 15000,
    });
    await this.principleAmountSlector.fill(`${principleamount}`);
  }

  public async ChooseDuration({
    duration,
  }: {
    duration: Duration;
  }): Promise<void> {
    const durationSelector = this.page.getByRole("link", {
      name: `${duration}`,
    });
    await durationSelector.waitFor({ state: "visible", timeout: 15000 });
    await durationSelector.click();
  }

  public async SelectInterestRate({
    interestrate,
  }: {
    interestrate: InterestRate;
  }): Promise<void> {
    await this.selectInterestRateMain.waitFor({
      state: "visible",
      timeout: 15000,
    });
    await this.selectInterestRateMain.click();
    const selectvalue = this.page.getByRole("checkbox", {
      name: `${interestrate}%`,
    });
    await selectvalue.waitFor({ state: "visible", timeout: 15000 });
    await selectvalue.check();
  }

  public async CalculateInterestRate(): Promise<void> {
    await this.acceptTermsCheckBox.waitFor({
      state: "visible",
      timeout: 15000,
    });
    await this.acceptTermsCheckBox.check();
    await this.calculateButton.click();
    await this.page.waitForLoadState("domcontentloaded");
  }

  public async GetInterestAmount(): Promise<number> {
    await this.interestAmount.waitFor({ state: "visible", timeout: 15000 });
    const amountText = await this.interestAmount.innerText();

    // Extract numeric portion using regex
    const match = amountText.match(/[\d,.]+/);
    if (!match) {
      throw new Error(
        `Unable to extract interest amount from text: "${amountText}"`
      );
    }

    // Convert to number and return
    return Number(match[0]);
  }


  public async GetTotalAmount(): Promise<number> {
    await this.totalAmount.waitFor({ state: "visible", timeout: 15000 });
    const amountText = await this.totalAmount.innerText();

    // Extract numeric portion using regex
    const match = amountText.match(/[\d,.]+/);
    if (!match) {
      throw new Error(
        `Unable to extract interest amount from text: "${amountText}"`
      );
    }

    // Convert to number and return
    return Number(match[0]);
  }
}
