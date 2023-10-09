import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Skills from "./Component/Skills/Skills.jsx";
import Layout from "./Layout.jsx";
import Project from "./Component/Project/Project.jsx";
import Education from "./Component/Education/Education.jsx";
import Contact from "./Component/Contact/Contact.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Layout />} />

      <Route path="skill" element={<Skills />} />
      <Route path="project" element={<Project/>}/>
      <Route path="education" element={<Education/>}/>
      <Route path="contact" element={<Contact/>}/>


    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
