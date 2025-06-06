import { createBrowserRouter } from 'react-router'
import MasterLayout from './layouts/MasterLayout';
import AuthLayout from './layouts/AuthLauout';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import HomePage from './pages/home/HomePage';
import PostPage from './pages/Post/PostPage';
import NotFoundPage from './pages/others/NotFoundPage';
import DetailPostPage from './pages/Post/DetailPostPage';
import CreatePostPage from './pages/Post/CreatePostPage';
import EditPostPage from './pages/Post/EditPostPage';
import ContactPage from './pages/Contact/ContactPage';

const router = createBrowserRouter([
    {
        path: '/', Component: MasterLayout, children: [
            { index: true, Component: HomePage },
            { path: '/posts', Component: PostPage },
            { path: '/posts/:id', Component: DetailPostPage },
            { path: '/posts/create', Component: CreatePostPage },
            { path: '/posts/edit/:id', Component: EditPostPage },
            { path: '/contact', Component: ContactPage },
        ]
    },
    {
        path: '/auth', Component: AuthLayout, children: [
            { path: '/auth/login', Component: LoginPage },
            { path: '/auth/register', Component: RegisterPage },
        ]
    },
    {
        path: '*', Component: NotFoundPage
    }
]);

export default router;