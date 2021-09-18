"use strict";


/***
 * Validate csv file if sent through curl or otherwise.
 * Ensure it is a valid csv and no multiple file sent
 * @param req
 * @param res
 * @param next
 * @returns {Promise<*>}
 */
exports.validateFileType = async (req, res, next) => {
    try {
        // checks file name
        let payload = req?.files?.file || req?.body?.file;

        if (!payload) return errorResponse(res, "matrix file must be passed as file", 401);

        // check if it is a single csv
        if (typeof(payload) ===  "object" &&  payload.length >1) {
            return errorResponse(res, "Error!!! only 1 csv file must be passed as file", 401);
        } else {
            if(payload?.name?.slice(payload?.name.length - 4) !==  ".csv")  return errorResponse(res, "Only .csv file is allowed ", 401)
            if ( (payload?.mimetype !== "application/octet-stream" ) && (payload?.mimetype !== "text/csv") ) return errorResponse(res, "Only .csv file now is allowed ", 401);

        }

        return next();
    } catch (e) {
        console.log(e.message);
        return errorResponse(res, "Error!!! matrix csv file must be passed as file", 401);
    }
};