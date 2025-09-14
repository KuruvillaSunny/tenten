import { Locator, Page } from "@playwright/test";


export default class LoginPage{
    private page: Page;
    readonly loginButton: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly logintoApplicationButton: Locator;

    constructor(page: Page){
        this.page= page;
        this.loginButton =  page.getByRole('button', { name: 'Login' });
        this.emailField = page.getByRole('textbox', { name: 'Email' });
        this.passwordField = page.getByRole('textbox', { name: 'Password' });
        this.logintoApplicationButton = page.getByRole('button', { name: 'Log in' });

    }

    public async LoginToApplication({username, password}: {username:string, password: string}):Promise<void>{
        await this.loginButton.waitFor({state: "visible", timeout: 15000});
        await this.loginButton.click();
        await this.emailField.waitFor({state: "visible", timeout: 15000});
        await this.emailField.fill(username);
        await this.passwordField.fill(password);
        await this.logintoApplicationButton.click();
        const loginchecker = this.page.getByRole('link', { name: `Hello ${username}!` });
        await loginchecker.waitFor({state: "visible", timeout: 15000});
    }
    
}