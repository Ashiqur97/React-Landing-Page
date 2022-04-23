// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// // import ReactDOM from 'react-dom'

// // import {BrowswerRouter,Routes,Route} from 'react-router-dom'

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Recovery from "./routes/RecoveryPage";
import CloudPage from "./routes/CloudPage";
import ContactPage from "./routes/ContactPage";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/cloud" element={<CloudPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
