import React, { useState, useEffect } from "react";
import Topbar from "../Topbar";
import AxiosService from "../../utils/AxiosService";
import ApiRoutes from "../../utils/Apiroutes";
import toast from "react-hot-toast";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ViewAssignedStudents() {
  let [data, setData] = useState([]);

  const getAssignedStudents = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData(e.target);
      const formprops = Object.fromEntries(formdata);
      let mentorEmail = formprops.mentorEmail;

      let res = await AxiosService.get(
        `${ApiRoutes.VIEW_ASSIGNED_STUDENTS.path}/${mentorEmail}`
      );

      if (res.status === 200) {
        toast.success(res.data.message);
        setData(res.data.students);
        console.log(res.data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  useEffect(() => {
    getAssignedStudents();
  }, []);
  return (
    <>
      <Topbar />
      <div className="wrapper">
        <h2>Assigned Students for a Mentor</h2>

        <Form onSubmit={getAssignedStudents}>
          <Form.Group className="mb-3">
            <Form.Label>Mentor Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Mentor's Email"
              name="mentorEmail"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <th scope="row">{d._id}</th>
                <td>{d.studentName}</td>
                <td>{d.studentEmail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewAssignedStudents;
