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

// popup dialog box imports
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          {/* <CloseIcon /> */}
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};


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

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="home">
      {/* popup dialog content start */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Komunikado
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Norsa N.V. ke partisipa ku entrante <b style={{color: "red"}}>01 April 2022</b> sigiente negoshi nan ta asepta <b>UNIKAMENTE</b> Norsa Card pa hasi kompras:
            <br/>
            <b>Supermerkado:</b> <b style={{color: "red"}}>(Por hasi kompras UNIKAMENTE na e supermerkado nan aki)</b>
          </Typography>
          <Typography gutterBottom>
            Alves Supermarket <br/>
            Best Buy Supermarket <br/>
            Beurs Mini Market <br/>
            Bon Bini Supermarket <br/>
            California Supermarket <br/>
            Cost U Less <br/>
            Dande <br/>
            Goisco <br/>
            Luna Park <br/>
            Boulevard Supermarket <br/>
          </Typography>
          <Typography gutterBottom>
            <b>Negoshi nan: (Tur otro negoshi nan ta tuma bon di papel ahinda)</b>
          </Typography>
          <Typography gutterBottom>
            Balanis Mommies Angels <br/>
            Balanis Sta Maria <br/>
            Bon Prijs <br/>
            Building Depot <br/>
            Hello <br/>
            Kriss Kross <br/>
            P.K. Electronics <br/>
            La Curacao Zeelandia <br/>
            La Curacao Super Store <br/>
            La Curacao Otrabanda <br/>
            Muebleria di Credito <br/>
            Senjor Barata <br/>
            Super Barata <br/>
          </Typography>
          <Typography gutterBottom>
            <b style={{color: "red"}}>*Nos lo sigi tene boso na altura, kual ta e negoshi nan ku lo sigi bini aserka ku ta uza Norsa Card.</b>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={{color: "#70a09f"}}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
      {/* popup dialog content end */}

      <div className="tab-main-flex" style={{ margin: "40px", height: "300px", flexDirection: "column" }}>
        <Button className="customDialogButton" variant="outlined" onClick={handleClickOpen}>
          Komunikado
        </Button>
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
