import * as React from "react";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer";

export interface RouteLayoutProps {}

export default function RouteLayout(props: RouteLayoutProps) {
  return (
    <div>
      <Header title={"sample"} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
