import React from "react";
import GlobalStyle from "./styles/global";
import AppRoutes from "./routes";
import AppProvider from "./hooks/index";
import { BrowserRouter as Router } from "react-router-dom";
const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <AppRoutes />
      </AppProvider>

      <GlobalStyle />
    </Router>
  );
};

export default App;
