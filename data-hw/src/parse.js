

let filesystem = require('fs');


function read(file) {
  let contentsOfFile = filesystem.readFileSync(file);
  let readFile = contentsOfFile.toString();
  let rowInfo = readFile.split('\n');

  let movingData = rowInfo.map(function seperateStrings(ticketString) {
    return ticketString.split(',');
  });

  return movingData;
}

// read('./traffic-data/simple_data/moving_jan_2016.csv');
