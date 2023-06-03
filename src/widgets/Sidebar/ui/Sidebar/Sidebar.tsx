import React, { memo, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const { t } = useTranslation();

    const sidebarItemsList = useSelector(getSidebarItems);

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemList = useMemo(
        () =>
            sidebarItemsList.map((item) => (
                <SidebarItem
                    key={item.path}
                    item={item}
                    collapsed={collapsed}
                />
            )),
        [collapsed, sidebarItemsList],
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.sidebarRedesigned,
                        { [cls.collapsedRedesigned]: collapsed },
                        [className],
                    )}
                >
                    <AppLogo
                        size={collapsed ? 30 : 50}
                        className={cls.appLogo}
                    />
                    <VStack role="navigation" gap={8} className={cls.items}>
                        {itemList}
                    </VStack>
                    <Icon
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={cls.collapsedBtn}
                        Svg={ArrowIcon}
                        clickable
                    />
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher className={cls.lang} short={collapsed} />
                    </div>
                </aside>
            }
            off={
                <aside
                    data-testid="sidebar"
                    className={classNames(
                        cls.sidebar,
                        { [cls.collapsed]: collapsed },
                        [className],
                    )}
                >
                    <Button
                        data-testid="sidebar-toggle"
                        onClick={onToggle}
                        className={cls.collapsedBtn}
                        theme={ButtonTheme.BACKGROUND_INVERTED}
                        size={ButtonSize.L}
                        square
                    >
                        {collapsed ? '>' : '<'}
                    </Button>
                    <VStack role="navigation" gap={8} className={cls.items}>
                        {itemList}
                    </VStack>
                    <div className={cls.switchers}>
                        <ThemeSwitcher />
                        <LangSwitcher className={cls.lang} short={collapsed} />
                    </div>
                </aside>
            }
        />
    );
});
