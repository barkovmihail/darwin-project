import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '../../../widgets/Page/ui/Page/Page';
import { ListBox } from '../../../shared/ui/ListBox/ListBox';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
            <div>
                <ListBox
                    defaultValue={t('Выберите значение')}
                    onChange={(value: string) => {}}
                    value={undefined}
                    items={[
                        { value: '1', content: '123' },
                        { value: '2', content: '222', disabled: true },
                        { value: '3', content: '333' },
                    ]}
                />
            </div>
        </Page>
    );
};

export default MainPage;
