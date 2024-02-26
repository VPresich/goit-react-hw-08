import * as Yup from 'yup';

import { ERR_SHORT, ERR_LONG, ERR_REQUIRED } from '../../auxiliary/constants';

export const FeedbackSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, ERR_SHORT)
    .max(50, ERR_LONG)
    .required(ERR_REQUIRED),
  password: Yup.string()
    .min(3, ERR_SHORT)
    .max(50, ERR_LONG)
    .required(ERR_REQUIRED),
});
