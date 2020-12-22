```js script
import { html } from '@open-wc/demoing-storybook';
import '../jb-rating.js';

export default {
  title: 'JbRating',
  component: 'jb-rating',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# JbRating

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add jb-rating
```

```js
import 'jb-rating/jb-rating.js';
```

```js preview-story
export const Simple = () => html`
  <jb-rating></jb-rating>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <jb-rating title="Hello World"></jb-rating>
`;
```
