"use strict";


exports.validateFileType = async (req, res, next) => {
    try {
        let payload = req.files.file;
        if (!payload) return errorResponse(res, "matrix file must be passed as file", 401);

        if (payload?.length > 1) {
            return errorResponse(res, "Error!!! only 1 csv file must be passed as file", 401);
        } else {
            if (payload.mimetype !== "text/csv") return errorResponse(res, "Only .csv file is allowed ", 401);
        }

        return next();
    } catch (e) {
        return errorResponse(res, "Error!!! matrix csv file must be passed as file", 401);
    }
};