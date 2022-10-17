import { test, expect } from "@playwright/test"

test("Basic Test", async ({ page }) => {
    await page.goto("https://example.com")
    const title = await page.locator("h1")
    await expect(title).toHaveText("Example Domain")
})

test.describe("Test Suite Example", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https://example.com")
    })
    test("Example Test Case", async ({ page }) => {
        await page.screenshot({ path: "Screenshots/Fullscreenshot.png", fullPage: true})
    })
    test("Example Test Case 2", async ({ page }) => {
        const element = await page.locator("h1")
        await element.screenshot({ path: "Screenshots/elementscreenshot.png"})
    })
})