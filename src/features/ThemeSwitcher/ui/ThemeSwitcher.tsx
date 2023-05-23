import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { saveJsonSettings } from '@/entities/User';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleTheme = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [toggleTheme, saveJsonSettings]);

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={<Icon Svg={ThemeIcon} clickable onClick={onToggleTheme} />}
            off={
                <ButtonDeprecated
                    theme={ButtonTheme.UNSTYLED}
                    className={classNames('', {}, [className])}
                    onClick={onToggleTheme}
                >
                    <IconDeprecated
                        Svg={ThemeIconDeprecated}
                        width={40}
                        height={40}
                        inverted
                    />
                </ButtonDeprecated>
            }
        />
    );
});
