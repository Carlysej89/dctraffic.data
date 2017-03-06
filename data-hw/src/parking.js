  let read = require('./parse.js');

  function parkingData() {

    let parking = read('./traffic-data/simple_data/moving_jan_2016.csv');

    //most common violation type for parking

    let frequency = {};
     // no input in the object bracket to find answer for frequency
     //

     //making a loop ".forEach"
     parking.foreach(function propertyItem(row) {

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
     });

}
  //To answer different types of parking tickets issued? what was the most common
  //violation type for a parking ticket?
    let singleCitationCode = Object.keys(frequency);
    //new variable for violation type
    //Object.keys is pulling Only the type from my frequency
    let mostCommonViolation = {
        violationName : 'default',
        violationCount : 0
   //^ = placeholder that i'll fill through the foreach
 };
 //holding on to a set of "default values" that associate with the properties
 //im trying to find
  singleCitationCodeViolationCode.forEach( function commonViolation(parkingCode){
   if(frequency[parkingCode] > mostCommonViolation.violationCount) {
     mostCommonViolation.violationCount = frequency[parkingCode];
     //this connects the frequency created above and over rides the violationCount
     //defined in my most common violation object
     mostCommonViolation.violationName = parkingCode;
     //this line over rides the default violation name with the parking code
     //i defined
   }
 });

 //How many different types of parking tickets were issued?
 let commonViolationType = highestViolation.name;
  // console.log('What was the most common violation type for a parking ticket?', commonViolationType);
  //How many different types of parking tickets were issued?
  let parkingTicketType = specificViolation.length;
  // console.log('How many different types of parking tickets were issued?', parkingTicketType);
  //What state license plate gets the most tickets?
  let specificStateViolation = Object.keys(stateFrequency);
  let stateViolation = {
    name: 'default',
    count: 0
  };
  specificStateViolation.forEach(function mostFrequentStateViolation(stateViolationCode){
    if (stateFrequency[stateViolationCode] > stateViolation.count) {
      stateViolation.count = stateFrequency[stateViolationCode];
      stateViolation.name = stateViolationCode;
    }
  });
  let highestStateViolation = stateViolation.name;
  // console.log('What state license plate gets the most tickets?', highestStateViolation);


  //will make a new object that will contian all of the answers I have created
  let answersToparking = {
    'How many different types of parking tickets were issued?': parkingTicketType,
    'What was the most common violation type for a parking ticket?': commonViolationType,
    'What state license plate gets the most tickets?': highestStateViolation
  };
/* -------------------------------------------------------- */

  return answersToparking;
}

parkingViolations();
