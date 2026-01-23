import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/common/ProtectedRoute";
import Followers from "./pages/Followers";
import Following from "./pages/Following";
import Search from "./components/layout/Search";
import EditProfile from "./pages/EditProfile";
import Communities from "./pages/Communities";
import CommunityDetail from "./pages/CommunityDetail";
import MyCommunities from "./pages/MyCommunities";
import CommunityMembers from "./pages/CommunityMembers";
import CreateCommunity from "./pages/CreateCommunity";
import Sidebar from "./components/layout/Sidebar";
import CreatePostPage from "./pages/CreatePostPage";

function AppLayout() {
  const location = useLocation();

  const hideSidebar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideSidebar && <Sidebar />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/create-post"
          element={
            <ProtectedRoute>
              <CreatePostPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/search"
          element={
            <ProtectedRoute>
              <Search />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile/edit"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile/:username"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile/:username/followers"
          element={
            <ProtectedRoute>
              <Followers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile/:username/following"
          element={
            <ProtectedRoute>
              <Following />
            </ProtectedRoute>
          }
        />

        <Route
          path="/communities"
          element={
            <ProtectedRoute>
              <Communities />
            </ProtectedRoute>
          }
        />

        <Route
          path="/communities/:id"
          element={
            <ProtectedRoute>
              <CommunityDetail />
            </ProtectedRoute>
          }
        />

        <Route
          path="/communities/me"
          element={
            <ProtectedRoute>
              <MyCommunities />
            </ProtectedRoute>
          }
        />

        <Route
          path="/communities/:id/members"
          element={
            <ProtectedRoute>
              <CommunityMembers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/communities/create"
          element={
            <ProtectedRoute>
              <CreateCommunity />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
