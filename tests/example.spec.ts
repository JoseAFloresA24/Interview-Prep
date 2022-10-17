import { test, expect } from "@playwright/test"
import { ExamplePage } from "../../Interview-Prep/page_objects/ExamplePage"


test("Basic Test", async ({ page }) => {
    let examplePage: ExamplePage
    examplePage = new ExamplePage(page)
    await examplePage.visit()
    await examplePage.wait(10000)
    await examplePage.checktitle()
})

test.describe("Test Suite Example", () => {
    let examplePage: ExamplePage

    test.beforeEach(async ({page}) => {
        examplePage = new ExamplePage(page)
        await examplePage.visit()
    })

    test("Example Test Case", async ({ page }) => {
        await page.screenshot({ path: "Screenshots/Fullscreenshot.png", fullPage: true})
    })

    test("Example Test Case 2", async ({ page }) => {
        await examplePage.h1title.screenshot({ path: "Screenshots/elementscreenshot.png"})
    })
})