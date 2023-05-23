import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('  Button', () => {
    test('exist button', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('exist button with class ', () => {
        render(<Button theme={ButtonTheme.UNSTYLED}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('unstyled');
        screen.debug();
    });
});
