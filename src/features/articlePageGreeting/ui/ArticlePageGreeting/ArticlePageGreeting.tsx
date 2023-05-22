import { useTranslation } from 'react-i18next';
import { memo, useCallback, useEffect, useState } from 'react';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Text } from '@/shared/ui/deprecated/Text';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { setJsonSettingsMutation } from '@/entities/User/api/userApi';
import { isMobile } from 'react-device-detect';
import { Drawer } from '@/shared/ui/deprecated/Drawer';

interface ArticlePageGreetingProps {
    className?: string;
}

export const ArticlePageGreeting = memo((props: ArticlePageGreetingProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const { isArticlesPageWasOpened } = useJsonSettings();

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isArticlesPageWasOpened) {
            setIsOpen(true);
            dispatch(saveJsonSettings({ isArticlesPageWasOpened: true }));
        }
    }, [dispatch, isArticlesPageWasOpened]);

    const onClose = useCallback(() => {
        setIsOpen(false);
    }, [setIsOpen]);

    const text = (
        <Text
            title={t('Добро пожаловать на страницу статей')}
            text={t(
                'Здесь вы можете искать и просматривать статьи на различные темы',
            )}
        />
    );

    if (isMobile) {
        return (
            <Drawer lazy isOpen={isOpen} onClose={onClose}>
                {text}
            </Drawer>
        );
    }

    return (
        <Modal lazy isOpen={isOpen} onClose={onClose}>
            {text}
        </Modal>
    );
});
