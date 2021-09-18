"use strict";


exports.validateFileType = async (req, res, next) => {
    try {
        let payload = req.files.file;
        console.log("herre",req.body);
        return errorResponse(res, req.body, 401)
        if (!payload) return errorResponse(res, "matrix file must be passed as file", 401);

        if (payload?.length > 0) {
            let filetype = payload.findIndex(pay => pay.mimetype !== "text/csv");
            if (filetype > 0) return errorResponse(res, "Only .csv files are allowed ", 401);
        } else {
            if (payload.mimetype !== "text/csv") return errorResponse(res, "Only .csv file is allowed ", 401);
        }

        return next();
    } catch (e) {
        return errorResponse(res, "Error!!! matrix csv file must be passed as file", 401);
    }
};