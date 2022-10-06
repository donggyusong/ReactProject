import { FormattedMessage } from 'react-intl';
import { IconMan } from '@tabler/icons';
import {base} from "./base";

const icons = {
    IconMan
};

const hrPages = {
    id: 'account',
    title: <FormattedMessage id="인사 업무" />,
    type: 'collapse',
    icon: icons.IconMan,
    children: [
        base

    ]
};

export default hrPages;
