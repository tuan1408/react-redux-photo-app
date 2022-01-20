import React from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main";
import AddEditPage from "./pages/AddEdit";
import NotFound from "components/NotFound";

Photo.propTypes = {};

function Photo(props) {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />

      <Route path="add" element={<AddEditPage />} />
      <Route path=":photoId" element={<AddEditPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Photo;
