import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Home from "./pages/Home";
import ClientForm from "./pages/ClientForm";
import ClientNoboForm from "./pages/ClientNoboForm";
import "./App.css";

const App = () => {
  const theme = createTheme();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Norsa N.V.</title>
        </Helmet>
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<ClientForm />} />
            <Route exact path="/ClientNoboForm" element={<ClientNoboForm />} />
          </Routes>
          <Contact />
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
