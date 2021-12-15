import React from "react";
import { useEffect } from "react";
import { MainState } from "./store/AdmissionStore";
import { useSelector, useDispatch } from "react-redux";
import { setAdmissionGrades } from "./reducers/AdmissionReducer";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "../style/secondary.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
const Secondary = () => {
  const grades = useSelector((state: MainState) => state.admission.value);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        `http://reactserver-env.eba-kkbgitpt.us-east-1.elasticbeanstalk.com/getdata/secondary`
      )
      .then(({ data }) => {
        dispatch(setAdmissionGrades(data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <section className="secondaryimg"></section>
        <Breadcrumb>
          <Breadcrumb.Item href="/" className="item">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/admission" className="item">
            Admission
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="item">
            Secondary
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Grade</th>
                  <th>Fees</th>
                  <th>Seats</th>
                </tr>
              </thead>
              <tbody>
                {grades.map((grade) => (
                  <>
                    {grade.options.map((option) => (
                      <>
                        <tr>
                          <td>{option.grade}</td>
                          <td>{option.fees}</td>
                          <td>{option.seats}</td>
                        </tr>
                      </>
                    ))}
                  </>
                ))}
              </tbody>
            </Table>
          </div>
          <div className="col-sm-2"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <Link to="/admform">
              <Button variant="info">Check For Enquire</Button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Secondary;
