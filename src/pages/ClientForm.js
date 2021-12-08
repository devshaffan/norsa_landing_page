import React from "react";
import PropTypes from "prop-types";


// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import './clientForm.css'
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import addClient from "../services/client";
import _uniqueId from "lodash/uniqueId";
import { getActiveClientList } from "../services/client";
import { getNextId } from "../services/client";
import { addClientImage } from "../services/client";
import "../components/Register.css";


function ClientForm(props) {
  const history = useNavigate();
  const queryParams = new URLSearchParams(window.location.search);
  const [ClientID, setClientID] = React.useState();
  const [validated, setValidated] = React.useState(false);
  const [uniqueID] = React.useState(_uniqueId("prefix-"));
  const [dealers, setDealers] = React.useState([]);
  const [file, setFile] = React.useState();
  const [fuentediEntrada, setFuentediEntrada] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [workNoOption, setWorkNoOption] = React.useState("+5999")
  const [contactNoOption, setContactNoOption] = React.useState("+5999")

  const [formData, setFormData] = React.useState({
    id: null,
    Date: "2021-01-01",
    Code: "",
    FirstName: "",
    LastName: "",
    address: "",
    idCard: "",
    WorkNo: "",
    ContactNo: "",
    WorksAt: "",
    Email: "",
    FaxNumber: "",
    Status: 2,
    MaxBorrowAmount: "",
    Dealer_id: "",
    SourceOfIncome: "",
    ExpiryDate: "",
    RecievedCreditInPast: false,
  });
  const {
    id,
    Code,
    FirstName,
    LastName,
    idCard,
    WorkNo,
    ContactNo,
    WorksAt,
    Email,
    address,
    FaxNumber,
    Status,
    MaxBorrowAmount,
    Dealer_id,
    SourceOfIncome,
    RecievedCreditInPast,
    Date,
    ExpiryDate,
  } = formData;
  const [fileForm, setFileForm] = React.useState({
    id: _uniqueId("prefix-"),
    filePath: "",
    Client_id: "",
  });


  const { children, value, index, ...other } = props;

  useEffect(() => {
    getNextId()
      .then(function (response) {
        console.log(response);
        setFormData({
          ...formData,
          ["id"]: response.data.id,
          ["Code"]: response.data.id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    getActiveClientList()
      .then(function (response) {
        console.log(response.data);
        response.data.unshift({});
        setDealers(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const validateInput = (name, value) => {
    if (name === "Code" || name === "WorksAt") {
      let pattern = new RegExp("^[a-zA-Z 0-9_.-]*$");
      if (pattern.test(value)) {
        return true;
      }
      return "No special characters";
    }
    if (name === "FirstName" || name === "LastName") {
      let pattern = new RegExp("^[a-zA-Z ]*$");
      if (pattern.test(value)) {
        return true;
      }
      return "only alphabets and spaces";
    }
    if (name === "WorkNo" || name === "FaxNumber" || name === "ContactNo" || name == "idCard") {
      let pattern = new RegExp("^[0-9 +]*$");
      if (pattern.test(value)) {
        return true;
      }
      return "only numbers or spaces";
    }

    return true;
  };

  const handleInputChange = (e) => {
    if (e.target.name == "Status") {
      setFormData({ ...formData, [e.target.name]: !Status });
      return;
    }
    if (e.target.name == "RecievedCreditInPast") {
      setFormData({ ...formData, [e.target.name]: !RecievedCreditInPast });
      return;
    }


    const valid = validateInput(e.target.name, e.target.value);
    if (valid != true) {
      alert(valid);
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    if (email.length < 1) return true;
    let pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(email)) {
      return true;
    }
    return "not a valid email";
  };
  const handleFileSubmit = () => {
    console.log(uniqueID)
    const data = new FormData();
    data.append("file", file);
    data.append("id", uniqueID);
    data.append('Client_id', formData.id);
    return addClientImage(data)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const valid = validateEmail(Email);
    if (valid != true) {
      alert(valid);
      return;
    }
    setIsLoading(true)
    let fData = { ...formData }
    fData.WorkNo = workNoOption.trim() + " " + fData.WorkNo.trim()
    fData.ContactNo = contactNoOption.trim() + " " + fData.ContactNo.trim()
    addClient(fData)
      .then(function (response) {
        console.log(response)
        handleFileSubmit()
          .then(function (rsp) {
            alert("Danki! bo formulario a wordu entrega. \n Nos lo tuma kontakto kubo si nos nester di mas informashon")
            window.location.reload(false);
            console.log(rsp)
          }).catch(function (err) {
            console.log(err)
          })
      })
      .catch(function (error) {
        //alert("Server Error Try Again later")
        console.log("this is the error" + error)
      })
  };
  const handleFileChange = (event) => {
    if (event.target.files.length !== 0) {
      setFile(event.target.files[0]);
    }
  };


  return (
    <>
      <Container
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        <Row className="justify-content-center">
          <Col md="9" className="main-container">
            <Card className="form-wrapper mt-4" style={{ border: "none" }}>
              <Card.Header
                style={{ backgroundColor: "#ffffff", border: "none" }}
              >
                <Card.Title className="text-center mb-5 heading">
                  Formulario di Registrashon
                </Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit} style={{ border: "none" }}>
                  {/*<Row>
                    <Col  md="12">
                      <Form.Group>
                        <label>Date</label>
                        <Form.Control
                          required
                          placeholder="123"
                          type="date"
                          value={Date}
                          name="Date"
                          onChange={(e) => handleInputChange(e)}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a value.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row> */}
                  <Row className="padding-class">
                    <Col sm="12" lg="2">
                      <Form.Group>
                        <label className="requiredelement">Code</label>
                        <Form.Control
                          required
                          placeholder="123"
                          type="text"
                          size="lg"
                          value={Code}
                          disabled
                          name="Code"
                          style={{ padding: "20px 10px", fontSize: "14px" }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a value.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm="12" md="6" lg="5">
                      <Form.Group>
                        <label className="requiredelement">Nomber</label>
                        <Form.Control
                          required
                          placeholder="Frank"
                          // size="lg"
                          type="text"
                          value={FirstName}
                          name="FirstName"
                          className="placeholder-Class"
                          onChange={(e) => handleInputChange(e)}
                          style={{ padding: "20px 10px", fontSize: "14px" }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a value.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm="12" md="6" lg="5">
                      <Form.Group>
                        <label
                          htmlFor="exampleLastName"
                          className="requiredelement"
                        >
                          Fam
                        </label>
                        <Form.Control
                          required
                          placeholder="Semper"
                          type="text"
                          value={LastName}
                          name="LastName"
                          className="placeholder-Class"
                          // size="lg"
                          onChange={(e) => handleInputChange(e)}
                          style={{ padding: "20px 10px", fontSize: "14px" }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a value.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="padding-class">
                    <Col sm="12">
                      <Form.Group>
                        <label className="requiredelement">Adres</label>
                        <Form.Control
                          required
                          placeholder="Adres"
                          type="text"
                          value={address}
                          name="address"
                          // size="lg"
                          className="placeholder-Class"
                          style={{ padding: "20px 10px", fontSize: "14px" }}
                          onChange={(e) => handleInputChange(e)}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a value.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="padding-class">
                    <Col sm="12" md="6">
                      <Form.Group>
                        <label className="requiredelement">Sedula</label>
                        <Form.Control
                          required
                          placeholder=""
                          type="text"
                          value={idCard}
                          // size="lg"
                          name="idCard"
                          onChange={(e) => handleInputChange(e)}
                          style={{ padding: "20px 10px", fontSize: "14px" }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a value.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm="12" md="6">
                      <Form.Group>
                        <label className="requiredelement">
                          Fecha di Vensementu
                        </label>
                        <Form.Control
                          required
                          placeholder="123"
                          type="date"
                          value={ExpiryDate}
                          name="ExpiryDate"
                          // size="lg"
                          onChange={(e) => handleInputChange(e)}
                          style={{ fontSize: "14px", padding: "20px 10px" }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a value.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="padding-class">
                    <Col sm="12" md="6" lg="2">
                      <Form.Group>
                        <label className="requiredelement"> Celullar</label>
                        <Form.Control
                          as="select"
                          defaultValue=""
                          required
                          value={contactNoOption}
                          name="contactNoOption"
                          style={{ fontSize: "14px", height: "41px" }}
                          onChange={(e) => {
                            setContactNoOption(e.target.value);
                          }}
                        >
                          <option value={"+5999"}> +5999</option>
                          <option value={"+599"}> +599</option>
                          <option value={"+297"}> +297</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a value.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm="12" md="6" lg="4">
                      <Form.Group>
                        <label> &nbsp;</label>
                        <Form.Control
                          required
                          placeholder="042"
                          type="text"
                          value={ContactNo}
                          name="ContactNo"
                          className="placeholder-Class"
                          onChange={(e) => handleInputChange(e)}
                          style={{ fontSize: "14px", height: "41px" }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a value.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>

                    <Col sm="12" md="6" lg="2">
                      <Form.Group>
                        <label> Telefon</label>
                        <Form.Control
                          as="select"
                          defaultValue=""
                          required
                          value={workNoOption}
                          name="workNoOption"
                          onChange={(e) => {
                            setWorkNoOption(e.target.value);
                          }}
                          style={{ fontSize: "14px", height: "41px" }}
                        >
                          <option value={"+5999"}> +5999</option>
                          <option value={"+599"}> +599</option>
                          <option value={"+297"}> +297</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a value.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col sm="12" md="6" lg="4">
                      <Form.Group>
                        <label>&nbsp;</label>
                        <Form.Control
                          placeholder="00-0000-00"
                          type="text"
                          value={WorkNo}
                          name="WorkNo"
                          onChange={(e) => handleInputChange(e)}
                          className="placeholder-Class"
                          style={{ fontSize: "14px", height: "41px" }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a value.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row className="padding-class">
                    <Col sm="12">
                      <Form.Group>
                        <label>Email</label>
                        <Form.Control
                          placeholder="Email"
                          type="text"
                          value={Email}
                          name="Email"
                          // size="lg"
                          className="placeholder-Class"
                          onChange={(e) => handleInputChange(e)}
                          style={{ padding: "20px 10px", fontSize: "14px" }}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a value.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row className="padding-class-new">
                    <Col sm="12">
                      <Form.Group>
                        <label className="requiredelement">
                          Fuente di Entrada
                        </label>
                        <Form.Control
                          as="select"
                          defaultValue=""
                          value={fuentediEntrada}
                          name="fuentediEntrada"
                          onChange={(e) => {
                            setFuentediEntrada(e.target.value);
                          }}
                          style={{ fontSize: "14px", height: "41px" }}
                        >
                          <option></option>
                          <option value={1}> Trabou</option>
                          <option value={2}> Penshonado</option>
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a value.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  {fuentediEntrada == 1 ? (
                    <Row className="padding-class">
                      <Col sm="12">
                        <Form.Group>
                          <label className="requiredelement">
                            Ta Emplea Na
                          </label>
                          <Form.Control
                            required
                            placeholder="Ta traha na"
                            type="text"
                            value={WorksAt}
                            name="WorksAt"
                            className="placeholder-Class"
                            onChange={(e) => handleInputChange(e)}
                            style={{ padding: "20px 10px", fontSize: "14px" }}
                          ></Form.Control>
                          <Form.Control.Feedback type="invalid">
                            Please provide a value.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                  ) : null}

                  {fuentediEntrada == 2 ? (
                    <Row className="padding-class-new">
                      <Col sm="12">
                        <Form.Group>
                          <label className="requiredelement">
                            Si bo no ta emplea, kiko ta bo medio di entrada ?
                          </label>
                          <Form.Control
                            as="textarea"
                            required
                            placeholder=""
                            value={SourceOfIncome}
                            name="SourceOfIncome"
                            onChange={(e) => handleInputChange(e)}
                            style={{ padding: "20px 10px", fontSize: "14px" }}
                          ></Form.Control>
                          <Form.Control.Feedback type="invalid">
                            Please provide a value.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>
                  ) : null}
                  <Row>
                    <Col sm="12" lg="6">
                      <label className="mr-5 requiredelement">
                        A yega di tuma bon den pasado kaba?
                      </label>
                    </Col>
                    <Col sm="12" lg="6">
                      <Form.Check
                        inline
                        label="Si"
                        name="group1"
                        type="Radio"
                        className="radio-btn mt-1 "
                        name="RecievedCreditInPast"
                        checked={RecievedCreditInPast}
                        onClick={(e) => {
                          handleInputChange(e);
                        }}
                      />
                      &nbsp; &nbsp;
                      <Form.Check
                        inline
                        label="No"
                        name="group1"
                        type="Radio"
                        className="radio-btn mt-1"
                        name="RecievedCreditInPast"
                        checked={!RecievedCreditInPast}
                        onClick={(e) => {
                          handleInputChange(e);
                        }}
                      />
                    </Col>
                  </Row>
                  <Row className="padding-class-new">
                    <Col sm="12">
                      <Form.Group>
                        <label className="requiredelement">
                          Si e Kontesta ta si, serka ken?
                        </label>
                        <Form.Control
                          as="select"
                          defaultValue=""
                          placeholder="select dealer"
                          name="Dealer_id"
                          value={Dealer_id}
                          style={{ fontSize: "14px", height: "41px" }}
                          onChange={(e) => {
                            console.log(e);
                            console.log("e.target.value", e.target.value);
                            handleInputChange(e);
                          }}
                        >
                          {dealers?.map((item, index) => {
                            if (index == 0) {
                              return (
                                <option value={item.id}>
                                  Dealers : {item.Code}
                                </option>
                              );
                            }
                            return (
                              <option value={item.id}> {item.Code}</option>
                            );
                          })}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a value.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm="12">
                      <Form.Group>
                        <label className="requiredelement">
                          Porfabor agrega un potret di bo Sedula
                        </label>
                        <Form.Control
                          required
                          type="file"
                          name="profilePicture"
                          // size="lg"
                          style={{
                            fontSize: "14px",
                            height: "41px",
                            padding: "10px 0px 0px 13px",
                          }}
                          onChange={(e) => {
                            handleFileChange(e);
                          }}
                        //onChange={(e) => handleInputChange(e)}
                        ></Form.Control>
                        <Form.Control.Feedback type="invalid">
                          Please provide a value.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                  </Row>
                  {file ? (
                    <Row>
                      <Col sm="12">
                        <img
                          src={URL.createObjectURL(file)}
                          className="profilePic"
                        />
                      </Col>
                    </Row>
                  ) : (
                    <div>
                      {/* <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "20px",
                          marginTop: "10px",
                          marginLeft: "20px",
                        }}
                      >
                        <CircularProgress />
                        <div>
                          <h4
                            style={{
                              color: "#344CB7",
                              marginTop: "5px",
                              fontWeight: "500",
                            }}
                          >
                            Uplaoding image .....
                          </h4>
                        </div>
                      </Box> */}
                    </div>
                  )}
                  {/* <Row  className="padding-class">
                    <Col sm="12"  md="12">
                      <Form.Check
                        inline
                        label="Active"
                        name="group1"
                        type="Radio"
                        className="mr-5"
                        name="Status"
                        checked={Status}
                        onClick={(e) => {
                          handleInputChange(e);
                        }}
                      />
                    </Col>
                  </Row> */}
                  <Row className="text-center mt-2">
                    <Col sm="12">
                      <div className="button-wrapper">
                        <Button className="add-btn res-size" type="submit" disabled={isLoading}>
                          {isLoading ? <i class="fa fa-spinner" aria-hidden="true">Saving..</i> : <div>Save</div>}
                        </Button>
                        {/* <Link to="#">
                          <Button className="delete-btn res-size">Back</Button>
                        </Link> */}
                      </div>
                    </Col>
                  </Row>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ClientForm;

ClientForm.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};


