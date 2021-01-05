```js script
import { html } from '@open-wc/demoing-storybook';
import '../jb-date.js';

export default {
  title: 'JbDate',
  component: 'jb-date',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# JbDate

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add jb-date
```

```js
import 'jb-date/jb-date.js';
```

```js preview-story
export const Simple = () => html`
  <jb-date></jb-date>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <jb-date title="Hello World"></jb-date>
`;
```
