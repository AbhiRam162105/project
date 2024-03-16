import { ThemeProvider, BaseStyles, theme } from "@primer/react";
import "./App.css";

import CreateNew from "./components/Navbar/CreateNew/CreateNewButton";
import Navbar from "./components/Navbar/Navbar/Navbar";
import { HorizontalRuleIcon } from "@primer/octicons-react";
import Body from "./components/Body/Body/Body";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Body />
      </div>
    </ThemeProvider>
  );
};
export default App;
