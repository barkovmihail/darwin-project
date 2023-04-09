import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '../../../widgets/Page/ui/Page/Page';
import { ListBox } from '../../../shared/ui/ListBox/ListBox';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
        </Page>
    );
};

export default MainPage;
