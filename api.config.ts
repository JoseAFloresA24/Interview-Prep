import { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
    timeout: 60000,
    retries: 0,
    testDir: "tests/api",
    reporter: [
        ['list'],
        ['html'],
        ['json', { outputFile:'playwright-report/test-results.json' }]
    ],
    use: {
        headless: true,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        video: "off",
        screenshot: "off",
    },
    projects: [
        {
            name: "Chromium",
            use: { browserName: "chromium" },

        },
        {
            name: "Firefox",
            use: { browserName: "firefox" },

        },
        {
            name: "Webkit",
            use: { browserName: "webkit" },

        },
    ],
}

export default config