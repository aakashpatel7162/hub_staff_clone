import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,Navigate
} from "react-router-dom";
import Home from "../main/Home";
import { paths } from "./paths";
import Auth from "../Auth/Auth";
import Layout from "../Layout/Layout";
import ActivityTable from '../userActivity/ActivityTable'
const allroutes = createRoutesFromElements(
  <>
    <Route path={paths.login} element={<Auth />} />
    <Route path={paths.signup} element={<Auth />} />
    <Route element={<Layout />}>
    <Route path="/" element={<Navigate to="/login" replace />} />

      <Route path={paths.home} element={<Home />} />
      <Route path={paths.products} element={<Home />} />
      <Route path={paths.resources} element={<Home />} />
      <Route path={paths.solutions} element={<Home />} />
      <Route path={paths.contactus} element={      <Home/>}/>
      <Route path={paths.userdata} element={<ActivityTable/>}/>

    </Route>
  </>
);

const routes = createBrowserRouter(allroutes);
export default routes;
