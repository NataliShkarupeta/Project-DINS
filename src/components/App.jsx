import { Layout } from "./Layout/Layout";
import { Route,Routes } from "react-router-dom";

export const App = () => {
  return (
  <Routes>
    <Route path="/" element={<Layout/>}></Route>
  </Routes>
    )
};
