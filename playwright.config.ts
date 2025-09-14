import { defineConfig, devices } from '@playwright/test';

export default defineConfig({  
  testDir: "./tests", 
  fullyParallel: false,
  timeout: 15* 60* 1000,  
  forbidOnly: !!process.env.CI,  
  retries: process.env.CI ? 1 : 1, 
  workers: process.env.CI ? 1 : 1,  
  reporter: process.env.CI
    ? [["list"]]
    : [
        ["html", { open: "on-failure", outputFolder: "my-report" }],
        ["list", { outputFolder: "./test-results" }],
      ],
  use: {
    browserName: "chromium",
    headless: false,
    trace: "off",
    actionTimeout: 15 * 1000,    
    launchOptions: {
      slowMo:200
    }
  },
});
