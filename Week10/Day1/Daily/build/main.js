"use strict";
function validateUnionType(value, allowedTypes) {
    for (let type in allowedTypes) {
        if (typeof value === type) {
            return true;
        }
    }
    return false;
}
