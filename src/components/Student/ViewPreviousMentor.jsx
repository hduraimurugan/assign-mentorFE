import React, { useState, useEffect } from "react";
import Topbar from "../Topbar";
import AxiosService from "../../utils/AxiosService";
import ApiRoutes from "../../utils/Apiroutes";
import toast from "react-hot-toast";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ViewPreviousMentor() {
  let [message, setMessage] = useState("");
  let [data, setData] = useState([]);

  const getPreviousMentor = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData(e.target);
      const formprops = Object.fromEntries(formdata);
      let studentEmail = formprops.studentEmail;

      let res = await AxiosService.get(
        `${ApiRoutes.VIEW_PREVIOUS_MENTOR.path}/${studentEmail}`
      );

      if (res.status === 200) {
        toast.success(res.data.message);
        setMessage(res.data.message);
        setData(res.data.mentor);
        console.log(res.data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    sessionStorage.clear();
  }, []);
  return (
    <>
      <Topbar />
      <div className="wrapper">
        <h2>Previous Mentor of Student</h2>
        <div>
          <Form onSubmit={getPreviousMentor}>
            <Form.Group className="mb-3">
              <Form.Label>Student Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Student's Email"
                name="studentEmail"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <h4>{message}</h4>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr key={data._id}>
              <th scope="row">{data._id}</th>
              <td>{data.mentorName}</td>
              <td>{data.mentorEmail}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewPreviousMentor;
