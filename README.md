<!-- markdownlint-disable MD033 -->

# react-calculator

A simple calculator web app built with [GatsbyJS](https://rebassjs.org/) and [React](https://reactjs.org/) and styled using [Rebass](https://rebassjs.org/).

## Libraries and Tools

- ES2018 syntax with [BabelJS](https://babeljs.io/).
- [GatsbyJS](https://rebassjs.org/) powered by [ReactJS](https://reactjs.org/).
- Styled with [Rebass](https://rebassjs.org/), React primitive UI components built with styled-system
  - using [Emotion](https://emotion.sh/docs/introduction) and [Theme UI](https://theme-ui.com/).
- Code formatting with [Prettier](https://prettier.io/).
- Redux style state management with React [hooks](https://reactjs.org/docs/hooks-intro.html) and [context](https://reactjs.org/docs/context.html).

## Philosophy

At the beginning some decisions had to be made on the basic functioning of the calculator (much of it following this guide [here](https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator)).

- The app should have 10 clickable elements containing one number each: `0`-`9`.

- The app should have the 4 basic operations:

  - division: `÷`,
  - multiplication: `×`,
  - addition: `+`,
  - and, subtraction: `-`.

- Additionally, the app should have clickable elements for:

  - entering a decimal: `.`,
  - clearing the calculator: `C`,
  - backspacing the input: `↤`,
  - and, executing the expression: `=`.

- The app should use [formula/expression logic](https://en.wikipedia.org/wiki/Calculator_input_methods):

  - Given an expression (`3 + 5 × 6 - 2 ÷ 4`) it can be evaluated with:
    - Formula/Expression Logic: `3 + (5 * 6) - (2 / 4)` returns `32.5`,
    - or, Immediate Execution Logic: `(((3 + 5) * 6) - 2) / 4` returns `11`.
  - Formula/Expression Logic evaluates the entire expression using precedence while Immediate Execution Logic applies the result of the first operation to the next.

- Pressing an operator key immediately after an expression is evaluated should start a new expression using the result of the previous evaluation.

  - Pressing: <kbd>2</kbd>, <kbd>+</kbd>, <kbd>3</kbd>, <kbd>=</kbd>, <kbd>+</kbd>, <kbd>4</kbd>, <kbd>=</kbd> returns `9` and is equivalent to pressing: <kbd>2</kbd>, <kbd>+</kbd>, <kbd>3</kbd>, <kbd>+</kbd>, <kbd>4</kbd>, <kbd>=</kbd>.

- The app should use the last operator key when consecutive operator keys are pressed.
  - Pressing: <kbd>3</kbd>, <kbd>+</kbd>, <kbd>-</kbd>, <kbd>2</kbd>, <kbd>=</kbd> returns `1` and is equivalent to pressing: <kbd>3</kbd>, <kbd>-</kbd>, <kbd>2</kbd>, <kbd>=</kbd>.

### Additional Features

- The app accepts keyboard input as well as the clickable user interface.

- The app keeps track of the last 5 evaluated expressions. And, displays them along with the current expression being entered. Clicking a previous expression loads the clicked expression into the current input.

## State Management
