import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./pages/nav/Navbar";
import Footer from "./pages/footer/Footer";
import ErrorPage from "./pages/error/ErrorPage";
import LoadingSpinner from "./pages/loading/LoadingSpinner";

const MainPage = lazy(() => import("./pages/main/MainPage"));
const Gallery = lazy(() => import("./pages/gallery/Gallery"));
const Certificates = lazy(() => import("./pages/certificate/Certificates"));

const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/certificates" element={<Certificates />}></Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </Router>
    </Suspense>
  );
};

export default App;
