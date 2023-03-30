import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'src/app/providers/ThemeProvider';
import { ThemeDecorator } from '../../config/storybook/ThemeDecorator';
import { ScrollRestoration } from './ScrollRestoration';

export default {
    title: 'shared/ScrollRestoration',
    component: ScrollRestoration,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ScrollRestoration>;

const Template: ComponentStory<typeof ScrollRestoration> = (args) => <ScrollRestoration {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [ThemeDecorator(Theme.DARK)];
