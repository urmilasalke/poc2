import React from "react";
import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "../style/admissionform.css";
const AdmissionForm = () => {
  const [firstName, setfirstName] = useState<string>();
  const [middleName, setmiddleName] = useState<string>();
  const [lastName, setlastName] = useState<string>();
  const [admforstandard, setadmforstandard] = useState<string>();
  const [standardpass, setstandardpass] = useState<string>();
  const [dob, setdob] = useState<any>();
  const [result, setresult] = useState<any | number>(0);
  const [email, setemail] = useState<any | string>();
  const [city, setcity] = useState<string>();
  const [district, setdistrict] = useState<string>();
  const [state, setstate] = useState<string>();
  const [zip, setzip] = useState<any | number>(0);
  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log(firstName);
    console.log(middleName);
    axios
      .post(
        `http://react-env.eba-gxkskpht.us-east-2.elasticbeanstalk.com/getdata/primary/admform/`,
        {
          firstName: firstName,
          middleName: middleName,
          lastName: lastName,
          admforstandard: admforstandard,
          standardpass: standardpass,
          dob: dob,
          result: result,
          email: email,
          city: city,
          district: district,
          state: state,
          zip: zip,
        }
      )
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="admissionForm">
      <h3 className="text-center">ADMISSION FORM</h3>
      <br></br>
      <br></br>
      <Form>
        <Row>
          <Col>
            <Form.Control
              name="firstName"
              // type="string"
              data-testid="firstName"
              placeholder="First name"
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
            />
          </Col>
          <Col>
            <Form.Control
              name="middleName"
              type="string"
              data-testid="middleName"
              placeholder="Middle name"
              onChange={(e) => {
                setmiddleName(e.target.value);
              }}
            />
          </Col>
          <Col>
            <Form.Control
              name="lastName"
              type="string"
              data-testid="lastName"
              placeholder="Last name"
              onChange={(e) => {
                setlastName(e.target.value);
              }}
            />
          </Col>
        </Row>
        <br></br>

        <Row>
          <Col>
            {/* <Form.Control
              name="admforstandard"
              data-testid="admforstandard"
              placeholder="Admission for std"
            /> */}
            <Form.Select
              aria-label="Default select example"
              name="admforstandard"
              data-testid="admforstandard"
              placeholder="Admission for std"
              onChange={(e) => {
                setadmforstandard(e.target.value);
              }}
            >
              <option>Admission for std</option>
              <option value="1">I</option>
              <option value="2">II</option>
              <option value="3">III</option>
            </Form.Select>
          </Col>
          <Col>
            <Form.Control
              name="standardpass"
              type="string"
              data-testid="standardpass"
              placeholder="Standard Pass/ Studying"
              onChange={(e) => {
                setstandardpass(e.target.value);
              }}
            />
          </Col>
          <Col>
            <Form.Control
              name="result"
              type="number"
              data-testid="result"
              placeholder="Result"
              onChange={(e) => {
                setresult(e.target.value);
              }}
            />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Form.Control
              name="dob"
              data-testid="dob"
              type="date"
              placeholder="Date of Birth"
              onChange={(e) => {
                setdob(e.target.value);
              }}
            />
          </Col>
          <Col>
            <Form.Control
              name="email"
              // type="email"
              data-testid="email"
              placeholder="Email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </Col>
          <Col>
            <Form.Control
              name="city"
              data-testid="city"
              placeholder="City"
              onChange={(e) => {
                setcity(e.target.value);
              }}
            />
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Form.Control
              name="district"
              type="string"
              data-testid="district"
              placeholder="District"
              onChange={(e) => {
                setdistrict(e.target.value);
              }}
            />
          </Col>
          <Col>
            <Form.Control
              name="state"
              type="string"
              data-testid="state"
              placeholder="state"
              onChange={(e) => {
                setstate(e.target.value);
              }}
            />
          </Col>
          <Col>
            <Form.Control
              name="zip"
              type="number"
              data-testid="zip"
              placeholder="Postal Code"
              onChange={(e) => {
                setzip(e.target.value);
              }}
            />
          </Col>
        </Row>
        <br></br>
        <Button data-testid="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AdmissionForm;
