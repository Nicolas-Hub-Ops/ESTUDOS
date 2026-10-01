import Client from "../models/Client.js";

class clientService {
    static async getAllClients() {
        const clients = await Client.find();
        return clients;
    };

    static async getClientFilted(objectFilter) {
        const clients = await Client.find(objectFilter);
        return clients;
    }

    static async getClientById(id) {
        const client = await Client.findById(id);
        return client;
    };

    static async createClient(clientData) {
        const client = await Client.create(clientData);
        return client;
    };

    static async updateClient(id, clientData) {
        const client = await Client.findByIdAndUpdate(id, clientData);
        return client;
    };

    static async deleteClient(id) {
        const client = await Client.findByIdAndDelete(id);
        return client;
    }
};

export default clientService;