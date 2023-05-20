import { createBrowserRouter } from "react-router-dom";
import App from './App';
import { lazy } from "react";

const Content = lazy(() => import('./pages/homePage/Content'))
const Admin = lazy(() => import('./pages/admin/admin'))

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Content />
            },
            {
                path: "admin",
                element: <Admin />
            }
        ]
    },
])