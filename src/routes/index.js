import HomePage from "../screens/HomeScreen";
import LoginPage from "../screens/Login";
import PendingPage from "../screens/Ocurrences/listPending";
import AllOccurrencesPage from "../screens/Ocurrences/listAll";
import OccurrencePage from "../screens/Ocurrences/ocurrence";
import FormPage from "../screens/Forms";

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
        component: AllOccurrencesPage,
        key: 'allOccurrences',
    },
    {
        path: '/ocorrencia/:id',
        exact: true,
        hidden: true,
        public: true,
        component: OccurrencePage,
        key: 'detailedOccurrence',
    },
    {
        path: '/',
        exact: true,
        hidden: true,
        public: true,
        component: LoginPage,
        key: 'login',
    },
    {
        path: '/formularios',
        exact: true,
        hidden: true,
        public: true,
        component: FormPage,
        key: 'forms',
    },
];
