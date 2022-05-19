import * as React from "react";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import ClientForm from "./ClientForm";
// import ClientNoboForm from "./ClientNoboForm";
import "../components/Register.css";
// import { Card } from "@mui/material";
import { Link } from "react-router-dom";
// import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

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

import popupImg from '../assets/img/popupImg.jpg';


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

  const [openImage, setOpenImage] = React.useState(false);

  const handleClickOpenImage = () => {
    setOpenImage(true);
  };
  const handleCloseImage = () => {
    setOpenImage(false);
  };

  return (
    <div className="home">
      {/* image dialog content start */}
      <BootstrapDialog
        onClose={handleCloseImage}
        aria-labelledby="customized-dialog-title"
        open={openImage}
      >
        <DialogContent onClose={handleCloseImage}>
          <img src={popupImg} alt="popupImg" className="w-100 h-100" />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseImage} style={{ color: "#70a09f" }}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
      {/* image dialog content end */}

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
            Norsa N.V. ke partisipa ku entrante <b style={{ color: "red" }}>01 April 2022</b> sigiente negoshi nan ta asepta <b>UNIKAMENTE</b> Norsa Card pa hasi kompras:
          </Typography>
          <br />
          <Typography gutterBottom>
            <b>Supermerkado:</b>
          </Typography>
          <Typography gutterBottom>
            <Grid container spacing={1}>
              <Grid item xs={6} md={6}>
                Alves Supermarket
              </Grid>
              <Grid item xs={6} md={6}>
                Best Buy Supermarket
              </Grid>
              <Grid item xs={6} md={6}>
                Beurs Mini Market
              </Grid>
              <Grid item xs={6} md={6}>
                Bon Bini Supermarket
              </Grid>
              <Grid item xs={6} md={6}>
                Boulevard Supermarket
              </Grid>
              <Grid item xs={6} md={6}>
                California Supermarket
              </Grid>
              <Grid item xs={6} md={6}>
                Cost U Less
              </Grid>
              <Grid item xs={6} md={6}>
                Dande
              </Grid>
              <Grid item xs={6} md={6}>
                Goisco
              </Grid>
              <Grid item xs={6} md={6}>
                Luna Park
              </Grid>
              <Grid item xs={6} md={6}>
                Mangusa Supermarket
              </Grid>
            </Grid>
          </Typography>
          <br />
          <Typography gutterBottom>
            <b>Negoshi nan:</b>
          </Typography>
          <Typography gutterBottom>
            <Grid container spacing={1}>
              <Grid item xs={6} md={6}>
                Aura Fashion
              </Grid>
              <Grid item xs={6} md={6}>
                Balanis
              </Grid>
              <Grid item xs={6} md={6}>
                Bon Prijs
              </Grid>
              <Grid item xs={6} md={6}>
                Building Depot
              </Grid>
              <Grid item xs={6} md={6}>
                Buy Wise
              </Grid>
              <Grid item xs={6} md={6}>
                Complete Home & Electronics
              </Grid>
              <Grid item xs={6} md={6}>
                Coqueta’s
              </Grid>
              <Grid item xs={6} md={6}>
                Fashion City
              </Grid>
              <Grid item xs={6} md={6}>
                Hello
              </Grid>
              <Grid item xs={6} md={6}>
                Hi-Fi Fashions
              </Grid>
              <Grid item xs={6} md={6}>
                Kriss Kross
              </Grid>
              <Grid item xs={6} md={6}>
                La Curacao
              </Grid>
              <Grid item xs={6} md={6}>
                Lovely Fashion
              </Grid>
              <Grid item xs={6} md={6}>
                Machoo
              </Grid>
              <Grid item xs={6} md={6}>
                Mister & Miss Exclusive
              </Grid>
              <Grid item xs={6} md={6}>
                Muebleria di Credito
              </Grid>
              <Grid item xs={6} md={6}>
                Multitronics
              </Grid>
              <Grid item xs={6} md={6}>
                P.K. Electronics
              </Grid>
              <Grid item xs={6} md={6}>
                Real Size
              </Grid>
              <Grid item xs={6} md={6}>
                Senjor Barata
              </Grid>
              <Grid item xs={6} md={6}>
                Shivam
              </Grid>
            </Grid>
          </Typography>
          <br />
          <Typography gutterBottom>
            <b style={{ color: "red" }}>(Tur otro negoshi nan ta tuma bon di papel ahinda)</b>
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={{ color: "#70a09f" }}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
      {/* popup dialog content end */}

      <div className="tab-main-flex" style={{ margin: "40px", height: "300px", flexDirection: "column" }}>
        <div className="topPopupButton">
          <Button className="customDialogButton" variant="outlined" onClick={handleClickOpen}>
            Komunikado
          </Button>
        </div>
        <div class="cards">
          <Link to='/clientForm' style={{ all: "unset" }}>
            <div class="card card-1">
              <div className="buttonText">
                Kliente Eksistente
              </div>
            </div>
          </Link>
          <Link to='/clientNoboForm' style={{ all: "unset" }}>
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
