import customerService from "../services/customerService.js";
import vehicleService from "../services/vehicleService.js";

class vehicleCustomerCotroller {
    static async createBoth(req, res, next) {
        try {
            const customer = await customerService.create(req.body.customer);
            const vehicleData = {
                ...req.body.vehicle,
                ownerId: customer._id,
            };
            const vehicle = await vehicleService.create(vehicleData);
            res.status(201).json({
                status: 201,
                vehicle,
            });
        } catch (error) {
            next(error);
        };
    };

    static async deleteBoth(req, res, next) {
        const customer = await customerService.delete(req.params.id);
        const vehicle = await vehicleService.deleteByFilter({ "ownerId": null });
        res.status(200).json({
            status: 200,
            message: 'Customer and vehicle by customer deleted successfully',
            customer,
            vehicle
        })
    };
}

export default vehicleCustomerCotroller;