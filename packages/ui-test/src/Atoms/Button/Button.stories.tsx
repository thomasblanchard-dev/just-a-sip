import { StoryFn, Meta } from '@storybook/react';
import { Button } from './Button';

const Story: Meta<typeof Button> = {
  component: Button,
  title: 'Atoms/Button',
};
export default Story;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'My button',
};
