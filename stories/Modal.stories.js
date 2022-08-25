// Modal.stories.js/jsx

import React, { useState } from 'react';
import { Modal } from '../src/components';
import { Button } from '../src/components';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Modal',
  component: Modal,
};

//👇 We create a “template” of how args map to rendering
const Template = args => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Button variant="primary-outline" onClick={toggle}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} handleClose={toggle} {...args}>
        {args.children}
      </Modal>
    </>
  );
};

//👇 Each story then reuses that template
export const SignIn = Template.bind({});
SignIn.args = {
  // isOpen: false,
  children: <>Login detail</>,
};
