import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Home from "./pages/Home";
import "./App.css";

const App = () => {
  const theme = createTheme();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Helmet>
          <meta charSet="utf-8" />
          <title> Norsa N.V.</title>
          {/* <link rel="canonical" href="http://mysite.com/example" /> */}
        </Helmet>
        <Router>
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
          <Contact />
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
