import { createBrowserRouter } from 'react-router-dom';
import AboutPage from '../pages/aboutPage';
import HomePage from '../pages/homePage';
import LoginPage from '../pages/loginPage';
import routeDashboard from './dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  ...routeDashboard,
]);

export default router;
