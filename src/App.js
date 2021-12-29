import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "@material-ui/styles";
import { createTheme } from "@material-ui/core/styles";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import ClientForm from "./pages/ClientForm";
import ClientNoboForm from "./pages/ClientNoboForm";
import { Forms } from "./pages/tabs";
// import { TabContainer, Tab } from "./components/tab";
import "./App.css";

const App = () => {
  const theme = createTheme();
  // const [ pathname ] = React.useState( useLocation().pathname.substring( 1 ) );
  return (
    <div>
      <ThemeProvider theme={ theme }>
        <Helmet>
          <meta charSet="utf-8" />
        </Helmet>
        <Router>
          <Navigation />
          <Routes>
            {/* <Route exact path="/" element={<TabContainer />} /> */}
            <Route path="/" element={<Forms />} />
            {/* <Route exact path="/ClientNoboForm" element={<ClientNoboForm />} /> */}
          </Routes>
          <Contact />
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
