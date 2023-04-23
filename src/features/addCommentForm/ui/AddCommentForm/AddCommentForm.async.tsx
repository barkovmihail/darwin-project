import { FC, lazy } from 'react';
import { AddCommentFormProps } from '../../ui/AddCommentForm/AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => import('./AddCommentForm'));
