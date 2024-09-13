# LintingFormattingPractice

## Project Overview

This Angular project is configured with ESLint for linting and Prettier for code formatting. A pre-commit hook managed by Husky ensures that linting and formatting checks are performed prior to each commit. The objective is to maintain consistent code quality and formatting throughout the project.

## Setup Instructions

### 1. Clone the Repository

Use the following command to clone the repository::

```bash
git clone git@github.com:Jhay-Great/linting-formatting-practice.git
cd linting-formatting-practice
```

#### 2. Install Dependencies

Install the necessary dependencies using npm

```bash
    npm install
```

## Configure ESLint

```bash
    ng add @angular-eslint/schematics
```

This creates the .eslintrc.json file. It also updates the angular.json and package.json files.
Added custom rules:

-   semi and quotes.
-   @typescript-eslint/no-explicit-any: Ensures explicit usage of any type is avoided.
-   max-lines: enforces a maximum of 35 lines in a file, skipping whitespaces.

## Fix Linting Errors and Warnings

Run ESlint

```bash
    ng lint
```

Initial results:

> 13 errors
> 4 warnings related to the use of single quotes in app.component.ts.
> Fixes Applied
> Created an interface to replace the usage of any type.
> Updated code to adhere to single quote conventions.
> Run ESLint again to confirm all issues are resolved:

```bash
    ng lint
```

## Integrate Prettier

Install Prettier and Related Packages

```bash
    npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```

Creates .prettierrc file
Adds settings that ensures:

-   Use of 4 spaces for indentation.
-   Adherence to single quotes for strings.
-   Semicolons at the end of statements.

## Configure Prettier to Work with ESLint

Add "plugin:prettier/recommended" to the extends array.

## npm Scripts for Linting and Formatting

```bash
    `npm run start`: Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
    `npm run ng-lint`: Executes linting checks for the Angular project.
    `npm run prettier`: Formats all code files in the project directory according to Prettier's rules.

    `npm prettier check-prettier-linter-conflict`: Checks all code files in the project directory for formatting issues without making any changes.

    `npm run lint:fix && npm run format`: Executes linting fixes followed by code formatting
```

## Set Up a Pre-Commit Hook Using Husky

Install Husky and Lint-Staged: this creates husky directory with pre-commit file and other files

```bash
    npm install --save-dev husky lint-staged
```

Add the following content to the .husky/pre-commit file:

```bash
    npx lint-staged
```

## NPM scripts

### Prettier

`npm run prettier` to run prettier command for only the files in my app component

<!-- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->

# LintingFormattingPractice - ESLint and Prettier

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.6.

## Project Description

This Angular project has been configured to use ESLint for linting and Prettier for code formatting. The setup includes a pre-commit hook using Husky to ensure that linting and formatting checks are performed before each commit. The goal is to maintain high code quality and consistency throughout the project.

## Setup Instructions

### 1. Clone the Repository

Clone the repository using the following command:

```bash
git clone https://github.com/RhodyArthur/angular-code-quality-enforcer.git
cd angular-code-quality-enforcer
```

#### 2. Install Dependencies

Install the necessary dependencies using npm

```bash
    npm install
```

## Configure ESLint

```bash
    ng add @angular-eslint/schematics
```

This creates the .eslintrc.json file. It also updates the angular.json and package.json files.
Added custom rules:

-   semi and quotes.
-   @typescript-eslint/no-explicit-any: Ensures explicit usage of any type is avoided.
-   max-lines: enforces a maximum of 35 lines in a file, skipping whitespaces.

## Fix Linting Errors and Warnings

Run ESlint

```bash
    ng lint
```

Initial results:

> 5 errors
> 4 warnings related to the use of single quotes in app.component.ts.
> Fixes Applied
> Created an interface to replace the usage of any type.
> Updated code to adhere to single quote conventions.
> Run ESLint again to confirm all issues are resolved:

```bash
    ng lint
```

## Integrate Prettier

Install Prettier and Related Packages

```bash
    npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```

Creates .prettierrc file
Adds settings that ensures:

-   Use of 4 spaces for indentation.
-   Adherence to single quotes for strings.
-   Semicolons at the end of statements.

## Configure Prettier to Work with ESLint

Add "plugin:prettier/recommended" to the extends array

## npm Scripts for Linting and Formatting

```bash
    `npm start`: Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
    `ng lint`: Executes linting checks for the Angular project.
    `prettier --write .`: Formats all code files in the project directory according to Prettier's rules.
    `prettier --check .`: Checks all code files in the project directory for formatting issues without making any changes.
    `npm run lint:fix && npm run format`: Executes linting fixes followed by code formatting
```

## Set Up a Pre-Commit Hook Using Husky

Install Husky and Lint-Staged: this creates husky directory with pre-commit file and other files

```bash
    npm install --save-dev husky lint-staged
```

Add the following content to the .husky/pre-commit file:

```bash
    npx lint-staged
```
