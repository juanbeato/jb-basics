```js script
import { html } from '@open-wc/demoing-storybook';
import '../jb-product-card-list.js';

export default {
  title: 'JbProductCardList',
  component: 'jb-product-card-list',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# JbProductCardList

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add jb-product-card-list
```

```js
import 'jb-product-card-list/jb-product-card-list.js';
```

```js preview-story
export const Simple = () => html`
  <jb-product-card-list></jb-product-card-list>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <jb-product-card-list title="Hello World"></jb-product-card-list>
`;
```
