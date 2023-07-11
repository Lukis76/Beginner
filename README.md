# Bin2Dec

**Tier:** 1-Beginner

Binary is the number system all digital computers are based on.
Therefore it's important for developers to understand binary, or base 2,
mathematics. The purpose of Bin2Dec is to provide practice and
understanding of how binary calculations.

Bin2Dec allows the user to enter strings of up to 8 binary digits, 0's
and 1's, in any sequence and then displays its decimal equivalent.

This challenge requires that the developer implementing it follow these
constraints:

- Arrays may not be used to contain the binary digits entered by the user
- Determining the decimal equivalent of a particular binary digit in the
  sequence must be calculated using a single mathematical function, for
  example the natural logarithm. It's up to you to figure out which function
  to use.

## User Stories

- [ ] User can enter up to 8 binary digits in one input field
- [ ] User must be notified if anything other than a 0 or 1 was entered
- [ ] User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered

## Bonus features

- [ ] User can enter a variable number of binary digits

## Useful links and resources

[Binary number system](https://en.wikipedia.org/wiki/Binary_number)

```
pnpm create astro@latest -- --template basics
```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```bash
.
├── astro.config.mjs
├── dist
│   ├── _astro
│   │   └── index.74b8e572.css
│   ├── favicon.svg
│   └── index.html
├── package.json
├── pnpm-lock.yaml
├── public
│   └── favicon.svg
├── README.md
├── src
│   ├── components
│   │   └── Card.astro
│   ├── env.d.ts
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   └── index.astro
│   └── utils
│       ├── defaultMsg.ts
│       ├── getElementById.ts
│       ├── parserBeginner.ts
│       └── validatorInput.ts
├── tailwind.config.cjs
└── tsconfig.json
```

## 🧞 Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:3000`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?
