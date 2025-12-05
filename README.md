## ShopHub E2E Test Automation – Playwright ##
This repository contains a complete end-to-end (E2E) automated test suite for the ShopHub e-commerce application, implemented using Playwright, TypeScript, and the Page Object Model (POM) design pattern.
The project was developed as part of the ShopHub QA Automation Test Assignment, covering the full user journey from browsing products to completing a purchase

## Features
# Full E2E Coverage
The test suite includes complete automation for:
* Home page navigation & UI validations
* Products listing: search, filtering, sorting, add to cart
* Product detail: quantity handling and validations
* Shopping cart: update, remove, totals, persistence
* Checkout: full form validation
* Complete purchase flow (Home → Products → Details → Cart → Checkout → Confirmation)

# Page Object Model (POM)
All pages in the application include dedicated POM classes:
BasePage
HomePage
ProductsPage
ProductDetailPage
CartPage
CheckoutPage
ConfirmationPage

# TypeScript + Playwright Best Practices
* Stable selectors using data-testid
* Auto-waiting & proper asynchronous handling
* Reusable helper utilities
* Clean fixture-based test data
* Descriptive assertions
* Fully isolated test cases (clearing localStorage before each test)

## Project Structure
אסא;;tests/ב
├── e2e/
│   ├── home.spec.ts
│   ├── products.spec.ts
│   ├── product-detail.spec.ts
│   ├── cart.spec.ts
│   ├── checkout.spec.ts
│   └── full-flow.spec.ts
│
├── pages/
│   ├── BasePage.ts
│   ├── HomePage.ts
│   ├── ProductsPage.ts
│   ├── ProductDetailPage.ts
│   ├── CartPage.ts
│   ├── CheckoutPage.ts
│   └── ConfirmationPage.ts
│
├── fixtures/
│   └── testData.ts
│
└── helpers/
    └── utils.ts


## Running the Tests
Install dependencies:
npm install

Install Playwright browsers:
npx playwright install

Run in a specific browser
npx playwright test --project=chromium

Run all the tests:
npx playwright test


## Test Scenarios Implemented
Home page:
Page load validation
Hero section visibility
CTA navigation
Header navigation

Products Listing:
Product visibility
Search functionality (valid & no results)
Category filters
Sorting options
Product count validation
Add to cart from listing
Navigation to product detail

Product Detail:
Correct product data
Quantity controls
Add to cart from detail page
Navigation back to listing
Out-of-stock handling

Shopping Cart:
Cart item display
Quantity update
Item removal
Calculation checks (subtotal, tax, total)
Empty cart behavior
Cart persistence after reload
Navigation to checkout

Checkout:
Full field validation
Email/phone/card/CVV/ZIP validation
Successful submission with valid data

Full Purchase Flow:
Home → Products → Detail → Cart → Checkout → Confirmation
Multiple products flow
Cart cleanup after purchase

Technologies Used:
Playwright
TypeScript
Next.js application under test
POM design pattern

## Notes
All tests use stable test IDs (data-testid) provided by the application.
No application code was modified—only test code was written.
Each test case is independent and cleans browser state.
The framework is fully scalable for additional test scenarios or integrations.

## Final Thoughts:
This project demonstrates a complete, maintainable, and scalable E2E automation solution following industry best practices.
The structure is clean and modular, the code is fully typed, and the test suite covers all critical flows of the ShopHub application.

Thanks for the opportunity :)

### Created By: Dor Biton

כדגדגdd
רגככProduct Detail
