import { lazy } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GuardedRoute from './GuardedRoute';
import { RouteTypes } from './RouteTypes';
import { selectAuthAuthorized } from './store/auth/authSelectors';

const Login = lazy(() => import(/* webpackChunkName: "Login" */ './pages/Login'));
const Home = lazy(() => import(/* webpackChunkName: "Home" */ './pages/Home'));

const Router = () => {
  const isAuthorized = useSelector(selectAuthAuthorized);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<GuardedRoute isRouteAccessible={!isAuthorized} redirectRoute={RouteTypes.Home} />}>
          <Route path={RouteTypes.Login} element={<Login />} />
        </Route>
        <Route element={<GuardedRoute isRouteAccessible={isAuthorized} redirectRoute={RouteTypes.Login} />}>
          <Route path={RouteTypes.Home} element={<Home />} />
        </Route>

        <Route path={RouteTypes.Any} element={<p className="c-white text-center text-lg">Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
