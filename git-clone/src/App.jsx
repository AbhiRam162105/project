import { ThemeProvider, BaseStyles } from "@primer/react";
import "./App.css";

import CreateNew from "./components/Navbar/CreateNew/CreateNewButton";
import Navbar from "./components/Navbar/Navbar/Navbar";
import { HorizontalRuleIcon } from "@primer/octicons-react";

const App = () => {
  return (
    <ThemeProvider>
      <BaseStyles>
        <div>
          <Navbar />
        </div>
      </BaseStyles>
    </ThemeProvider>
  );
};
export default App;
