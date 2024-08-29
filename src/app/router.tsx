import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ROUTER_PATHS } from '@/shared/constants';
import { Error } from '@/widgets/error';
import { RootLayout } from '@/widgets/root-layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        lazy: () =>
          import('../pages/home-page').then((m) => ({
            Component: m.HomePage,
          })),
      },
      {
        path: ROUTER_PATHS.EMPLOYEE_EDIT,
        lazy: () =>
          import('../pages/employee-edit-page').then((m) => ({ Component: m.EmployeeEditPage })),
      },
    ],
  },
]);
export function AppRouter() {
  return <RouterProvider router={router} />;
}
