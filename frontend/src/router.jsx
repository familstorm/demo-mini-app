import { createBrowserRouter } from "react-router";

import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

import Login from './pages/Login'
import Dashboard from "./pages/Dashboard";
import PriceListPage from "./pages/pricelist/ListPage";
import PriceListCreate from "./pages/pricelist/CreatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      {
        path: '/pricelist',
        element: <PriceListPage />
      },
      {
         path: '/pricelist/create',
        element: <PriceListCreate />
      }
    ]
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
    ]
  },
])

export default router
