import HomePage from "../screens/HomeScreen";
// import LoginPage from "../screens/Login";
import PendenciasPage from "../screens/Ocorrencias/pendentes";
import AllOcorrenciasPage from "../screens/Ocorrencias/ocorrencias";

export default [
    {
        path: '/',
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
        component: PendenciasPage,
        key: 'pendencias',
    },
    {
        path: '/allOccurrences',
        exact: true,
        hidden: true,
        public: true,
        component: AllOcorrenciasPage,
        key: 'allOccurrences',
    },
    // {
    //     path: '/login',
    //     exact: true,
    //     hidden: true,
    //     public: true,
    //     component: LoginPage,
    //     key: 'login',
    // },
];
