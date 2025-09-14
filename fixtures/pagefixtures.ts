import { test as baseTest } from "@playwright/test";
import LoginPage from "../pages/loginpage";
import InterestCalculatorPage from "../pages/calcapppage";


type TestPages = {
    loginpage: LoginPage;
    calculatorpage: InterestCalculatorPage;
};

export const testPages = baseTest.extend<TestPages>({
    loginpage: async({page}, use)=>{
        await use(new LoginPage(page));
    },
    calculatorpage: async({page}, use)=>{
        await use(new InterestCalculatorPage(page));
    }
});


export const test = testPages;
export const expect = test.expect;
export const describe = test.describe;