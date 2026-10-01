import InternalError from "./InternalError.js";

class DuplicateKey extends InternalError {
    constructor(err) {
        const message = {
            status: 400,
            message: 'Already exists',
            error: 'Duplicate Key',
            code: 11000,
            key: err.keyValue,
        }
        super(400, message)
    }
}

export default DuplicateKey;