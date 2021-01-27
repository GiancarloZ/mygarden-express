module.exports = paginate = async (model, pageSize, pageLimit, search = {}, order = [], transform) => {
    try {
        const limit = parseInt(pageLimit, 10) || 10;
        const page = parseInt(pageSize, 10) || 1;
        console.log("herrr")
        console.log(pageSize)
        console.log(pageLimit)

        // create an options object
        let options = {
            offset: getOffset(page, limit),
            limit: limit,
        };
        console.log(page, limit)
        // check if the search object is empty
        if (Object.keys(search)) {
            options = {options, ...search};
        }

        // check if the order array is empty
        if (order && order.length) {
            options["order"] = order
        }
        // console.log(options)
        // take in the model, take in the options
        let {count, rows} = await model.findAndCountAll(options);

        // check if the transform is a function and is not null
        // if (transform && typeof transform === 'function') {
        //    rows = transform(rows);
        // }
   
        return {
            previousPage: getPreviousPage(page),
            currentPage: page,
            nextPage: getNextPage(page, limit, count),
            total: rows.length,
            limit: limit,
            data: rows
        }
    } catch (error) {
        console.log(error);
    }
}

const getOffset = (page, limit) => {
 return (page * limit) - limit;
}

const getNextPage = (page, limit, total) => {
    if ((total/limit) > page) {
        return page + 1;
    }

    return null
}

const getPreviousPage = (page) => {
    if (page <= 1) {
        return null
    }
    return page - 1;
}