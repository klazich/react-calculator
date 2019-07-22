<!-- markdownlint-disable MD033 -->

# react-calculator

A simple calculator web app built with [React](https://reactjs.org/) and styled using [Rebass](https://rebassjs.org/).

## Libraries and Tools

- ES2018 syntax with [BabelJS](https://babeljs.io/)
- [GatsbyJS](https://rebassjs.org/) powered by [ReactJS](https://reactjs.org/)
- Styled with [Rebass](https://rebassjs.org/), React primitive UI components built with styled-system
- [JestJS](https://jestjs.io/) for unit testing
- Code formatting with [Prettier](https://prettier.io/)
- A Redux style of state management

## Philosophy

At the beginning some decisions had to be made on the basic functioning of the
calculator.

- It should have the 4 basic operations:

  - Division <kbd>÷</kbd>
  - Multiplication <kbd>×</kbd>
  - Addition <kbd>+</kbd>
  - Subtraction <kbd>-</kbd>

- It should use _immediate execution logic_ instead of _formula/expression
  logic_.

  - Immediate Execution Logic:
    > `3 + 5 × 6 - 2 ÷ 4 = 11.5`
  - Formula/Expression Logic:
    > `3 + 5 × 6 - 2 ÷ 4 = 32.5`

- If and operator key is pressed after a value is computed, then the computed
  value should be continued.
  - Example:
    > _pressing_ <kbd>2</kbd> <kbd>+</kbd> <kbd>3</kbd> <kbd>=</kbd> <kbd>+</kbd> <kbd>4</kbd> <kbd>=</kbd> &rarr; `9`  _is equivalent to pressing_
    > <kbd>2</kbd> <kbd>+</kbd> <kbd>3</kbd> <kbd>+</kbd> <kbd>4</kbd> <kbd>=</kbd> &rarr; `9`