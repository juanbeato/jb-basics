```js script
import { html } from '@open-wc/demoing-storybook';
import '../jb-chip.js';

export default {
  title: 'JbChip',
  component: 'jb-chip',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# JbChip

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add jb-chip
```

```js
import 'jb-chip/jb-chip.js';
```

```js preview-story
export const Simple = () => html`
  <jb-chip></jb-chip>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <jb-chip title="Hello World"></jb-chip>
`;
```
