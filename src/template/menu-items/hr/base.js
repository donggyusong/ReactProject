import {FormattedMessage} from "react-intl";

export const base = {
    id: 'base',
    title: <FormattedMessage id="기초정보 관리" />,
    type: 'collapse',
    children: [
        {
            id: 'companyInfo',
            title: (
                <>
                    <FormattedMessage id="휴일 조회 정보" />
                </>
            ),
            type: 'item',
            url: '/app/hr/sys/holidayManage',
        },
        {
            id: 'workplaceInfo ',
            title: (
                <>
                    <FormattedMessage id="사업장 정보" />
                </>
            ),
            type: 'item',
            url: '/app/logistic/base/workplaceInfo',
        },
        {
            id: 'deptInfo',
            title: (
                <>
                    <FormattedMessage id="부서 정보" />
                </>
            ),
            type: 'item',
            url: '/app/logistic/base/deptInfo',
        },
        {
            id: 'clientInfo',
            title: (
                <>
                    <FormattedMessage id="거래처 정보" />
                </>
            ),
            type: 'item',
            url: '/app/logistic/base/clientInfo',
        }
    ]
};