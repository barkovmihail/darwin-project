import { Story } from '@storybook/react';
// eslint-disable-next-line darwin-path/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '../../const/theme';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
