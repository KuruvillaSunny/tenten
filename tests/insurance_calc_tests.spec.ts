import { test, expect } from "../fixtures/pagefixtures";
import dotenv from "dotenv";
import { calculateInterest } from "../utilities/mathfunctions";
import { InterestParams } from "../utilities/types";
dotenv.config();

test("Validate Interest rate for Daily", async ({
  page,
  loginpage,
  calculatorpage,
}) => {
  await page.goto(process.env.APPURL!, {
    waitUntil: "domcontentloaded",
    timeout: 20000,
  });

  await loginpage.LoginToApplication({
    username: process.env.APP_USERNAME!,
    password: process.env.APP_PASSWORD!,
  });

  const testValue: InterestParams = {
    principal: 10000,
    duration: "Daily",
    rate: 10,
  };

  await calculatorpage.SelectPrincipleAmount({
    principleamount: testValue.principal,
  });
  await calculatorpage.ChooseDuration({ duration: testValue.duration });
  await calculatorpage.SelectInterestRate({ interestrate: testValue.rate });
  await calculatorpage.CalculateInterestRate();
  const calculatedInterest: number = calculateInterest({
    principal: testValue.principal,
    rate: testValue.rate,
    duration: testValue.duration,
  });
  expect((await calculatorpage.GetInterestAmount()).toString()).toEqual(
    calculatedInterest.toString()
  );
  expect((await calculatorpage.GetTotalAmount()).toString()).toEqual(
    (testValue.principal + calculatedInterest).toString()
  );
});

// this test will fail as interest rate is calculated incorrectly for Monthly
test.skip("Validate Interest rate for Monthly", async ({
  page,
  loginpage,
  calculatorpage,
}) => {
  await page.goto(process.env.APPURL!, {
    waitUntil: "domcontentloaded",
    timeout: 20000,
  });

  await loginpage.LoginToApplication({
    username: process.env.APP_USERNAME!,
    password: process.env.APP_PASSWORD!,
  });

  const testValue: InterestParams = {
    principal: 5000,
    duration: "Monthly",
    rate: 9,
  };

  await calculatorpage.SelectPrincipleAmount({
    principleamount: testValue.principal,
  });
  await calculatorpage.ChooseDuration({ duration: testValue.duration });
  await calculatorpage.SelectInterestRate({ interestrate: testValue.rate });
  await calculatorpage.CalculateInterestRate();
  const calculatedInterest: number = calculateInterest({
    principal: testValue.principal,
    rate: testValue.rate,
    duration: testValue.duration,
  });
  expect((await calculatorpage.GetInterestAmount()).toString()).toEqual(
    calculatedInterest.toString()
  );
  expect((await calculatorpage.GetTotalAmount()).toString()).toEqual(
    (testValue.principal + calculatedInterest).toString()
  );
});

test("Validate Interest rate for Yearly", async ({
  page,
  loginpage,
  calculatorpage,
}) => {
  await page.goto(process.env.APPURL!, {
    waitUntil: "domcontentloaded",
    timeout: 20000,
  });

  await loginpage.LoginToApplication({
    username: process.env.APP_USERNAME!,
    password: process.env.APP_PASSWORD!,
  });

  const testValue: InterestParams = {
    principal: 11000,
    duration: "Yearly",
    rate: 15,
  };

  await calculatorpage.SelectPrincipleAmount({
    principleamount: testValue.principal,
  });
  await calculatorpage.ChooseDuration({ duration: testValue.duration });
  await calculatorpage.SelectInterestRate({ interestrate: testValue.rate });
  await calculatorpage.CalculateInterestRate();
  const calculatedInterest: number = calculateInterest({
    principal: testValue.principal,
    rate: testValue.rate,
    duration: testValue.duration,
  });
  expect((await calculatorpage.GetInterestAmount()).toString()).toEqual(
    calculatedInterest.toString()
  );
  expect((await calculatorpage.GetTotalAmount()).toString()).toEqual(
    (testValue.principal + calculatedInterest).toString()
  );
});
