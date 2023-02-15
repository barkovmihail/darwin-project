import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('  Button', () => {
    test('exist button', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('exist button with class ', () => {
        render(<Button theme={ThemeButton.UNSTYLED}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('unstyled');
        screen.debug();
    });
});
