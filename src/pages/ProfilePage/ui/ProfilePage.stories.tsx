import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from '../../../shared/config/storybook/ThemeDecorator';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '../../../shared/config/storybook/StoreDecorator';
import { Country } from '../../../entities/Country';
import { Currency } from '../../../entities/Currency';
import { Theme } from '../../../shared/const/theme';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 34,
            country: Country.Russia,
            lastname: 'Barkov',
            first: 'Mikhail',
            currency: Currency.RUB,
            city: 'Izhevsk',
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            username: 'admin',
            age: 34,
            country: Country.Russia,
            lastname: 'Barkov',
            first: 'Mikhail',
            currency: Currency.RUB,
            city: 'Izhevsk',
        },
    },
})];
