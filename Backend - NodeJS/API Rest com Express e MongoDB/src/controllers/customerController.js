import CustomerService from "../services/customerService.js";

function existsCustomer(res, customer, success) {
    if(customer === null || customer.length == '') {
        res.status(404).json({
            status: 404,
            message: "Customer not found",
        });
    } else {
        res.status(200).json({
            status: 200,
            message: success,
            customer,
        });
    };
};

class CustomerController {
    static async getAllCustomers(req, res, next) {
        try {
            const customers = await CustomerService.getAllCustomers();
            existsCustomer(res, customers, 'List of customers');
        } catch (error) {
            next(error);
        };
    };

    static async getCustomerById(req, res, next) {
        try {
            const customer = await CustomerService.getCustomerById(req.params.id);
            existsCustomer(res, customer, 'Customer by id found');
        } catch (error){
            next(error);
        };
    };

    static async getCustomerByFilter(req, res, next) {
        try {
            const customers = await CustomerService.getCustomerByFilter(req.query);
            existsCustomer(res, customers, 'Customer by filter found');
        } catch (error) {
            next(error);
        };
    };

    static async createCustomer(req, res, next) {
        try {
            const customer = await CustomerService.createCustomer(req.body);
            res.status(201).json({
                status: 201,
                message: 'Customer created successfully',
                customer,
            });
        } catch (error) {
            next(error);
        };
    };

    static async updateCustomer(req, res) {
        try {
            const id = req.params.id;
            const customer = await CustomerService.updateCustomer(id, req.body);
            existsCustomer(res, customer, 'Customer updated sucessfully');
        } catch (error) {
            next(error);
        };
    };

    static async deleteCustomer(req, res) {
        try {
            const id = req.params.id;
            const customer = await CustomerService.deleteCustomer(id);
            existsCustomer(res, customer, 'Customer deleted successfully');
        } catch (error) {
            next(error);
        };
    };
};

export default CustomerController;