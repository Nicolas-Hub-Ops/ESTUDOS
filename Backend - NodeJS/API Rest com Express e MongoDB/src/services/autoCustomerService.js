import Customer from "../models/Customer.js";
import Auto from "../models/Auto.js";

class AutoCustomer {
    static async createBoth(data) {
        const customer = await Customer.create();
        const auto = await Auto.create();
    };
};

export default AutoCustomer;