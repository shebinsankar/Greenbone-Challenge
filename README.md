# Greenbone-Challenge

Test suite for the Sauce Labs demo shopping app using Playwright.

## Project setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Install Playwright browser binaries:
   ```bash
   npx playwright install
   ```

## Project structure

- `package.json` - npm scripts and dev dependency versions
- `tsconfig.json` - TypeScript configuration
- `playwright.config.ts` - Playwright test configuration
- `page-objects/` - Page object classes for app screens
  - `CartPage.ts`
  - `CheckoutPage.ts`
  - `InventoryPage.ts`
  - `LoginPage.ts`
- `tests/` - Playwright test files
  - `checkout.spec.ts`
  - `smoke.spec.ts`
- `TestScenarios.md` - test scenario descriptions

## Run tests

- Run the full suite:
  ```bash
  npm test
  ```
- Run tests in headed mode:
  ```bash
  npm run test:headed
  ```
- Run tests with a specific browser project:
  ```bash
  npm test -- --project=chromium
  ```
- Open the latest HTML report:
  ```bash
  npm run report
  ```

## Best practices

- Use stable selectors such as data-test, getByRole attributes rather than CSS classes or indexes.
- Use page-object methods for reusable actions and selectors.
- Document what a method does, along with method definitions
- Avoid explicit sleeps (fixed timeouts) in tests, prefer Playwright's built-in waits
- Follow same casing for method and variable names.
- Don't duplicate tests
- Better isolate each tests so that dependency is remoned and flaky tests can be avoided
- Follow proper tags for tests (Smoke, Sanity, Regression etc.)
- Always update dependencies to latest and use new tool features
- Avoid flaky tests
- Automate based on priority and reusability of tests

## Contributing

- Add each feature or test flow as a dedicated test file under `tests/`.
- Use the page object model in `page-objects/` for screen-specific actions and selectors.
- Try to keep assertions in the test files
- Run `npm test` locally before creating a pull request.
- If you introduce a new browser project, add it to `playwright.config.ts`

## Future plans

- Test details such as username, pwd, urls, stage specific data will be moved to env files
- Create a virtual env for easy portability of project
- Use playwright fixtures for reusability and more functionality
- Improve test coverage with integration tests and then e2e tests
- CI/CD pipeline creation - so that tests run along with dev commits
- Dashboards for more details such as Grafana


