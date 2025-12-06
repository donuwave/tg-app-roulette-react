import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy } from "react";
import { routes } from "@shared/config";
import { Layout } from "../layout/Layout";

const GamePvpPage = lazy(() => import(/* webpackPrefetch: true */ "@pages/GamePvpPage"));
const HistoryPvpPage = lazy(() => import(/* webpackPrefetch: true */ "@pages/HistoryPvpPage"));
const InventoryPage = lazy(() => import(/* webpackPrefetch: true */ "@pages/InventoryPage"));
const ShopPage = lazy(() => import(/* webpackPrefetch: true */ "@pages/ShopPage"));
const ShopHistoryPage = lazy(() => import(/* webpackPrefetch: true */ "@pages/ShopHistoryPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>Ошибка попробуйте позже</div>,
    children: [
      { index: true, element: <Navigate to={routes.profile} replace /> },
      {
        path: routes.profile,
        element: <div>profile page</div>,
      },
      {
        path: routes.solo,
        element: <div>Solo page</div>,
      },
      {
        path: routes.inventory,
        element: <InventoryPage />,
      },
      {
        path: routes.pvp,
        children: [
          { index: true, element: <GamePvpPage /> },
          { path: routes.pvpHistory, element: <HistoryPvpPage /> },
        ],
      },
      {
        path: routes.shop,
        children: [
          { index: true, element: <ShopPage /> },
          { path: routes.shopHistory, element: <ShopHistoryPage /> },
        ],
      },
    ],
  },
]);
