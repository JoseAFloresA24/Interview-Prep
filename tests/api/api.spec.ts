import { test, expect } from "@playwright/test"

test.describe.parallel("API Testing", () => {
    const baseURL = ""

    test("GET", async ({request}) => {
        const response = await request.get("https://reqres.in/api/users/3")
        expect(response.status()).toBe(200)
    })
})