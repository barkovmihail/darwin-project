import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { Theme } from '../../../app/providers/ThemeProvider';

export const RouterDecorator = (StoryComponent: Story) => (
    <BrowserRouter>
        <StoryComponent />
    </BrowserRouter>
);
