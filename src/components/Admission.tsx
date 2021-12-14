import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
// import { Modal } from "react-bootstrap";
// import { MainState } from "./store/AdmissionStore";
// import { useSelector, useDispatch } from "react-redux";
// import { setStudents } from "./reducers/studentReducer";
// import axios from "axios";
import "../style/admission.css";
const Admission = () => {
  // const [show, setShow] = React.useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const [tshow, tsetShow] = React.useState(false);
  // const thandleClose = () => tsetShow(false);
  // const thandleShow = () => tsetShow(true);

  // const [studentusername, setstudentusername] = React.useState("");
  // const [studentPassword, setStudentpassword] = React.useState("");

  // const [teacherusername, setteacherusername] = React.useState("");
  // const [teacherpassword, setteacherpassword] = React.useState("");

  // const students = useSelector((state: MainState) => state.student.value);
  // const dispatch = useDispatch();
  // const onSubmit = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   console.log(studentusername);
  //   console.log(studentPassword);
  //   axios
  //     .get(`http://localhost:4000/student/`)
  //     .then(({ data }) => {
  //       dispatch(setStudents(data));
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  // students &&
  //   students.map((data) => {
  //     if (studentusername === data.email) {
  //       localStorage.setItem("name", data.name);
  //       localStorage.setItem("email", data.email);
  //       localStorage.setItem("class", data.class);
  //       // localStorage.setItem("rollNo", JSON.stringify(data.rollNo));
  //       localStorage.setItem("photoid", data.photoid);
  //       localStorage.setItem("section", data.section);
  //       localStorage.setItem("bloodGroup", data.bloodGroup);
  //       localStorage.setItem("gender", data.gender);
  //     }
  //   });

  //   window.location.href = "http://localhost:3000/profile";
  // };

  // const tonSubmit = (e: React.MouseEvent) => {
  //   e.preventDefault();
  // console.log(teacherusername);
  // console.log(teacherpassword);
  // };
  return (
    <>
      <div>
        <section className="schooladm"></section>
        <Breadcrumb>
          <Breadcrumb.Item className="item">
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="item">
            Admission
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <h5 className="h5">Grades Available!</h5>
      <ul>
        <Link to="/preprimary" style={{ textDecoration: "none", color: "red" }}>
          <li>Pre-primary</li>
        </Link>
        <Link to="/primary" style={{ textDecoration: "none", color: "red" }}>
          <li>Primary</li>
        </Link>
        <Link to="/secondary" style={{ textDecoration: "none", color: "red" }}>
          <li>Secondary</li>
        </Link>
      </ul>
      {/* <div className="container">
        <div className="row">
          <div
            className="col-sm-4"
            data-testid="student-text"
            onClick={handleShow}
          >
            <h3>STUDENT LOGIN</h3>
          </div>
          <div
            className="col-sm-4"
            data-testid="teacher-text"
            onClick={thandleShow}
          >
            <h3>TEACHERS LOGIN</h3>
          </div>
          <div className="col-sm-4"></div>
        </div>
      </div> */}

      {/* {show && (
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title> Student Login </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <label>Email</label>
              <input
                type="text"
                className="inputfields"
                placeholder="email" */}
      {/* data-testid="email"
                onChange={(e) => {
                  setstudentusername(e.target.value);
                }}
              ></input>
              <br></br>
              <br></br>
              <label>Password </label>
              <input
                className="inputfields"
                type="password"
                data-testid="password" */}
      {/* placeholder="password"
                onChange={(e) => {
                  setStudentpassword(e.target.value);
                }}
              ></input>
              <br></br>
              <br></br>
              <button
                className="submitbutton"
                data-testid="submit"
                onClick={onSubmit}
              >
                Submit
              </button>
            </form>
          </Modal.Body>
        </Modal>
      )} */}

      {/* {tshow && (
        <Modal
          show={tshow}
          onHide={thandleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title> Teachers Login </Modal.Title>
          </Modal.Header>
          <Modal.Body> */}
      {/* <form>
              <label>Email</label>
              <input
                className="inputfields"
                type="text"
                data-testid="temail"
                placeholder="username"
                onChange={(e) => {
                  setteacherusername(e.target.value);
                }} */}
      {/* ></input>
              <br></br>
              <br></br>
              <label>password </label>
              <input
                type="password"
                className="inputfields"
                data-testid="tpassword"
                placeholder="password"
                onChange={(e) => {
                  setteacherpassword(e.target.value);
                }}
              ></input> */}
      {/* <br></br>
              <br></br>
              <button
                data-testid="tsubmit"
                className="submitbutton"
                onClick={tonSubmit}
              >
                Submit
              </button>
            </form>
          </Modal.Body>
        </Modal>
      )} */}
    </>
  );
};

export default Admission;
