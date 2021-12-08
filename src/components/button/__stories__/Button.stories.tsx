import { Story, Meta } from "@storybook/react";

import Button, { Props } from "../Button";

const DefaultTemplate: Story<Props> = (args) => (
  <Button {...args}>Button</Button>
);

export const Default = DefaultTemplate.bind({});

export default {
  title: "button/Button",
  component: Button,
  args: {
    children: "Button",
  },
} as Meta;
