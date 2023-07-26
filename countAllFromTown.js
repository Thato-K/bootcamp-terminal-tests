
module.exports = function countAllFromTown(regNumbers, regStarts) {
    if (typeof regNumbers !== 'string') {
        throw new Error('regNumbers should be a string');
    }

    var regNumbersList = regNumbers.split(',');
    var townRegNumbersCount = 0;
    
    for (let i = 0; i < regNumbersList.length; i++) {
        var regNoRemovedSpaces = regNumbersList[i].trim();
        if (regNoRemovedSpaces.startsWith(regStarts)) {
            townRegNumbersCount += 1;
        }
    }
    return townRegNumbersCount;
}

//console.log(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'));