import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '../../../widgets/Page/ui/Page/Page';
import { Counter } from '../../../entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            <Counter />
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
