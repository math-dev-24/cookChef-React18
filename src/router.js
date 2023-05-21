import { createBrowserRouter, redirect } from "react-router-dom";
import App from './App';
import { lazy } from "react";
import { getRecipeById } from "./apis";

const Content = lazy(() => import('./pages/homePage/Content'))
const Admin = lazy(() => import('./pages/admin/admin'))
const AdminRecipes = lazy(() => import('./pages/admin/pages/adminRecipes/AdminRecipes'))
const AdminRecipesList = lazy(() => import('./pages/admin/pages/adminRecipesList/AdminRecipesList'))
const AdminUsers = lazy(() => import('./pages/admin/pages/adminUsers/AdminUsers'))
const AdminRecipesForm = lazy(() => import('./pages/admin/pages/adminRecipesForm/AdminRecipesForm'))
const WishList = lazy(() => import('./pages/wishList/WishList'))

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
                path: "wishlist",
                element: <WishList />
            },
            {
                path: "admin",
                element: <Admin />,
                children:[
                    {
                        index: true,
                        loader: async () => redirect('/admin/recipes')
                    },
                    {
                        path: "recipes",
                        element: <AdminRecipes />,
                        children: [
                            {
                                index: true,
                                loader: async () => redirect('/admin/recipes/list')
                            },
                            {
                                path: "list",
                                element: <AdminRecipesList />
                            },
                            {
                                path: 'form',
                                element: <AdminRecipesForm />
                            },
                            {
                                path: "edit/:recipeId",
                                element: <AdminRecipesForm />,
                                loader: async ({ params: { recipeId }}) => getRecipeById(recipeId)
                            }
                        ]
                    },
                    {
                        path: "users",
                        element: <AdminUsers />
                    }
                ]
            }
        ]
    },
])