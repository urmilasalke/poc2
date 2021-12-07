import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../style/admission.css";
const Admission = () => {
  return (
    <>
      <div>
        <section className="school"></section>
        <Breadcrumb>
          <Breadcrumb.Item href="/" className="item">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="item">
            Admission
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <h5 className="h5">Grades Available!</h5>
      <ul>
        <Link to="/preprimary" style={{ textDecoration: "none" }}>
          <li>Pre-primary</li>
        </Link>
        <Link to="/primary" style={{ textDecoration: "none" }}>
          <li>Primary</li>
        </Link>
        <Link to="/secondary" style={{ textDecoration: "none" }}>
          <li>Secondary</li>
        </Link>
      </ul>
    </>
  );
};

export default Admission;
