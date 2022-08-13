# Simple Jira

Demo: [jira.iknow.fun](https://jira.iknow.fun)

[文档和笔记](./docs/readme.md)

## Available Scripts

**`yarn start`**

Frontend: `http://localhost:3000`

Msw Mock Backend: `http://localhost:3000/api`

**`yarn test`**

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

**`yarn build`**

Builds the app for production to the `build` folder.

**`yarn server`**

json-server

Json Server Mock Backend: `http://localhost:3003`

https://github.com/typicode/json-server#getting-started

**`yarn seed`**

Seeding `./__json_server_mock__/db.json`

## Commit Message

https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional

```
[
  'build',
  'chore',
  'ci',
  'docs',
  'feat',
  'fix',
  'perf',
  'refactor',
  'revert',
  'style',
  'test'
];
```

```
echo "foo: some message" # fails
echo "fix: some message" # passes
```

https://nitayneeman.com/posts/understanding-semantic-commit-messages-using-git-and-angular/#motivation

### 👷 build

The `build` type (formerly known as `chore`) is used to identify **development** changes related to the build system (involving scripts, configurations or tools) and package dependencies.

### 💚 ci

The `ci` type is used to identify **development** changes related to the continuous integration and deployment system - involving scripts, configurations or tools.

### 📝 docs

The `docs` type is used to identify documentation changes related to the project - whether intended externally for the end users (in case of a library) or internally for the developers.

### ✨ feat

The `feat` type is used to identify **production** changes related to new backward-compatible abilities or functionality.

### 🐛 fix

The `fix` type is used to identify **production** changes related to backward-compatible bug fixes.

### ⚡️ perf

The `perf` type is used to identify **production** changes related to backward-compatible performance improvements.

### ♻️ refactor

The `refactor` type is used to identify **development** changes related to modifying the codebase, which neither adds a feature nor fixes a bug - such as removing redundant code, simplifying the code, renaming variables, etc.

### 🎨 style

The `style` type is used to identify **development** changes related to styling the codebase, regardless of the meaning - such as indentations, semi-colons, quotes, trailing commas and so on.

### ✅ test

The `test` type is used to identify **development** changes related to tests - such as refactoring existing tests or adding new tests.

## UI

https://flowbite.com/

https://flowbite-react.com/

## jira-dev-tool Configuration

[jira-dev-tool](/docs/readme.md#jira-dev-tool-mock-后端的配置)
