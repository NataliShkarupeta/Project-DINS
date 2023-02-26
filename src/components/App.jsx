import { Layout } from "./Layout/Layout";
import { Route,Routes } from "react-router-dom";
import { HomePage } from 'pages/HomePage/HomePage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="developer"></Route>
        <Route path="painting"></Route>
        <Route path="astrology"></Route>
        <Route path="beauty"></Route>
      </Route>
    </Routes>
  );
};


