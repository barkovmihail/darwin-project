## Launch of the project

```
npm install - install dependencies
npm run start:dev or npm run start:dev:vite - start server + frontend project in dev mode
```

----

## Scripts

- `npm run start` - Run frontend project on webpack dev server
- `npm run start:vite` - Start the frontend project on vite
- `npm run start:dev` - Run frontend project on webpack dev server + backend
- `npm run start:dev:vite` - Run frontend project on vite + backend
- `npm run start:dev:server` - Start the backend server
- `npm run build:prod` - Build in prod mode
- `npm run build:dev` - Build in dev mode (not minified)
- `npm run lint:ts` - Check ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss style files with linter
- `npm run lint:scss:fix` - Fix scss style files with linter
- `npm run test:unit` - Run unit tests with jest
- `npm run test:ui` - Run screenshot tests with loki
- `npm run test:ui:ok` - Confirm new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Generate full report for screenshot tests
- `npm run test:ui:json` - Generate json report for screenshot tests
- `npm run test:ui:html` - Generate HTML report for screenshot tests
- `npm run storybook` - run Storybook
- `npm run storybook:build` - Build storybook build
- `npm run prepare` - precommit hooks
- `npm run generate:slice` - Script to generate FSD slices

----

## Project architecture

The project was written in accordance with the Feature sliced design methodology

Documentation link - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project uses the i18next library to work with translations.
Translation files are stored in public/locales.

For comfortable work, we recommend installing the plugin for webstorm/vscode

i18next documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Tests

The project uses 4 types of tests:
1) Regular unit tests for jest - `npm run test:unit`
2) Tests for components with React testing library -`npm run test:unit`
3) Screenshot testing with loki `npm run test:ui`
4) e2e testing with Cypress `npm run test:e2e`

More about tests - [testing documentation](/docs/tests.md)

----

## Linting

The project uses eslint to check typescript code and stylelint to check files with styles.

Also for strict control of the main architectural principles
own eslint plugin *eslint-plugin-darwin-path* is used,
which contains 3 rules
1) path-checker - prohibits the use of absolute imports within one module
2) layer-imports - checks the correct use of layers in terms of FSD
   (e.g. widgets cannot be used in features and entities)
3) public-api-imports - allows import from other modules only from public api. Has auto fix

##### Run linters
- `npm run lint:ts` - Check ts files with linter
- `npm run lint:ts:fix` - Fix ts files with linter
- `npm run lint:scss` - Check scss style files with linter
- `npm run lint:scss:fix` - Fix scss style files with linter

----
## Storybook

The project describes story cases for each component.
Server requests are mocked using storybook-addon-mock.

A file with stories is created next to the component with the extension .stories.tsx

You can start the storybook with the command:
- `npm run storybook`

More about [Storybook](/docs/storybook.md)

----

## Project configuration

For development, the project contains 2 configs:
1. Webpack - ./config/build
2. vite - vite.config.ts

Both collectors are adapted to the main features of the application.

All configuration is stored in /config
- /config/babel-babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring\simplification of writing code\report generation, etc.

----

## CI pipeline and pre commit hooks

The github actions configuration is located in /.github/workflows.
In ci, all types of tests, project and storybook assembly, linting are run.

In precommit hooks, we check the project with linters, the config is in /.h

----

### Working with data

Interaction with data is carried out using the redux toolkit.
Whenever possible, reusable entities should be normalized using the EntityAdapter

Server requests are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous connection of reducers (so as not to pull them into a common bundle), use
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

### Working with feature-flags

Allow feature flags only with toggleFeatures helper

an object with options is passed to it

{
   name: feature flag name,
   on: a function that will work after enabling the feature
   of: function that will work after the feature is turned off
}

To automatically remove a feature, use the remove-feature.ts script,
which takes 2 arguments
1. The name of the feature flag to be removed
2. Status (on\off)

----

## Entities

- [Article](/src/entities/Article)
- [Comment](/src/entities/Comment)
- [Counter](/src/entities/Counter)
- [Country](/src/entities/Country)
- [Currency](/src/entities/Currency)
- [Notification](/src/entities/Notification)
- [Profile](/src/entities/Profile)
- [Rating](/src/entities/Rating)
- [User](/src/entities/User)

## Features

- [addCommentForm](/src/features/addCommentForm)
- [articleRating](/src/features/articleRating)
- [articleRecommendationsList](/src/features/articleRecommendationsList)
- [AuthByUsername](/src/features/AuthByUsername)
- [avatarDropdown](/src/features/avatarDropdown)
- [editableProfileCard](/src/features/editableProfileCard)
- [LangSwitcher](/src/features/LangSwitcher)
- [notificationButton](/src/features/notificationButton)
- [profileRating](/src/features/profileRating)
- [ThemeSwitcher](/src/features/ThemeSwitcher)