import { useRoutes } from 'react-router-dom';
import Layout from './components/Layout';
import PanelLayout from './components/Panel/PanelLayout';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import ScheduleSuccess from './pages/ScheduleSuccess';

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'schedule',
          children: [
            {
              index: true,
              element: <Schedule />,
            },
            {
              path: 'success',
              element: <ScheduleSuccess />,
            },

          ],
        },
      ],
    },
    {
      path: '/panel',
      element: <PanelLayout />,
      children: [
        {},
      ],
    },
  ]);

  return routes;
}
