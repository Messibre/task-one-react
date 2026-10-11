import type { RouteObject } from "react-router";

import { AppLayout } from "@/components/layout/app-layout";
import { ErrorPage } from "@/pages/error-page";
import { HomePage } from "@/pages/home-page";
import { NotFoundPage } from "@/pages/not-found-page";

function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Settings</h1>
      <p className="text-muted-foreground">Manage your settings and preferences.</p>
    </div>
  );
}

/**
 * All routes live here as plain data so tests can render them in a memory router.
 * To add a page: create it in src/pages, then add one entry to `children`.
 * Add a matching link in src/components/layout/app-layout.tsx if it belongs in the nav.
 */
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "settings", element: <SettingsPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];
