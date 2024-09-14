import React, { useState } from "react";
import Topbar from "../Topbar";
import AxiosService from "../../utils/AxiosService";
import ApiRoutes from "../../utils/Apiroutes";
import toast from "react-hot-toast";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AssignStudent() {
  let [message, setMessage] = useState("");
  let [data, setData] = useState([]);

  const assignStudent = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData(e.target);
      const formprops = Object.fromEntries(formdata);

      let res = await AxiosService.put(
        ApiRoutes.ASSIGN_STUDENT.path,
        formprops
      );

      if (res.status === 200) {
        toast.success(res.data.message);
        setMessage(res.data.message);
        setData(res.data.student);
        console.log(res);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <Topbar />
      <div className="wrapper">
        <h2>Assign Student</h2>
        <div>
          <Form onSubmit={assignStudent}>
            <Form.Group className="mb-3">
              <Form.Label>Mentor Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Mentor Email"
                name="mentorEmail"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Student Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Student Email"
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
              <td>{data.studentName}</td>
              <td>{data.studentEmail}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AssignStudent;
