import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import "./index.css";
import AppLayout from "./components/ui/AppLayout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useEffect } from "react";
import useThemeState from "./states/useThemeState";

function App() {
  const { theme, toggleTheme } = useThemeState((state) => state);

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
    }
  }, [theme, toggleTheme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
