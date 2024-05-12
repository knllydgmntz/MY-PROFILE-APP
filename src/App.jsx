import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import RegisterUI from "./components/RegisterUI.jsx";

const router = [
  { path: "/", element: <HomePage /> },
  { path: "/signup", element: <RegisterUI /> },
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {router.map((data, key) => (
          <Route key={key} path={data.path} element={data.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
