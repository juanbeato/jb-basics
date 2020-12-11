```js script
import { html } from '@open-wc/demoing-storybook';
import '../jb-product-card.js';

export default {
  title: 'JbProductCard',
  component: 'jb-product-card',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# JbProductCard

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add jb-product-card
```

```js
import 'jb-product-card/jb-product-card.js';
```

```js preview-story
export const Simple = () => html`
  <jb-product-card></jb-product-card>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <jb-product-card title="Hello World"></jb-product-card>
`;
```
