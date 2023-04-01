import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

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
