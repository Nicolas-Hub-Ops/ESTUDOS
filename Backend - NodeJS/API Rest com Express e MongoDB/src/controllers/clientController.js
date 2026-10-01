import clientService from "../services/clientService.js";

function processSearch(query) {
    const { name, email } = query;
    const objectFilter = {};

    if(name) objectFilter.name = { $regex: name, $options: "i" }
    if(email) objectFilter.email = { $regex: email, $options: "i" }

    return objectFilter;

};

function existsClient(res, client, success) {
    if(client === null || !client.length) {
        res.status(404).json({
            status: 404,
            message: "Client not found"
        });
    } else {
        res.status(200).json({
            status: 200,
            message: success,
            client
        })
    }
};

class ClientController {
    static async getClients(req, res, next) {
        try {
            const clients = await clientService.getAllClients();
            existsClient(res, clients, 'List of clients')
        } catch (error) {
            next(error);
        };
    };

    static async getClientById(req, res, next) {
        try {
            const client = await clientService.getClientById(req.params.id);
            existsClient(res, client, 'Client by id found')
        } catch (error){
            next(error);
        };
    };

    static async getClientFilted(req, res, next) {
        try {

            const objectFilter = processSearch(req.query);

            const clients = await clientService.getClientFilted(objectFilter);
            existsClient(res, clients, 'Client by filter found');
        } catch (error) {
            next(error);
        }
    }

    static async createClient(req, res, next) {
        try {
            const client = await clientService.createClient(req.body);
            res.status(201).json({
                status: 201,
                message: 'Client cteated successfully',
                client
            });
        } catch (error) {
            next(error);
        };
    };

    static async updateClient(req, res) {
        try {
            const id = req.params.id;
            const client = await clientService.updateClient(id, req.body);
            existsClient(res, client, 'Client updated sucessfully');
        } catch (error) {
            next(error);
        };

    };

    static async deleteClient(req, res) {
        try {
            const id = req.params.id;
            const client = await clientService.deleteClient(id);
            existsClient(res, client, 'Client deleted successfully');
        } catch (error) {
            next(error);
        }
    };
};

export default ClientController;