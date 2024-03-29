import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '../../../../widgets/Page/ui/Page/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams<{id: string}>();
    const isEdit = Boolean(id);

    const {
        className,
    } = props;

    return (
        <Page className={classNames('', {}, [className])}>
            {isEdit ? t('Редактирование статьи с ИД = ') + id : t('Создание новой статьи')}
        </Page>
    );
});

export default ArticleEditPage;
