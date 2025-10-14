import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Map from '@/pages/Map/Map';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        path: '/',
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/map',
        Component: Map,
      },
    ],
  },
]);
