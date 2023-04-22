import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { NotificationItem } from '../../ui/NotificationItem/NotificationItem';
import { useNotifications } from '../../api/notificationApi';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const { data: notifications, isLoading } = useNotifications(null, {
        pollingInterval: 30000,
    });

    if (isLoading) {
        return (
            <VStack
                gap={16}
                max
                className={classNames(cls.NotificationList, {}, [className])}
            >
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
                <Skeleton width="100%" border="8px" height="80px" />
            </VStack>
        );
    }

    return (
        <VStack
            gap={16}
            max
            className={classNames(cls.NotificationList, {}, [className])}
        >
            {notifications?.map((item) => (<NotificationItem key={item.id} item={item} />))}
        </VStack>
    );
});