import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import App from "./App.jsx";
import { About } from "./pages/index.js";
// import { Login, Signup } from "./components/index.js";
import { Contact } from "./pages";
import Stories from "./pages/Stories/Stories.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes >
      <Route path="/" element={<App />} />
      <Route path="all-stories" element={<Stories />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route> */}
    </Routes>
  </BrowserRouter>
);
