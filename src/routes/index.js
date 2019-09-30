import HomePage from "../screens/HomeScreen";
// import LoginPage from "../screens/Login";

export default [
    {
        path: '/',
        exact: true,
        hidden: true,
        public: true,
        component: HomePage,
        key: 'home',
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
