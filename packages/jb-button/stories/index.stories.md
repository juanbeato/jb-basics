```js script
import { html } from '@open-wc/demoing-storybook';
import '../jb-button.js';

export default {
  title: 'JbButton',
  component: 'jb-button',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# JbButton

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add jb-button
```

```js
import 'jb-button/jb-button.js';
```

```js preview-story
export const Simple = () => html`
  <jb-button></jb-button>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <jb-button title="Hello World"></jb-button>
`;
```
