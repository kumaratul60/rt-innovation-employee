import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";

const ListPage = lazy(() => import("../pages/ListPage"));
const EditPage = lazy(() => import("../pages/EditPage"));
const AddPage = lazy(() => import("../pages/AddPage"));

const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<ListPage />} />
      <Route path="/create" exact element={<AddPage />} />
      <Route path="/edit" exact element={<EditPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
export default ProjectRoutes;
