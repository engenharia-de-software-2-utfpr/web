import HomePage from "../screens/HomeScreen";
import LayoutScreen from "../screens/LayoutScreen";

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
        path: '/layout',
        exact: true,
        hidden: true,
        public: true,
        component: LayoutScreen,
        key: 'home',
    },
];
