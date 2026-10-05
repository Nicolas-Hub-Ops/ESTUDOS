import Auto from "../models/Auto.js";

function processSearch(query) {
    try {
        const { manufacturer, model, year, license, color } = query;
        const objectFilter = {};
        
        if(manufacturer) objectFilter.manufacturer = { $regex: manufacturer, $options: "i" };
        if(model) objectFilter.model = { $regex: model, $options: "i" };
        if(year) objectFilter.year = { $regex: year, $options: "i" };
        if(license) objectFilter.license = { $regex: license, $options: "i" };
        if(color) objectFilter.color = { $regex: color, $options: "i" };

        return objectFilter;
    } catch (error) {
        console.log(error);
    };
};

class autoService {
    static async getAllAuto() {
        const automobiles = await Auto
            .find()
            .populate('ownerId');
        return automobiles;
    };

    static async getAutoByFilter(query) {
        const filter = processSearch(query)
        const automobiles = await Auto
            .find(filter)
            .populate('ownerId');
        return automobiles;
    };

    static async getAutoById(id) {
        const automobile = await Auto
            .findById(id)
            .populate('ownerId');    
        return automobile;
    };

    static async createAuto(data) {
        const automobile = await Auto
            .create(data)
        return automobile;
    };

    static async updateAuto(id, data) {
        const automobile = await Auto.findByIdAndUpdate(id, data);
        return automobile;
    };

    static async deleteAuto(id) {
        const automobile = await Auto.findByIdAndDelete(id);
        return automobile;
    };
};

export default autoService;