```js script
import { html } from '@open-wc/demoing-storybook';
import '../jb-modal.js';

export default {
  title: 'JbModal',
  component: 'jb-modal',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# JbModal

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add jb-modal
```

```js
import 'jb-modal/jb-modal.js';
```

```js preview-story
export const Simple = () => html`
  <jb-modal></jb-modal>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <jb-modal title="Hello World"></jb-modal>
`;
```
