
const csv = require('csv-parser');
const fs = require('fs').promises;


/**
 * @return {boolean}
 */
function IsValidInteger(words) {
    return !words.some(isNaN && hasDecimal );

}
function hasDecimal (num) {
    return num % 1 !== 0;
}


exports.echo = async (req, res) => {
    try {

        let {file} =  req.files;

        let data = await fs.readFile(file.tempFilePath);
        if(data.length <= 0)
            return errorResponse(res, "csv cannot be empty, enter a valid csv");

        let row =  data.toString().split('\n');

        let len = row.length;
        for(let i = 0 ; i < len ; i++){
            let word = row[i].split(',');
            if(word.length != len  ){
                return errorResponse(res, "Invalid csv !!!  row length must be equal to the total columns length ");
            }

            if(!IsValidInteger(word))
                return errorResponse(res, "Invalid csv type found, only integers are allowed ")

            }
        return successResponseText(res, data);



    }
    catch (e) {
        return errorResponse(res, e.message);
    }
};



exports.invert = async (req, res) => {
    try {

        let {file} =  req.files;
        let result = '';
        let finalArray = [];

        let data = await fs.readFile(file.tempFilePath);
        if(data.length <= 0)
            return errorResponse(res, "csv cannot be empty, enter a valid csv");

        let row =  data.toString().split('\n');

        let len = row.length;
        for(let i = 0 ; i < len ; i++){
            let word = row[i].split(',');
            if(word.length != len  ){
                return errorResponse(res, "Invalid csv !!!  row length must be equal to the total columns length ");
            }

            if(!IsValidInteger(word))
                return errorResponse(res, "Invalid csv type found, only integers are allowed ");
           finalArray.push(word);

        }
        console.log("finalArray",finalArray);

        for(let j = 0 ; j < finalArray.length; j++){
            console.log("each",finalArray[j][j]);
            result += finalArray[j][j].toString();
        }

        return successResponseText(res, result);



    }
    catch (e) {
        return errorResponse(res, e.message);
    }
};

exports.flatten = async (req, res) => {
    try {

        let {file} =  req.files;
        let finalArray = [];
        let result = '';

        let data = await fs.readFile(file.tempFilePath);
        if(data.length <= 0)
            return errorResponse(res, "csv cannot be empty, enter a valid csv");

        let row =  data.toString().split('\n');

        let len = row.length;
        for(let i = 0 ; i < len ; i++){
            let word = row[i].split(',');
            if(word.length != len  ){
                return errorResponse(res, "Invalid csv !!!  row length must be equal to the total columns length ");
            }

            if(!IsValidInteger(word))
                return errorResponse(res, "Invalid csv type found, only integers are allowed ");
            finalArray.push(word);
        }

        for(let j = 0 ; j < finalArray.length; j++){
            console.log("each",finalArray[j]);
            let add = '';
            if(j !== finalArray.length -1 ){
                add = ',';
            }
            result += finalArray[j].join()+add;
        }


        return successResponseText(res, result);



    }
    catch (e) {
        return errorResponse(res, e.message);
    }
};


exports.sum = async (req, res) => {
    try {

        let {file} =  req.files;
        let finalArray = [];
        let sum = 0;

        let data = await fs.readFile(file.tempFilePath);
        if(data.length <= 0)
            return errorResponse(res, "csv cannot be empty, enter a valid csv");

        let row =  data.toString().split('\n');

        let len = row.length;
        for(let i = 0 ; i < len ; i++){
            let word = row[i].split(',');
            if(word.length != len  ){
                return errorResponse(res, "Invalid csv !!!  row length must be equal to the total columns length ");
            }

            if(!IsValidInteger(word))
                return errorResponse(res, "Invalid csv type found, only integers are allowed ");
            finalArray.push(word);
        }


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

exports.multiply = async (req, res) => {
    try {

        let {file} =  req.files;
        let finalArray = [];
        let product = 1;

        let data = await fs.readFile(file.tempFilePath);
        if(data.length <= 0)
            return errorResponse(res, "csv cannot be empty, enter a valid csv");

        let row =  data.toString().split('\n');

        let len = row.length;
        for(let i = 0 ; i < len ; i++){
            let word = row[i].split(',');
            if(word.length != len  ){
                return errorResponse(res, "Invalid csv !!!  row length must be equal to the total columns length ");
            }

            if(!IsValidInteger(word))
                return errorResponse(res, "Invalid csv type found, only integers are allowed ");
            finalArray.push(word);
        }
        console.log("final Array",finalArray);

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




