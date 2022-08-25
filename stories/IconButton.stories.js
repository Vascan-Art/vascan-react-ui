// Button.stories.js|jsx

import { mdiAccessPointMinus } from '@mdi/js';
import React from 'react';

// import { Button } from './Button';
import { IconButton } from '../src/components';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Icon Button',
  component: IconButton,
};

//👇 We create a “template” of how args map to rendering
const Template = args => (
  <div className="flex">
    <IconButton {...args}></IconButton>
  </div>
);

//👇 Each story then reuses that template
export const Default = Template.bind({});
Default.args = {
  path: mdiAccessPointMinus,
  value: true,
};
