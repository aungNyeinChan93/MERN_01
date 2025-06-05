import { createBrowserRouter } from 'react-router'
import MasterLayout from './layouts/MasterLayout';
import AuthLayout from './layouts/AuthLauout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import HomePage from './pages/home/HomePage';
import PostPage from './pages/Post/PostPage';

const router = createBrowserRouter([
    {
        path: '/', Component: MasterLayout, children: [
            { index: true, Component: HomePage },
            { path: '/posts', Component: PostPage },
        ]
    },
    {
        path: '/auth', Component: AuthLayout, children: [
            { path: '/auth/login', Component: LoginPage },
            { path: '/auth/register', Component: RegisterPage },
        ]
    },

]);

export default router;