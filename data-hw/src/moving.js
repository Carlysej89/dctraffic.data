
let read = require('./parse.js');
let dataFile = './traffic-data/simple_data/moving_jan_2016.csv';
let parsedData = read(dataFile);

function movingInfraction() {

  let movingData = parsedData('./traffic-data/simple_data/moving_jan_2016.csv');


   //for frequency Of the ticket type:
   let frequencyType = {};
   let mostCommontypeViolation = {};
   // cost and average of tickets
   let costOfTicket = 0;
   let numberOfTickets = 0;
   // total income of photo infractions
   let photoFineTotalAmount = 0;
   let amountOfPhotos = 0;
   //
    movingData.forEach(function commonInfraction(rowItem) {
      //logging this should give me the content of the index 17
      if(!frequencyType[row[17]]) {
      frequencyType[row[17]] = 1;
    } else {
      frequencyType[row[17]] = frequencyType[row[17]] + 1;
    }

    //for average fine amount
    let fineAmount = Number(row[10]);
    if (fineAmount) {
      numberOfTickets++;
      costOfTicket = fineAmount + costOfTicket;
    }

    //for total income from photo citations
    let index10 = Number(row[10]);
    if (row[9] === 'Photo') {
      photoCount++;
      photoFineTotalAmount = photoFineTotalAmount + index10;
    }


  });
//movingData.forEach end

//for most common violation type
  // console.log("this logs out the ticket type frequency", frequency);
// for: What is the average fine amount?
  // console.log('this logs out the total amount of fines collected', fineTotal);
  // console.log( 'how many tickets are there?', numberOfTickets );
  let averageFineAmount = costOfTicket/numberOfTickets;
  // console.log('What is the average fine amount?', averageFine);
//for: What was the total income from photo citations (tickettype = "Photo")?
  // console.log('What was the total income from photo citations (tickettype = "Photo")?', photoFineTotal);
//What was the total income from all moving violations?
  // console.log('What was the total income from all moving violations?', fineTotal);

/* -------------------------------------------------------- */
  /** What was the most common violation type for a moving violation?*/

  let specificViolationType = Object.keys(frequency); //this spits out a list object properties in my array
  // console.log('this logs out the most frequent violation', specificViolation);
  let highestViolationType = {
    name: 'default',
    count: 0
  };
  specificViolationType.forEach(function mostCommonViolation(violationCode){
    if (frequency[violationCode] > highestViolation.count) {
      highestViolationType.count = frequency[violationCode];
      highestViolationType.name = violationCode;
    }
  });
  let highestViolationCode = highestViolation.name;
  // console.log('What was the most common violation type for a moving violation?', highestViolationCode);
/* -------------------------------------------------------- */

  //will make a new object that will contian all of the answers I have created
  let movingAnswers = {
    'What was the most common violation type for a moving violation?': highestViolationCode,
    'What is the average fine amount?': averageFine,
    'What was the total income from photo citations (tickettype = "Photo")?': photoFineTotalAmount,
    'What was the total income from all moving violations?': fineTotal
  };


  return movingAnswers;
}
return movingInfraction();
