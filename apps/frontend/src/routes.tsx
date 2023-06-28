import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Login = lazy(() => import(/* webpackChunkName: "Login" */ './pages/Login'));
const Home = lazy(() => import(/* webpackChunkName: "Home" */ './pages/Home'));

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
