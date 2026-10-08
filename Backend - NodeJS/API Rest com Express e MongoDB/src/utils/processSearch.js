function processSearch(query, filters) {
    const objectFilter = {};

    for(const filter in filters) {
        if(query[filter]) {
            objectFilter[filter] = { $regex: query[filter], $options: "i" }
        };
    };

    return objectFilter;
};

export default processSearch;