import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'src/app/providers/ThemeProvider';
import { ThemeDecorator } from '../../../../shared/config/storybook/ThemeDecorator';
import { Page } from './Page';

export default {
    title: 'shared/Page',
    component: Page,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [ThemeDecorator(Theme.DARK)];