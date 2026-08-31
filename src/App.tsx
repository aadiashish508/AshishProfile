import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const MyWorks = lazy(() => import("./pages/MyWorks"));
const Resume = lazy(() => import("./pages/Resume"));
const Play = lazy(() => import("./pages/Play"));
import { LoadingProvider } from "./context/LoadingProvider";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LoadingProvider>
              <Suspense>
                <MainContainer>
                  <Suspense>
                    <CharacterModel />
                  </Suspense>
                </MainContainer>
              </Suspense>
            </LoadingProvider>
          }
        />
        <Route
          path="/myworks"
          element={
            <Suspense fallback={<div className="loading-fallback" style={{ color: "#fff", padding: "40px", textAlign: "center" }}>Loading...</div>}>
              <MyWorks />
            </Suspense>
          }
        />
        <Route
          path="/resume"
          element={
            <Suspense fallback={<div className="loading-fallback" style={{ color: "#fff", padding: "40px", textAlign: "center" }}>Loading CV...</div>}>
              <Resume />
            </Suspense>
          }
        />
        <Route
          path="/cv"
          element={
            <Suspense fallback={<div className="loading-fallback" style={{ color: "#fff", padding: "40px", textAlign: "center" }}>Loading CV...</div>}>
              <Resume />
            </Suspense>
          }
        />
        <Route
          path="/play"
          element={
            <Suspense fallback={<div className="loading-fallback" style={{ color: "#fff", padding: "40px", textAlign: "center" }}>Loading Chess...</div>}>
              <Play />
            </Suspense>
          }
        />
      </Routes>
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  );
};

export default App;
