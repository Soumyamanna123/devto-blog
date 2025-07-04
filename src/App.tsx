import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const ArticleDetails = lazy(() => import("./pages/ArticleDetails"));
const AuthorDetails = lazy(() => import("./pages/AuthorDetails"));
const NotFound = lazy(() => import("./NotFound"));
import MainLayout from "./layout/MainLayout";
import Profile from "./pages/Profile";
import RequireAuth from "./components/RequireAuth";

const Spinner = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
    <span className="text-lg text-blue-600 font-semibold">Loading...</span>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<ArticleDetails />} />
            <Route path="/user/:username" element={<AuthorDetails />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
