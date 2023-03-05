import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    const [value, setValue] = useState('');

    return (
        <div>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
