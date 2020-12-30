```js script
import { html } from '@open-wc/demoing-storybook';
import '../jb-countdown.js';

export default {
  title: 'JbCountdown',
  component: 'jb-countdown',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# JbCountdown

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add jb-countdown
```

```js
import 'jb-countdown/jb-countdown.js';
```

```js preview-story
export const Simple = () => html`
  <jb-countdown></jb-countdown>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <jb-countdown title="Hello World"></jb-countdown>
`;
```
