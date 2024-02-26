import React from "react";
import { Routes, Route, HashRouter  } from "react-router-dom";
import Layout from "../layout";
import { adminRoutes, examReport, studentRoutes } from "./router";
const MainRoutes = () => {
  return (
    <>
       <HashRouter>
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
        </HashRouter>
    </>
  );
};

export default MainRoutes;
