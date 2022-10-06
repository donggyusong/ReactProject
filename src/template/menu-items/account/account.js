import { FormattedMessage } from 'react-intl';
import { IconCash } from '@tabler/icons';

const icons = {
    IconCash
};

const accountPages = {
    id: 'account',
    title: <FormattedMessage id="회계 업무" />,
    type: 'collapse',
    icon: icons.IconCash,
    children: [
        {
            id: 'slip',
            title: <FormattedMessage id="전표/장부관리" />,
            type: 'collapse',
            children: [
                {
                    id: 'slipForm',
                    title: (
                        <>
                            <FormattedMessage id="일반전표" />
                        </>
                    ),
                    type: 'item',
                    url: '/app/acc/account/slipForm',
                    target: true
                },
                {
                    id: 'approvalManager',
                    title: (
                        <>
                            <FormattedMessage id="전표승인 및 취소" />
                        </>
                    ),
                    type: 'item',
                    url: '/app/acc/account/approvalManager',
                    target: true
                },
                {
                    id: 'journalForm',
                    title: (
                        <>
                            <FormattedMessage id="분개장" />
                        </>
                    ),
                    type: 'item',
                    url: '/app/acc/account/journalForm',
                    target: true
                },
                {
                    id: 'detailTrialBalance',
                    title: (
                        <>
                            <FormattedMessage id="일(월)계표" />
                        </>
                    ),
                    type: 'item',
                    url: '/app/acc/statement/detailTrialBalance',
                    target: true
                },
                {
                    id: 'GeneralAccountLedger',
                    title: (
                        <>
                            <FormattedMessage id="총계정원장" />
                        </>
                    ),
                    type: 'item',
                    url: '/app/acc/account/GeneralAccountLedger',
                    target: true
                },
                {
                    id: 'cashJournal',
                    title: (
                        <>
                            <FormattedMessage id="현금출납장" />
                        </>
                    ),
                    type: 'item',
                    url: '/app/acc/statement/cashJournal',
                    target: true
                },
                {
                    id: 'AccountLedger',
                    title: (
                        <>
                            <FormattedMessage id="계정별원장" />
                        </>
                    ),
                    type: 'item',
                    url: '/app/acc/statement/AccountLedger',
                    target: true
                }
            ]
        },
        {
            id: 'under-construction',
            title: <FormattedMessage id="under-construction" />,
            type: 'item',
            url: '/pages/under-construction',
            target: true
        }
    ]
};

export default accountPages;
