// This file contains static test data used across multiple E2E tests.
// Storing it here prevents duplication and keeps test files clean and consistent.
export const validCheckoutData = {
firstName: "Dor",              // First name used in checkout form
    lastName: "Biton",                // Last name used in checkout form
    address: "Megadim 123",         // Street address for shipping
    city: "Ramat Gan",               // City for shipping
    state: "IL",                    // State/region for shipping
    zip: "10001",               // ZIP/postal code
    country: "Israel",       // Country used in dropdown selection
    phone: "1234567890",            // Contact phone number
    email: "dorbit050@example.com",  // Email used for order confirmation
    cardNumber: "4111111111111111", // Test VISA credit card number
    cardName: "Dor Biton",          //Name of owner card
    expiry: "12/28",        // Expiration date for card
    cvv: "123",                 // Test CVV
};
