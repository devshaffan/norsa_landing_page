import * as React from "react";
import {useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ClientForm from "./ClientForm";
import ClientNoboForm from "./ClientNoboForm";
import "../components/Register.css";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState(0);

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="tab-main-flex">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="tabs"
          orientation={matchesSM ? "vertical" : undefined}
          // className="tabs-flex"
          // variant="fullWidth"
          centered
        >
          <Tab
            label="Formulario di Registrashon"
            {...a11yProps(0)}
            className="tab-styling"
          />
          <Tab
            label="Formulario pa aplikashon pa kliente nobo"
            {...a11yProps(1)}
            className="tab-styling"
          />
        </Tabs>
      </div>
      <ClientForm value={value} index={0} />
      <ClientNoboForm value={value} index={1} />
    </div>
  );
}

// import Header from "../components/Header";
// import About from "../components/About";
// import Services from "../components/Services";
// import Testimonials from "../components/Testimonials";
// import Team from "../components/Team";

// const Home = () => {
//   return (
//     <div>
//       <Header />
//       <About />
//       <Services />
//       <Testimonials />
//       <Team />
//     </div>
//   );
// };

// export default Home;
