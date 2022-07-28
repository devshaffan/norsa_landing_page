import React, { useEffect } from 'react';
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";
import { CSVLink, CSVDownload } from "react-csv";
import getMerchantTransaction from '../services/reports';



export default function TotalDailySalesReport() {
    const [totalSales, setTotalSales] = React.useState(null)
    const [date, setDate] = React.useState(null)
    const [filtered, setFiltered] = React.useState(false)

    useEffect(() => {
        if (!totalSales) return
        setFiltered(true)
    }, [totalSales])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!date) {
            alert("date is empty")
        }
        else {
            getMerchantTransaction(date)
                .then(res => {
                    setTotalSales(res.data)
                    console.log(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }

    }
    return (
        <div>
            <div>
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8">
                            <Card className="form-wrapper mt-4">
                                <Card.Header style={{ backgroundColor: "#F7F7F8" }}>
                                    <Card.Title as="h4" className="text-center m-3 heading">
                                        Daily Transaction Report
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col md="12">
                                                <Form.Group>
                                                    <label className="requiredelement">Date</label>
                                                    <Form.Control
                                                        required
                                                        placeholder="abcd"
                                                        type="date"
                                                        name="Title"
                                                        onChange={(e) => {
                                                            setDate(e.target.value)
                                                        }}
                                                    ></Form.Control>
                                                    <Form.Control.Feedback type="invalid">Please provide a value.</Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                        <Row className="text-center justify-content-center mt-2">
                                            <Col md="12">
                                                <div className="button-wrapper">
                                                    <Button className="btn-fill res-size" type="submit" style={{ backgroundColor: "#3AAB7B", border: "none" }}>
                                                        Filter
                                                    </Button>
                                                    {filtered && <Button className="btn-fill res-size" type="submit" style={{ backgroundColor: "#3AAB7B", border: "none" }}>
                                                        <CSVLink data={totalSales}>Download</CSVLink>
                                                    </Button>}
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}
