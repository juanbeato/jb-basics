```js script
import { html } from '@open-wc/demoing-storybook';
import '../jb-input.js';

export default {
  title: 'JbInput',
  component: 'jb-input',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# JbInput

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add jb-input
```

```js
import 'jb-input/jb-input.js';
```

```js preview-story
export const Simple = () => html`
  <jb-input></jb-input>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <jb-input title="Hello World"></jb-input>
`;
```
