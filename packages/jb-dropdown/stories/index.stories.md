```js script
import { html } from '@open-wc/demoing-storybook';
import '../jb-dropdown.js';

export default {
  title: 'JbDropdown',
  component: 'jb-dropdown',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# JbDropdown

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add jb-dropdown
```

```js
import 'jb-dropdown/jb-dropdown.js';
```

```js preview-story
export const Simple = () => html`
  <jb-dropdown></jb-dropdown>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <jb-dropdown title="Hello World"></jb-dropdown>
`;
```
