

let filesystem = require('fs');


module.exports = function read(path) {
  let contentsOfFile = filesystem.readFileSync(path);
  let readFile = contentsOfFile.toString();
  let rowInfo = readFile.split('\n');

  let movingData = rowInfo.map(function seperateStrings(ticketString) {
    return ticketString.split(',');
  });

  return movingData;
};
// console.log(module.exports('./moving_jan_2016.csv'));
 //read('./traffic-data/simple_data/moving_jan_2016.csv');
