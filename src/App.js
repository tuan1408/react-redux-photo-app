import Header from "components/Header";
import NotFound from "components/NotFound";
import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const Photo = React.lazy(() => import("./features/Photo"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Navigate replace to={"photos/"} />} />
            <Route path="photos/*" element={<Photo />} />
            <Route path="react-redux-photo-app/*" element={<Photo />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
