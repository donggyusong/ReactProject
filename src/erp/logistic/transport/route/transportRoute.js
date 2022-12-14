import React from 'react';
import { Route } from 'react-router-dom';
//************************************************운송관리 ********************************************************
import { default as Transport } from 'erp/logistic/transport/page/transport';  //최수진 출차관리
import { default as TransportIn } from 'erp/logistic/transport/page/transportIn';
import AuthGuard from "../../../../utils/route-guard/AuthGuard";
import MainLayout from "../../../../template/layout/MainLayout";  // 입차관리
//갓냐
// function transportRoute() {
//     return (
//         <>
//             <Route exact path="/app/logistic/transport/transportInfo" component={Transport} />
//             <Route exact path="/app/logistic/transport/transportInInfo" component={TransportIn} />
//         </>
//     );
// }
//
// export default transportRoute;

const transportRoute = {
    path: '/',
    element: (
        <AuthGuard>
            <MainLayout />
        </AuthGuard>
    ),
    children: [
        {
            path: '/app/logistic/transport/transportInfo',
            element: <Transport />
        },
        {
            path: '/app/logistic/transport/transportInInfo',
            element: <TransportIn />
        }
    ]
};

export default transportRoute;