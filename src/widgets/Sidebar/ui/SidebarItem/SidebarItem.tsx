import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/items';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const { t } = useTranslation();

    const {
        item,
        collapsed,
    } = props;

    return (
        <AppLink
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            theme={AppLinkTheme.INVERTED}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>

        </AppLink>
    );
});
