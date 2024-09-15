import { useEffect } from "react";
import Topbar from "../Topbar";
import AxiosService from "../../utils/AxiosService";
import ApiRoutes from "../../utils/Apiroutes";
import toast from "react-hot-toast";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function CreateMentor() {
  const createMentor = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData(e.target);
      const formprops = Object.fromEntries(formdata);

      let res = await AxiosService.post(
        ApiRoutes.CREATE_MENTOR.path,
        formprops
      );

      if (res.status === 200) {
        toast.success(res.data.message);
        alert(res.data.message);
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
        <h2>Create Mentor</h2>

        <Form onSubmit={createMentor}>
          <Form.Group className="mb-3">
            <Form.Label>Mentor Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Mentor Name"
              name="mentorName"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mentor Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Mentor Email"
              name="mentorEmail"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default CreateMentor;
