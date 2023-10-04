import { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Spinner } from "./components";
import ProjectRoutes from "./routes";

function App() {
  return (
    <Router>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/*" element={<ProjectRoutes />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
