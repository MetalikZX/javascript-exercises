const convertToCelsius = function(temp) {
  const conCel = ((temp - 32) * 5/9);
  const roundStr = conCel.toFixed(1);
  const finalNumber = parseFloat(roundStr);
  return finalNumber;
};

const convertToFahrenheit = function(temp) {
  const conCel = ((9/5 * temp) + 32);
  const roundStr = conCel.toFixed(1);
  const finalNumber = parseFloat(roundStr);
  return finalNumber;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
