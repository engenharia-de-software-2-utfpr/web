import HomePage from "../screens/HomeScreen";

export default [
    {
        path: '/',
        exact: true,
        hidden: true,
        public: true,
        component: HomePage,
        key: 'home',
    },
];
