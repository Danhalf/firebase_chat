import {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/constants";

type AppRouterProps = {
    userName: string
};

export const AppRouter: FC<AppRouterProps> = ({userName}) => {

    return (
        userName
            ?
            (
                <Routes>
                    {privateRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={<Component userName={userName}/>}/>
                    )}
                    <Route path="/*" element={<Navigate replace to={CHAT_ROUTE} />} />
                </Routes>
            )
            :
            (
                <Routes>
                    {publicRoutes.map(({path, Component}) =>
                        <Route key={path} path={path} element={<Component userName={userName}/>}/>
                    )}
                    <Route path="/*" element={<Navigate replace to={LOGIN_ROUTE} />} />
                </Routes>
            )
    );
};