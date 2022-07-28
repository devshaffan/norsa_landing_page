import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import Button from '@mui/material/Button';
import checkUser from "../services/auth";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();  // const [email, setEmail] = useState('');

  const handleLogout = (e) => {
    e.preventDefault()
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("refreshToken")
    navigate('/')
  }
  return (
    <div>
      <div className="navbar_wrapper">
        <div className="logo_wrapper">
          <Link to='/Home'>
            <img src="/img/norsalogo.png" className="img-fluid" alt="logo" style={{ width: "150px" }} />
          </Link>
        </div>
        <div style={{
          position: "absolute",
          right: "30px",
        }}>
          {checkUser() ?
            <>
              <Button style={{ fontSize: "15px", }} onClick={() => navigate('/report')}>
                Report
              </Button>
              &nbsp;
              <Button style={{ fontSize: "15px", color: "white", background: "red" }} onClick={handleLogout}>
                LogOut
              </Button>
            </>
            :
            <Button style={{ fontSize: "15px", color: "white", background: "green" }} onClick={() => navigate('/login')}>
              Merchant Login
            </Button>
          }

        </div>
      </div>
    </div>
  );
};

export default Navigation;
