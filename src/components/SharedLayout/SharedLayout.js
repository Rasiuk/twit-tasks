import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { AppBar } from "../AppBar/AppBar";

export const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
