import { test, expect } from "@playwright/test"

test.describe.parallel("API Testing", () => {
    const baseURL = ""

    test("GET", async ({request}) => {
        const response = await request.get("https://reqres.in/api/users/1")
        const responseBody = JSON.parse(await response.text())
        
        expect(response.status()).toBe(200)

        expect(responseBody.data.id).toBe(1)
        expect(responseBody.data.first_name).toBe("George")
    })
})