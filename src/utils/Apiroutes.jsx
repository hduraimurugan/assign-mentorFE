const ApiRoutes={
    CREATE_STUDENT:{
        path:'/students/create'
    },
    
    VIEW_STUDENTS:{
        path:'/students'
    },

    VIEW_PREVIOUS_MENTOR:{
        path:'/students/previous-mentor'
    },

    CREATE_MENTOR:{
        path:'/mentors/create'
    },

    VIEW_MENTORS:{
        path:'/mentors'
    },

    VIEW_ASSIGNED_STUDENTS:{
        path:'/mentors/students'
    },

    ASSIGN_STUDENT:{
        path:'/mentors/assign-student'
    },

    ASSIGN_MULTIPLE_STUDENTS:{
        path:'/mentors/assign-students'
    }

}

export default ApiRoutes