"use strict";

module.exports = {
    convertTimestamp :(d)=>{
        if (!(d instanceof Date))
            return undefined;
        d.setTime(d.getTime() - new Date().getTimezoneOffset() * 60 * 1000);
        return d.getTime();
    }
}