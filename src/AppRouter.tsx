import { Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";
import MyMatches from "./Pages/MyMatches/MyMatches";
import MyInvite from "./Pages/MyInvite/MyInvite";
import Settings from "./Pages/Settings/Settings";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-matches" element={<MyMatches />} />
        <Route path="/my-invites" element={<MyInvite />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
  );
};

export default AppRouter;
