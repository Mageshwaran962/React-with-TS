import * as React from "react";
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from "react-router-dom";
import RouteLayout from "./RouteLayout";
import Home from "../screens/home";
import PageNotFound from "../screens/errorHandling";

export const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<RouteLayout />}>
      <Route index element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
