import React from "react";
import "./GlobalStyles/globalStyles.css";
import GlobalStateProvider from "./store/GlobalStateProvider";
import Theme from "./components/Theme";

function App() {
  return (
    <GlobalStateProvider>
      <Theme />
    </GlobalStateProvider>
  );
}

export default App;
