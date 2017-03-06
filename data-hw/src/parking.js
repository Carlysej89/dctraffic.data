  let read = require('./parse.js');

  function parkingData() {

    let parking = read('./traffic-data/simple_data/moving_jan_2016.csv');

    //most common violation type for parking

    let frequency = {};
     // no input in the object bracket to find answer for frequency
     //

     //making a loop ".forEach"
     parking.foreach( function propertyItem(row) {

       //call/run/execute the function
       //most common violation type for parking
       //should log out row number
       if(!frequency[row[9]]) {
         //if statements take args of what needs to happen
         //otherwise "else" do this; should give the index 9 of the row if frequency
         //falsey
          frequency[row[9]] = 1;
        } else {
          //if freq defined add 1
        }frequency[row[9]] = frequency[row[9]]++;
       //this should give back a violation type and count
     }

});
