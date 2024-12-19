import { Routes, Route } from "react-router";
import Home from "./Pages/Home/Home";

const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
  );
};

export default AppRouter;
