const removeFromArray = (array, ...remValue) => array.filter(item => !remValue.includes(item));

// {
    // for (let i = array.length - 1; i >= 0; i--) {
    // const indexValue = array.indexOf(remValue);
    // if (indexValue !== -1) {
    //     array.splice(indexValue, 1);
    // }
    // }

// Do not edit below this line
module.exports = removeFromArray;
