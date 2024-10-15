import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../main/Home";
import { paths } from "./paths";
import Auth from "../Auth/Auth";
import Layout from "../Layout/Layout";

const allroutes = createRoutesFromElements(
  <>
    <Route path={paths.login} element={<Auth />} />
    <Route path={paths.signup} element={<Auth />} />
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path={paths.products} element={<Home />} />
      <Route path={paths.resources} element={<Home />} />

      <Route path={paths.solutions} element={<Home />} />
    </Route>
  </>
);

const routes = createBrowserRouter(allroutes);
export default routes;
