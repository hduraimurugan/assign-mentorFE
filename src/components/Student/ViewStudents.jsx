import React, { useState, useEffect } from "react";
import Topbar from "../Topbar";
import AxiosService from "../../utils/AxiosService";
import ApiRoutes from "../../utils/Apiroutes";
import toast from "react-hot-toast";

function ViewStudents() {
  let [data, setData] = useState([]);

  const getStudents = async () => {
    try {
      let res = await AxiosService.get(ApiRoutes.VIEW_STUDENTS.path);

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
    getStudents();
  }, []);
  return (
    <>
      <Topbar />
      <div className="wrapper">
        <h2>Student Details</h2>
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Assigned Mentor Id</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td>{d.studentName}</td>
                <td>{d.studentEmail}</td>
                <td>{d.assignedMentor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ViewStudents;
