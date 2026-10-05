import Customer from "../models/Customer.js";

function processSearch(query) {
    const { name, email } = query;
    const objectFilter = {};

    if(name) objectFilter.name = { $regex: name, $options: "i" }
    if(email) objectFilter.email = { $regex: email, $options: "i" }

    return objectFilter;

};

class CustomerService {
    static async getAllCustomers() {
        const customers = await Customer.find();
        return customers;
    };

    static async getCustomerByFilter(query) {
        const filter = processSearch(query);
        const customers = await Customer.find(filter);
        return customers;
    }

    static async getCustomerById(id) {
        const customer = await Customer.findById(id);
        return customer;
    };

    static async createCustomer(data) {
        const customer = await Customer.create(data);
        return customer;
    };

    static async updateCustomer(id, data) {
        const customer = await Customer.findByIdAndUpdate(id, data);
        return customer;
    };

    static async deleteCustomer(id) {
        const customer = await Customer.findByIdAndDelete(id);
        return customer;
    };
};

export default CustomerService;