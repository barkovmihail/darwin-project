import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, ReactNode, useCallback } from 'react';
import CopyIcon from 'shared/assets/icons/copy-20-20.svg';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { t } = useTranslation();

    const {
        className,
        text,
    } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={onCopy} className={cls.copyBtn} theme={ButtonTheme.UNSTYLED}>
                <CopyIcon className={cls.copyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
