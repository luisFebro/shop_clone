import { test, expect } from '@playwright/test';

// Function to wait for a resource
async function waitForResource(page, name, options = {}) {
    console.log(`Waiting for resource ${name}`);
    
    //Set a default timeout to 45 seconds
    const timeout = options.timeout || 45000; 

    //Create a new Promise to handle asynchronous operations and timeout logic.
    return new Promise((resolve, reject) => {
        let foundResource;

        // Set a timeout to control how long we should try finding the resource
        const timeoutId = setTimeout(() => {
            if (!foundResource) {
                clearInterval(intervalId);
                reject(new Error(`Timed out waiting for resource ${name}`));
            }
        }, timeout);

        // Check for the resource at regular intervals (100 ms)
        const intervalId = setInterval(async () => {
            foundResource = await page.evaluate(() => 
                performance.getEntriesByType('resource')
                    .find((item) => item.name.endsWith(name))
            );

            if (foundResource) {
                clearInterval(intervalId);
                clearTimeout(timeoutId);
                resolve(foundResource);
            }
        }, 100);
    });
}

// Write a test to use our new function: 
test('wait for resource test', async ({ page }) => {
    await page.goto('http://127.0.0.1:5173/');

    try {
        const resource = await waitForResource(page, 'main.js');
        console.log('Resource found:', resource);
        // Add an example assertion for the lulz
        expect(resource).toBeTruthy(); 
    } catch (error) {
        console.error(error);
        throw error;
    }
});