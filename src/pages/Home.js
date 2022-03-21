import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ClientForm from "./ClientForm";
import ClientNoboForm from "./ClientNoboForm";
import "../components/Register.css";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState(null);

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="home">
      <div className="tab-main-flex" style={{ margin: "40px", height: "300px" }}>
        <div class="cards">
          <Link to='/clientForm' style={{all: "unset"}}>
            <div class="card card-1">
                <div className="buttonText">
                  Kliente Eksistente
                </div>
            </div>
          </Link>
          <Link to='/clientNoboForm' style={{all: "unset"}}>
            <div class="card card-2">
                <div className="buttonText">
                  Kliente Nobo
                </div>
            </div>
          </Link>
        </div>
        {/* <ButtonGroup variant="contained" style={{ padding: "10px" }}>
          <Button style={{ padding: "20px 40px" }}>
            <Link to='/clientForm' style={{all: "unset"}}>
              <div style={{ fontWeight: "bold", fontSize: "1.5vw", fontFamily: "sans-serif" }}>

                Client Form
              </div>
            </Link>
          </Button>
          <Button style={{ padding: "20px 40px" }}>
            <Link to='/clientNoboForm' style={{all: "unset"}}>
              <div style={{ fontWeight: "bold", fontSize: "1.5vw", fontFamily: "sans-serif" }}>
                Client Nobo Form
              </div>
            </Link>
          </Button>
        </ButtonGroup> */}
        {/* <Card variant="outlined">
          <Link to='/clientForm'>
            <div style={{ fontSize: "3vw", fontFamily: "sans-serif" }}>

              Clinet Form
            </div>
          </Link>
          <div style={{ opacity: 0 }}>
            bla bla bla
          </div>
          <Link to='/clientNoboForm'>
            <div style={{ fontSize: "3vw", fontFamily: "sans-serif" }}>
              Clinet Nobo Form
            </div>
          </Link>
        </Card> */}
        {/* <Tabs
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

        </Tabs> */}
      </div>
      {/* <ClientForm value={value} index={0} />
      <ClientNoboForm value={value} index={1} /> */}
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
