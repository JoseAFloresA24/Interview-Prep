import { test, expect } from "@playwright/test"



test.describe("Test Suite Example", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://example.com")
    })
    test("Example Test Case", async ({ page }) => {
        await page.screenshot({ path: "Fullscreenshot.png", fullPage: true})
    })
    test("Example Test Case 2", async ({ page }) => {
        const element = await page.locator("h1")
        await element.screenshot({ path: "elementscreenshot.png"})
    })
})