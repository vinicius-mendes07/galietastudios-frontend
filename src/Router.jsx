import { useRoutes } from 'react-router-dom';
import Layout from './components/Layout';
import PanelLayout from './components/Panel/PanelLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import CancelDay from './pages/Panel/CancelDay';
import CanceledDays from './pages/Panel/CanceledDays';
import ConfirmedSchedules from './pages/Panel/ConfirmedSchedules';
import EditUser from './pages/Panel/EditUser';
import NewService from './pages/Panel/NewService';
import PendingSchedules from './pages/Panel/PendingSchedules';
import Services from './pages/Panel/Services';
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
        {
          path: 'login',
          element: <Login />,
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
        {
          path: 'services',
          element: <Services />,
        },
        {
          path: 'services/new',
          element: <NewService />,
        },
        {
          path: 'users/current',
          element: <EditUser />,
        },
      ],
    },
  ]);

  return routes;
}
