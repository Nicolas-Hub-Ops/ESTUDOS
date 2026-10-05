import autoService from "../services/autoService.js";

//function processSearch(query) {
//    try {
//        const { manufacturer, model, year, license, color } = query;
//        const objectFilter = {};
//        
//        if(manufacturer) objectFilter.manufacturer = { $regex: manufacturer, $options: "i" };
//        if(model) objectFilter.model = { $regex: model, $options: "i" };
//        if(year) objectFilter.year = { $regex: year, $options: "i" };
//        if(license) objectFilter.license = { $regex: license, $options: "i" };
//        if(color) objectFilter.color = { $regex: color, $options: "i" };
//
//        return objectFilter;
//    } catch (error) {
//        console.log(error);
//    };
//};

function existsAuto(res, auto, success) {
    if(auto === null || auto.length == '') {
        res.status(404).json({
            status: 404,
            message: 'Auto not found'
        });
    } else {
        res.status(200).json({
            status: 200,
            message: success,
            auto
        });
    };
};

class AutoController {
    static async getAllAuto(req, res, next) {
        try {
            const autos = await autoService.getAllAuto();
            existsAuto(res, autos, 'List auto');
        } catch (error) {
            next(error);
        };
    };

    static async getAutoById(req, res, next) {
        try {
            const auto = await autoService.getAutoById(req.params.id);
            existsAuto(res, auto, 'Auto find by id');
        } catch (error) {
            next(error);
        };
    };

    static async getAutoByFilter(req, res, next) {
        try {
            //const objectFilter = processSearch(req.query);
            const auto = await autoService.getAutoByFilter(req.query);
            existsAuto(res, auto, 'Auto find by filter');
        } catch (error) {
            next(error);
        };
    };


    static async createAuto(req, res, next) {
        try {
            const auto = await autoService.createAuto(req.body);
            res.status(201).json({
                status: 201,
                message: 'Auto created successfully',
                auto,
            });      
        } catch (error) {
            next(error);
        };
    };

    static async updateAuto(req, res, next) {
        try {
            const id = req.params.id;
            const auto = await autoService.updateAuto(id, req.body);
            existsAuto(res, auto, 'Auto updated successfully');
        } catch (error) {
            next(error);
        };
    };

    static async deleteAuto(req, res, next) {
        try {
            const id = req.params.id;
            const auto = await autoService.deleteAuto(id);
            existsAuto(res, auto, 'Auto deleted successfully')
        } catch (error) {
            next(error);
        };
    };
};

export default AutoController;