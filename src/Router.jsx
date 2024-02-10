import { useRoutes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

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
      ],
    },
  ]);

  return routes;
}
