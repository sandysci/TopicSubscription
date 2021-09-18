'use strict';

global.successResponse = (res, data, code = 200) => {
    return res.status(code).send(
        {data}

    );
};
global.successResponseText = (res, data, code = 200) => {
    return res.set('content-type', 'text/plain').status(code).send(data);
};

global.errorResponse = (res, error = "Oops. An Error Occurred", code = 500) => {
    return res.status(code).send({
        error: error
    });
};


