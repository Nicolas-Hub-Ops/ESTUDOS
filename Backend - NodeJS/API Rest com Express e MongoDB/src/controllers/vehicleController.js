import vehicleService from "../services/vehicleService.js";


function existsAuto(res, vehicle, success) {
    if(vehicle === null || vehicle.length == '') {
        res.status(404).json({
            status: 404,
            message: 'Vehicle not found'
        });
    } else {
        res.status(200).json({
            status: 200,
            message: success,
            vehicle
        });
    };
};

class vehicleController {
    static async getAllVehicle(req, res, next) {
        try {
            const vehicles = await vehicleService.getAll();
            existsAuto(res, vehicles, 'List Vehicles');
        } catch (error) {
            next(error);
        };
    };

    static async getVehicleById(req, res, next) {
        try {
            const vehicles = await vehicleService.getById(req.params.id);
            existsAuto(res, vehicles, 'Vehicle find by id');
        } catch (error) {
            next(error);
        };
    };

    static async getVehicleByFilter(req, res, next) {
        try {
            const vehicle = await vehicleService.getByFilter(req.query);
            existsAuto(res, vehicle, 'Vehicle find by filter');
        } catch (error) {
            next(error);
        };
    };


    static async createVehicle(req, res, next) {
        try {
            const vehicle = await vehicleService.create(req.body);
            res.status(201).json({
                status: 201,
                message: 'Vehicle created successfully',
                vehicle,
            });      
        } catch (error) {
            next(error);
        };
    };

    static async updateVehicle(req, res, next) {
        try {
            const id = req.params.id;
            const vehicle = await vehicleService.update(id, req.body);
            existsAuto(res, vehicle, 'Vehicle updated successfully');
        } catch (error) {
            next(error);
        };
    };

    static async deleteVehicle(req, res, next) {
        try {
            const id = req.params.id;
            const vehicle = await vehicleService.deleteById(id);
            existsAuto(res, vehicle, 'Vehicle deleted successfully')
        } catch (error) {
            next(error);
        };
    };
};

export default vehicleController;