```js script
import { html } from '@open-wc/demoing-storybook';
import '../jb-layout.js';

export default {
  title: 'JbLayout',
  component: 'jb-layout',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# JbLayout

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add jb-layout
```

```js
import 'jb-layout/jb-layout.js';
```

```js preview-story
export const Simple = () => html`
  <jb-layout></jb-layout>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <jb-layout title="Hello World"></jb-layout>
`;
```
