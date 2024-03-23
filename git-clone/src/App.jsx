import { ThemeProvider } from "@primer/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import LoginPage from "./components/AuthPage/loginPage";
import Profile from "./components/Profile/Profile";
import Repo from "./components/RepoView/Repo";
import CreateRepo from "./components/CreateRepo/CreateRepo";
import SearchPage from "./components/SearchPage/SearchPage";

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/auth" element={<LoginPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/repoView" element={<Repo />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/createRepo" element={<CreateRepo />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};
export default App;
