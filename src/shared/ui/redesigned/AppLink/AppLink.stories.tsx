import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../config/storybook/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from '../../../const/theme';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
    <AppLink {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY,
};

export const Inverted = Template.bind({});
Inverted.args = {
    children: 'Link',
    theme: AppLinkTheme.INVERTED,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Link',
    theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const InvertedDark = Template.bind({});
InvertedDark.args = {
    children: 'Link',
    theme: AppLinkTheme.INVERTED,
};
InvertedDark.decorators = [ThemeDecorator(Theme.DARK)];
