import { useRoutes } from 'react-router-dom';
import Layout from './components/Layout';
import PanelLayout from './components/Panel/PanelLayout';
import Home from './pages/Home';
import CancelDay from './pages/Panel/CancelDay';
import CanceledDays from './pages/Panel/CanceledDays';
import ConfirmedSchedules from './pages/Panel/ConfirmedSchedules';
import PendingSchedules from './pages/Panel/PendingSchedules';
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
        {
          index: true,
          element: <PendingSchedules />,
        },
        {
          path: 'confirmed',
          element: <ConfirmedSchedules />,
        },
        {
          path: 'canceled-days',
          element: <CanceledDays />,
        },
        {
          path: 'cancel-day',
          element: <CancelDay />,
        },
      ],
    },
  ]);

  return routes;
}
