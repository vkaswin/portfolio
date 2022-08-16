import React from "react";
import * as Pages from "pages";
import { routes } from "./routes";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { SwitchTransition, CSSTransition } from "react-transition-group";

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        {routes.map(({ path, component }) => {
          let Page = Pages[component];
          return (
            <Route
              key={path}
              path={path}
              element={
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    key={path}
                    timeout={{ exit: 250, enter: 600 }}
                    classNames={{
                      enterActive: "route-enter",
                      exitActive: "route-exit",
                    }}
                  >
                    <Page />
                  </CSSTransition>
                </SwitchTransition>
              }
            />
          );
        })}
      </Routes>
    </HashRouter>
  );
};
