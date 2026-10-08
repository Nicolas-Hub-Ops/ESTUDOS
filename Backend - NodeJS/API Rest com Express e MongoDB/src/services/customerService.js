import Customer from "../models/Customer.js";
import processSearch from "../utils/processSearch.js";

//function processSearch(query) {
//    const { name, email } = query;
//    const objectFilter = {};
//
//    if(name) objectFilter.name = { $regex: name, $options: "i" }
//    if(email) objectFilter.email = { $regex: email, $options: "i" }
//
//    return objectFilter;
//};

class customerService {
    static async getAll() {
        const customers = await Customer.find();
        return customers;
    };

    static async getByFilter(query) {
        const fields = ['name', 'email']
        const filter = processSearch(query, fields);
        const customers = await Customer.find(filter);
        return customers;
    }

    static async getById(id) {
        const customer = await Customer.findById(id);
        return customer;
    };

    static async create(data) {
        const customer = await Customer.create(data);
        return customer;
    };

    static async update(id, data) {
        const customer = await Customer.findByIdAndUpdate(id, data);
        return customer;
    };

    static async delete(id) {
        const customer = await Customer.findByIdAndDelete(id);
        return customer;
    };
};

export default customerService;