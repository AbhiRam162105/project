import { ThemeProvider, BaseStyles } from "@primer/react";
import "./App.css";

import CreateNew from "./components/Navbar/CreateNew/CreateNewButton";
import Navbar from "./components/Navbar/Navbar/Navbar";
import { HorizontalRuleIcon } from "@primer/octicons-react";
import Body from "./components/Body/Body/Body";

const App = () => {
  return (
    <ThemeProvider>
      <BaseStyles>
        <div>
          <Navbar />
          <Body />
        </div>
      </BaseStyles>
    </ThemeProvider>
  );
};
export default App;
