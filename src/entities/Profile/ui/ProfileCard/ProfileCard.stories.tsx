import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '@/app/styles/index.scss';
import { ProfileCard } from './ProfileCard';
import { Country } from '../../../Country';
import { Currency } from '../../../Currency';
import AvatarImg from '../../../../shared/assets/tests/avatar.png';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 34,
        country: Country.Russia,
        lastname: 'Barkov',
        first: 'Mikhail',
        currency: Currency.RUB,
        city: 'Izhevsk',
        avatar: AvatarImg,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'true',
};

export const loading = Template.bind({});
loading.args = {
    isLoading: true,
};
