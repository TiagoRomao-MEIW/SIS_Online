module.exports = {
    success: {
        s0: {
            code: "ProgramCreated",
            http: 201,
            type: "success"
        },
        s1: {
            http: 200,
            code: "ProgramUpdated",
            type: "success"
        },
        s2: {
            http: 200,
            code: "ProgramFound",
            type: "success"
        },
        s3: {
            http: 200,
            code: "ProgramDeleted",
            type: "success"
        },
        s4: {
            http: 200,
            code: "Deactivated",
            type: "success"
        },
        s5: {
            http: 204,
            code: "NoPrograms",
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
            code: "ProgramNotFound",
            type: "error"
        }
    }
}