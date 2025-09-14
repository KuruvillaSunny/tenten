# tenten

## Overview

tenten is an automated testing project using Playwright for end-to-end testing of web applications. It includes custom utilities, fixtures, and test suites for insurance calculator workflows and login functionality.

## Features

- Automated browser testing with Playwright
- Custom page objects for modular test design
- Utility functions for calculations and type definitions
- Fixtures for test data management
- HTML report generation for test results

## Folder Structure

- `api/` - API-related code (if any)
- `data/` - Test data files
- `fixtures/` - Test fixtures (e.g., `pagefixtures.ts`)
- `my-report/` - Generated test reports (e.g., `index.html`)
- `pages/` - Page object models (`calcapppage.ts`, `loginpage.ts`)
- `test-results/` - Playwright test result outputs
- `tests/` - Test specifications (`insurance_calc_tests.spec.ts`)
- `utilities/` - Utility functions and type definitions (`mathfunctions.ts`, `types.ts`)

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm

### Installation

1. Clone the repository:
	```powershell
	git clone https://github.com/KuruvillaSunny/tenten.git
	cd tenten
	```
2. Install dependencies:
	```powershell
	npm install
	```

### Running Tests

To run all Playwright tests:
```powershell
npx playwright test
```

To view the HTML report after running tests:
```powershell
npx playwright show-report
```

## Configuration

- Test configuration is managed in `playwright.config.ts`.
- Add or modify test specs in the `tests/` folder.
- Page objects and utilities can be extended in the `pages/` and `utilities/` folders.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.