
const fs = require('fs').promises;

/***
 * Validate a number is an Integer
 * @param words
 * @returns {boolean}
 */
function IsValidInteger(words) {
    return !words.some(isNaN && hasDecimal );

}

/***
 * Validate the number is a decimal or float number
 * @param num
 * @returns {boolean}
 * *
 */
function hasDecimal (num) {
    return num % 1 !== 0;
}

/***
 * Validate CSv to ensure it is not empty and it is square matrix(i.e no of row == no of column)
 * Validate each value is a valid Integer
 * @param req
 * @returns {Promise<{error: string}|{error: *}|{result: *, data: *}>}
 */

    async function  validateCSVRules(req){
    try {

        let {file} =  req?.files || req?.body;
        let finalArray = [];


        let data = await fs.readFile(file?.tempFilePath|| file) ;
        // check csv is not empty
        if(data.length <= 0)
            return {error: "csv cannot be empty, enter a valid csv"};

        let row =  data.toString().split('\n');

        let len = row.length;
        for(let i = 0 ; i < len ; i++){
            let word = row[i].split(',');
            // check number of rows == number of columns
            if(word.length !== len  ){
                return  {error:  "Invalid csv !!!  row length must be equal to the total columns length "};
            }
            // checks if it is a valid integer
            if(!IsValidInteger(word))
                return{error: "Invalid csv type found, only integers are allowed "};
            finalArray.push(word);
        }
        return  {data: finalArray,result:data};





    }
    catch (e) {
        console.log("exception",e);
        return {error:  e.message};
    }
}

/****
 * Returns the Echo of CSV matrix after validation in string format
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.echo = async (req, res) => {
    try {

        let {error,result:finalArray} = await validateCSVRules(req);
        if(error)
            return errorResponse(res, error);
        return successResponseText(res, finalArray);



    }
    catch (e) {
        return errorResponse(res, e.message);
    }
};


//NOTE for Invert:
// O(n log n)

//The example above will do only 6 iterations.
// For bigger matrix, say 100x100 it will do 4,900 iterations, this is 51% faster than any other solution provided here.
//
// The principle is simple, you on only iterate through the upper diagonal half of the matrix, because the diagonal line never changes and the bottom diagonal half being is switched together with the upper one, so there is no reason to iterate through it as well. This way, you save a lot of running time, especially in a large matrix.

/***
 * Returns the Invert of CSV matrix after validation in string format
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.invert = async (req, res) => {
    try {
    let result = '';
       let {error,data:finalArray} = await validateCSVRules(req);

        if(error)
            return errorResponse(res, error);

        finalArray.every((r, i, a) => (r.every((_, j) => (
                    // console.log(a.length,j),
                     j = a.length-j-1,
                    [ r[j], a[j][i] ] = [ a[j][i], r[j] ],
                     i < j-1
            )),

            i < finalArray.length-2,

             result+=r.join()+"\n"
        )
        );
        return successResponseText(res, result );
    }
    catch (e) {
        return errorResponse(res, e.message);
    }
};
/****
 * Returns the Flatten of CSV matrix after validation in string format
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.flatten = async (req, res) => {
    try {

        let result = '';
        let {error,data:finalArray} = await validateCSVRules(req);

        if(error)
            return errorResponse(res, error);


        for(let j = 0 ; j < finalArray.length; j++){
            console.log("each",finalArray[j]);
            let add = '';
            if(j !== finalArray.length -1 ){
                add = ',';
            }
            result += finalArray[j]+add;
        }


        return successResponseText(res, result);



    }
    catch (e) {
        return errorResponse(res, e.message);
    }
};

/****
 * Returns the sum of CSV matrix after validation in string format as a number
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.sum = async (req, res) => {
    try {

        let sum = 0;
        let {error,data:finalArray} = await validateCSVRules(req);
        if(error)
            return errorResponse(res, error);

        for(let j = 0 ; j < finalArray.length; j++){

            sum += finalArray[j].reduce((a, b) => parseInt(a) + parseInt(b), 0);
        }
        console.log("sum----",sum);

        return successResponseText(res, sum.toString());

    }
    catch (e) {
        console.log("exception",e);
        return errorResponse(res, e.message);
    }
};

/****
 * Returns the multiplication of CSV matrix after validation in string format as a number
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
exports.multiply = async (req, res) => {
    try {

        let product = 1;
        let {error,data:finalArray} = await validateCSVRules(req);

        if(error)
            return errorResponse(res, error);

        for(let j = 0 ; j < finalArray.length; j++){
            product *= finalArray[j].reduce((a, b) => parseInt(a) * parseInt(b), 1);
        }
        console.log("product----",product);

        return successResponseText(res, product.toString());

    }
    catch (e) {
        return errorResponse(res, e.message);
    }
};




