import { useEffect, useState } from "react";
import Topbar from "../Topbar";
import AxiosService from "../../utils/AxiosService";
import ApiRoutes from "../../utils/Apiroutes";
import toast from "react-hot-toast";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AssignMultipleStudents() {
  let [message, setMessage] = useState("");
  let [availableStudents, setAvailableStudents] = useState([]);
  let [selectedStudents, setSelectedStudents] = useState([]);

  const updateAvailableStudents = async () => {
    try {
      let res = await AxiosService.get(ApiRoutes.VIEW_STUDENTS.path);

      if (res.status === 200) {
        toast.success(res.data.message);
        alert(res.data.message);
        const availStudents = res.data.students.filter(
          (student) => !student.assignedMentor
        );

        setAvailableStudents(availStudents);
        console.log(res.data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const assignMultipleStudents = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData(e.target);
      const formprops = Object.fromEntries(formdata);
      let mentorEmail = formprops.mentorEmail;

      let res = await AxiosService.put(
        `${ApiRoutes.ASSIGN_MULTIPLE_STUDENTS.path}/${mentorEmail}`,
        { mentorEmail, studentEmails: selectedStudents }
      );

      if (res.status === 200) {
        toast.success(res.data.message);
        setMessage(res.data.message);
        setSelectedStudents([]);
        updateAvailableStudents();
        console.log(res);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    updateAvailableStudents();
  }, []);
  return (
    <>
      <Topbar />
      <div className="wrapper">
        <h2>Assign Student</h2>
        <div>
          <Form onSubmit={assignMultipleStudents}>
            <Form.Group className="mb-3">
              <Form.Label>Mentor Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Mentor Email"
                name="mentorEmail"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Students</Form.Label>
              <Form.Control
                as="select"
                multiple
                name="studentEmails"
                value={selectedStudents}
                onChange={(e) => {
                  setSelectedStudents(
                    Array.from(
                      e.target.selectedOptions,
                      (option) => option.value
                    )
                  );
                }}
              >
                {availableStudents.map((student) => (
                  <option key={student._id} value={student.studentEmail}>
                    {student.studentEmail}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>

        <h4>{message}</h4>
      </div>
    </>
  );
}

export default AssignMultipleStudents;
