module.exports = {
    success: {
        s0: {
            code: "CourseCreated",
            http: 201,
            type: "success"
        },
        s1: {
            http: 200,
            code: "CourseUpdated",
            type: "success"
        },
        s2: {
            http: 200,
            code: "CourseFound",
            type: "success"
        },
        s3: {
            http: 200,
            code: "CourseDeleted",
            type: "success"
        },
        s4: {
            http: 200,
            code: "Deactivated",
            type: "success"
        },
        s5: {
            http: 204,
            code: "NoCourses",
            type: "success"
        },
        s6: {
            http: 200,
            code: "Activated",
            type: "success"
        }
    },
    error: {
        e0: {
            http: 404,
            code: "CourseNotFound",
            type: "error"
        }
    }
}