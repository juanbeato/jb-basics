```js script
import { html } from '@open-wc/demoing-storybook';
import '../jb-header.js';

export default {
  title: 'JbHeader',
  component: 'jb-header',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# JbHeader

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add jb-header
```

```js
import 'jb-header/jb-header.js';
```

```js preview-story
export const Simple = () => html`
  <jb-header></jb-header>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <jb-header title="Hello World"></jb-header>
`;
```
