import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';

export default {
  title: 'shared/AppLink',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'link',
  theme: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'link',
  theme: 'secondary',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'link',
  theme: 'primary',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  children: 'link',
  theme: 'secondary',
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
