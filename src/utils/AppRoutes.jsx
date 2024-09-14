import Home from "../components/Home";
import AssignMultipleStudents from "../components/Mentor/AssignMultipleStudents";
import AssignStudent from "../components/Mentor/AssignStudent";
import CreateMentor from "../components/Mentor/CreateMentor";
import ViewAssignedStudents from "../components/Mentor/ViewAssignedStudents";
import ViewMentors from "../components/Mentor/ViewMentors";
import CreateStudent from "../components/Student/CreateStudent";
import ViewMentor from "../components/Student/ViewPreviousMentor";
import ViewStudents from "../components/Student/ViewStudents";
import { Navigate } from "react-router-dom";

const Approutes=[
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/create-student",
        element:<CreateStudent/>
    },
    {
        path:"/view-students",
        element:<ViewStudents/>
    },
    {
        path:"/previous-mentor",
        element:<ViewMentor/>
    },
    {
        path:"/create-mentor",
        element:<CreateMentor/>
    },
    {
        path:"/view-mentors",
        element:<ViewMentors/>
    },
    {
        path:"/assign-student",
        element:<AssignStudent/>
    },
    {
        path:"/assign-students",
        element:<AssignMultipleStudents/>
    },
    {
        path:"/assigned-students",
        element:<ViewAssignedStudents/>
    },
    {
        path:"*",
        element:<Navigate to='/'/>
    },
]

export default Approutes