import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./layouts";
import "./assets/scss/layout.scss";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
