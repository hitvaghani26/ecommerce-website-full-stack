class ApiError extends Error {
    constructor(
        statuscode,
        message = "api error occuer",
        errors = [],
        stack = ""
    ) {
        super(message)
        this.statuscode = statuscode,
            this.data = null,
            this.message = message
        this.errors = errors
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
export {ApiError}