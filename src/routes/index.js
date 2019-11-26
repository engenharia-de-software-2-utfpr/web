import HomePage from "../screens/HomeScreen";
import LoginPage from "../screens/Login";
import PendingPage from "../screens/Ocurrences/list_pending";
import AllOcorrenciasPage from "../screens/Ocurrences/list_all";

export default [
    {
        path: '/home',
        exact: true,
        hidden: true,
        public: true,
        component: HomePage,
        key: 'home',
    },
    {
        path: '/pendencias',
        exact: true,
        hidden: true,
        public: true,
        component: PendingPage,
        key: 'pendingPage',
    },
    {
        path: '/ocorrencias',
        exact: true,
        hidden: true,
        public: true,
        component: AllOcorrenciasPage,
        key: 'allOccurrences',
    },
    {
        path: '/',
        exact: true,
        hidden: true,
        public: true,
        component: LoginPage,
        key: 'login',
    },
];
