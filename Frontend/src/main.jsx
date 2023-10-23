import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
// import ChatProvider from "./Context/chatProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <ChatProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </ChatProvider>
);
