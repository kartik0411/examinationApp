import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "../layout";
import { adminRoutes, examReport, studentRoutes } from "./router";
const MainRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {adminRoutes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Layout>
                  <React.Suspense fallback>
                    <Component />
                  </React.Suspense>
                </Layout>
              }
            />
          ))}
        </Routes>
        <Routes>
          {studentRoutes.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Layout>
                  <React.Suspense fallback>
                    <Component />
                  </React.Suspense>
                </Layout>
              }
            />
          ))}
        </Routes>
        <Routes>
          {examReport.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Layout>
                  <React.Suspense fallback>
                    <Component />
                  </React.Suspense>
                </Layout>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MainRoutes;
