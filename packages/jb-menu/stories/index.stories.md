```js script
import { html } from '@open-wc/demoing-storybook';
import '../jb-menu.js';

export default {
  title: 'JbMenu',
  component: 'jb-menu',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# JbMenu

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add jb-menu
```

```js
import 'jb-menu/jb-menu.js';
```

```js preview-story
export const Simple = () => html`
  <jb-menu></jb-menu>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <jb-menu title="Hello World"></jb-menu>
`;
```
