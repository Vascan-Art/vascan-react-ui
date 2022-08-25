// Button.stories.js|jsx

import { mdiAccount } from '@mdi/js';
import Icon from '@mdi/react';
import React from 'react';

// import { Button } from './Button';
import { Button } from '../src/components';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
  size: 'string',
};

//👇 We create a “template” of how args map to rendering
const Template = args => (
  <div className="flex">
    <Button className="mr-2" {...args}>
      {args.children}
    </Button>
    {/* <Button {...args}>{args.children}</Button> */}
  </div>
);

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'md',
  disabled: false,
  children: (
    <>
      <Icon
        path={mdiAccount}
        size={1}
        color="white
			"
      ></Icon>
      <p>Hello</p>
    </>
  ),
};

export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  variant: 'primary-outline',
  size: 'md',
  disabled: true,
  children: 'PrimaryOutline Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'sm',
  disabled: false,
  children: 'Secondary Button',
};
