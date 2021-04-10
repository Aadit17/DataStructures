/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {
    if((coordinates.charCodeAt(coordinates[0])%2===0 && coordinates[1]%2===0)|| (coordinates.charCodeAt(coordinates[0])%2!==0 && coordinates[1]%2!==0) ){
        return false
    }
    else
        return true
};