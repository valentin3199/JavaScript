

// var tototalVotes = 0;

// var food1 = {
//     name: 'Laura',
//     votes: 0
// };
// var food2 = {
//     name: 'Vali',
//     votes: 0
// };

// function vote(food){
//     food.votes ++;
//     tototalVotes ++;
// }
// while(tototalVotes < 10) {
//     var choise =prompt('To vote for Laura,type 1 . To vote for Vali,type 2.')
//     if(choise === '1'){
//         vote(food1);
//     }else if(choise === '2') {
//         vote(food2)
//     }
// }
// console.log('Results:');
// console.log('Laura ' + food1.votes + ' votes');
// console.log('Vali ' + food2.votes + ' votes')
// if(food1.votes < food2.votes) {
//     food2.name + 'It is the favorite'
// }else if (food1.votes > food2.votes) {
//     food1.name + 2'It is the Favorite'
// }else{
//     'It is egal'
// }





// //Create the totalVotes variable
// var totalVotes = 0;

// //create player1 and player2 objects
// var player1 = {
//     name: 'Rafel Nadal',
//     votes: 0
// };
// var player2 = {
//     name: 'Novak Djokovic',
//     votes: 0
// };

// //build the vote function
// function vote(player){
//     player.votes ++;
//     totalVotes ++;
// }
// //ask for votes
// while(totalVotes < 10) {
//     //get the vote: 1 or 2
//     var choice = prompt('To vote Rafael Nadal, type 1. To vote Novak Djokovic, type 2,');
//     //1 -> Rafael, 2 -> Novak
//     if(choice === '1'){
//         //vote to Rafel
//         vote(player1);
//     }else if ( choice === '2'){
//         vote(player2);
//     }
// }
//  //Results:
// console.log('Results:');
// console.log('Rafael Nadal:' + player1.votes + 'votes.');
// console.log('Novak Djokovic:' + player2.votes + 'votes.');
// //who is the favourite to win
// if(player1.votes > player2.votes){
//     player1.name + 'is the favorite';
// }else if(player1.votes < player2.votes){
//     player2.name + ' is the favorite';
// }else{
//     console.log('No favorite to win');
// }



// //outside functions
// var a = 1;
// var b = a;
// a++; //a becomes 2
// console.log(a); //2
// console.log(b); //1

// var house1 = {
//     type: 'terraced',
//     town: 'cambridge',
// }
// var house2 = house1;
// house1.town = 'London';
// console.log(house1);
// console.log(house2);

// //back to functions
// var c = 1;

// //function that adds one to a copy of x
// function addOne(x){
//     x ++;
// }
// addOne(c); //addOne(1)
// console.log(c); //c is still 1 because only a copy of c was used inside the function

// //now try this 
// function add1() {
//     c ++;
// }
// add1();
// console.log(c); //c did not change

// //pass by reference
// var person1 = {
//     name: 'vali',
//     age: 12
// }
// var person2 = person1;

// function addYear(person){
//     person.age ++;
// }

// addYear(person1);
// console.log(person1);
// console.log(person2);






// //create the function great
// function greet(language){
//     if(language.toLowerCase() === 'english'){
//         return function(name){
//             return 'Hello ' + name + 'Good morning';
//         }
//     }else if (language.toLowerCase() === 'spanish') {
//         return function(name){
//             return 'Hola' + name + 'Buenos dias';
//         }
//     }else {
//         return function(name){
//             return 'I can only speak English or Spanish.'
//         }
//     }
// }


// //return a function
// function flower(x){
//     return function(name){
//         console.log(x + ' ' + name + '!');
//     }
// }

// flower('Hello')('pula');
// console.log(flower('Hello'));




// //biuld the calculateCost function
// function calculateCost(hotelPrice, duration, ticketPrice, budget){
//     var totalCost = hotelPrice * duration + ticketPrice;
//     console.log('The total cost of your plan is' + totalCost);
//     console.log('Your budget is £' + budget + '.');
// //decide whether the plan is within our budget
// var result;
// if(totalCost <= budget) {
//     result = 'Let\'s go';
// }else{
//     result = 'Please change your plan!'
// }
// return result;
// }


// //create a function
// function greeting() {
//     console.log('hello');
// }
// console.log(greeting);
// greeting();

// //function with a parameter
// function greeting2(firstname){
//     console.log('Hello ' + firstname + '!');
// }
// greeting2('Valentin');

// //more than one parametr
// function sum(a,b){
//     return a + b;
// }

// var x = sum(3, 7);
// console.log(x);


// //create world champion objects
// var wchMale = {
//     name: 'Usain Bolt',
//     time: 9.58
// };
// var wchFemale = {
//     name: 'Florence griffith',
//     time: 10.49
// };

// //create the client object
// var client = {};
// //get gender from the client
// client.gender = prompt('Please enter your gender: male or female');
// client.gender = client.gender.toLowerCase();
// console.log(client.gender);

// //get the time from the client
// client.time = prompt('Please enter your race time:');
// client.time = parseFloat(client.time);
// console.log(client);

// // ifff statement
// if(client.gender === 'male' && !isNaN(client.time)){
//     if(client.time > wchMale.time){
//       console.log('Congratulations! You have beaten' + wchMale.name + ',you have set a new world record:' + client.time + 'seconds.')
//     }else{
//       console.log('Sorry! You need to train harder!')
//     }
// }else if(client.gender === 'female' && !isNaN(client.time)){
//       if(client.time > wchFemale.time){
//         console.log('Congratulations! You have beaten' + wchFemale.name + ',you have set a new world record' + client.time + 'seconds.')
//       }else{
//         console.log('Sorry! You need to train harder!');
//       }

// }else{
//     console.log('Please reload the page and use a correct geneder and a correct time!');
// }




                    ////Amazing
// var car = 1000;
// var salary = 50;
// if(car > salary){
//   console.log('payment succesful!');
//   salary -= car;
// }else {
//   console.log('You don\'t have enough founds!');
// }

// var speed = 30; //..40..70

// if(speed > 70){
// console.log('You are going too fast!');
// }else if(speed < 40){
//   console.log('You are going too slow');
// }else {
//   console.log('You are speed is fine!')
// }



////Casher
//Help the cashier return the right of change

//Programme input:
    //Amount due
    //Amount paid by the customer

//Programme output:
    //Print change amount
    //Print change breakdown: notes and coins
    // console.log(50-44);
    // var x = prompt('message');


//UK Example:
    //Banknotes:
    //£50 - £20 - £10 - £5
    //Coins:
    //£2 - £1 - 50p - 20p -10p - 5p - 2p -1p



// //Arrays Quick Overview
// var shoppingList = ['bread', 'eggs' , 'milk'];
// console.log(shoppingList);
// console.log(shoppingList[1]); // eggs
// console.log(shoppingList.length);


// //  Test   create object for stundents
// var student1 = {
//   name: 'Mark',
//   grade: 80,
// };
// var student2 = {
//   name: 'John',
//   grade: 75,
// };
// var student3 = {
//   name: 'Sara',
//   grade: 90,
// };

// //Calculate the average
// var average = ((student1.grade + student2.grade + student3.grade )/3);
// average = average.toFixed(2); //Show Only first 2 numbers
// console.log(average);

// //Add more points to Mark
// var extra = 15;
// student1.grade += extra;
// console.log( student1 );



// ////////////OBJECT

// //object = collection of properties
// var myPhone = {
//     make: 'Apple',
//     model: 'Iphone XS',
//     warranty: 1,
//     color: 'silver',
// }


// console.log(myPhone);
// console.log(myPhone.model);

// //change property
// myPhone.model = 'Iphone 1'
// console.log(myPhone);

// //add new property
// myPhone.storage = '64 Go';
// console.log(myPhone); 

// //delete property
// delete myPhone.storge;
// console.log(myPhone);

// //new let's do somesthing interesting
// var x =1;
// var y = x; //y stores value 1
// x = 2;
// console.log(y) //still 1;

// //now let's do that with object

// var myOtherPhone = myPhone;
// console.log(myOtherPhone);

// //change myPhone
// myPhone.color = 'gold'
// console.log(myPhone);
// console.log(myOtherPhone);


// var z = '1' + 5;
// console.log(z);
// console.log(typeof z);

// z = '1' - 5;
// console.log(z);
// console.log(typeof z);

// z = 'one' * 2;
// console.log(z);
// console.log(typeof z);

// z = 2 * null;
// console.log(z);
// console.log(typeof z);
// console.log( 0 == false);
// console.log( null == false);
// console.log(undefined == false);
// console.log('' == false);

// //undefined == null
// console.log(undefined == null)





//null and undefind
// var x;
// console.log(x);
// console.log(typeof x);

// var y = null;
// console.log(y);
// console.log(typeof y);


// // Test
// var module1 = prompt('Module 1 mark:');
 
// var module2 = prompt('Module 2 ark:');

// var module3 = prompt('Module 3 mark:');

// var module4 = prompt('Module 4 mark:');

// var module5 = prompt('Module 5 mark:');

// // create marks variables and prompt the user to input their marks

// console.log('Your results: ')
// console.log(' Module 1 mark: ' + module1);
// console.log(' Module 2 mark: ' + module2);
// console.log(' Module 3 mark: ' + module3);
// console.log(' Module 4 mark: ' + module4);
// console.log(' Module 5 mark: ' + module5);

// //create pass variables
// var pass1 = module1 >= 60 ? 1 : 0;
// var pass2 = module2 >= 60 ? 1 : 0;
// var pass3 = module3 >= 60 ? 1 : 0;
// var pass4 = module4 >= 60 ? 1 : 0;
// var pass5 = module5 >= 60 ? 1 : 0;
// console.log(pass1);


// // Create marks variables and prompt the user to input their marks
// var numModulesPassed = pass1 + pass2 + pass3 + pass4 + pass5 ;
// console.log('You passed ' + numModulesPassed + 'modules');

// // Calculate the average
// var average = (module1 + module2 + module3 + module4 + module5)/5 ;
// average = average.toFixed(2);
// console.log('Your average mark is:' + numModulesPassed + 'moduels');

// //Create the pass variable
// var pass = (average >= 60) && (numModulesPassed >= 4);
// console.log(pass);

// //create the result variable
// var result = pass ? 'Congratulations!' : 'Fail!'
// console.log(result);



//  //Boleans
// var a = 3;
// var b = 5;
// var z = a < b ;
// console.log(z);

// //Logical Operators
// z = (a < b) && (a > 0);
// z = false || true;
// z = !true //It is oposit
// console.log(z);

// //Unary Operator
// z = a > 2 ? 'Pass' : 'Fail';
// console.log(z);

// //Logical operators with non booleans
// console.log(0 == true);
// z = 1 && 'apple';
// console.log(z);

//////////////////Test
//Task 1: Prompt the user to provide their first name and store it in a variable fistName.
// var firstName  = prompt(' Please enter your first name:');

// //Task 2: Prompt the suer to provide their last name and store it in a variable lastName.
// var lastName = prompt(' Please enter your last name: ');

// //Task 3: Prompt the user to provide their year of brith and store in a variable year as a number.
// var year = prompt('Please enter your year of birth:');
// year = parseInt(year);
// console.log(firstName, lastName, year);

// //create the variable setencel
// var sentencel = 'Hello' + firstName + ' ' + lastName + '.';

// //Calculate the user age in 2040 and store in a variabl: futureAge;
// var futureAge = 2040 - year;

// //create sentace2
// var sentance2 = 'Your age in 2040 will be ' + futureAge + '.';

// //create result variable
// var result = sentencel + '\n' +sentence2;

// //methids work with the primitive type and object type. Will be covered in detail late
// var fruit  = 'apple';
// console.log(fruit.length);
// console.log(fruit.charAt(2));
// console.log(fruit.charAt(4));

// //Concatention
// var firstName = 'Valentin';
// var lastName  = 'Nicolae';
// var fullName = firstName + ' ' + lastName ;
// console.log(fullName);

// //new Line
// var line = 'This is \n a new line'
// console.log(line);
// // TAB
// line = 'Here is \t a Tab';
// console.log(line);

///////////////////////TEST
//Speed limit: 50miles/h
//Task 1: Store the speed limit (in miles/h) in a variable speedLimitMiles.
// var speedLimitMiles = 50;
// console.log(speedLimitMiles);

// //Task 2: Calculate the spped limit in km/h and store it in a variable speedLimitKm.
// var speedLimitKm = speedLimitMiles * 1.61;
// console.log(speedLimitKm);

// //Task 3: Using JS arithmetic operations, calculate the minimum speed in miles/h which would result in a hefty fine and store it inside a variable speedFineMiles.
// var speedFineMiles = speedLimitMiles * 1.1 + 2;
// console.log(speedFineMiles.toFixed(2));

// //Task 4: Using JS arithmetic operations, calculate the minimum speed in km/h which would result in a hefty fine and store it inside a variable speedFineKm.
// var speedFineKm = speedFineMiles * 1.61;
// console.log(speedFineKm.toFixed(2));



//////////////////////////////////////////////////

// var me = 1;
// console.log(typeof me); //You find which type it is

// //fractional numbers
// var y = 2.4;

// //5.3 * 10^8
// var z = 5.3e8;
// console.log(z);

// //arithmetic operation
// var a = 4 + 9;
// console.log(a);

// a = 3 * 8;
// console.log(a);

// a = y - z;
// console.log(a) ;


  //CONSTANTS, you can't change
// const firstname = 'VALI';

      // //declare a VARIABLE and in initialize
// var livesLeft = 3;
// console.log(livesLeft);
      // //re-assign a value to our VARIABLE
// livesLeft = 2;
// console.log(livesLeft);

  //declare a veriable
// var val;
// console.log(val);

    // print something in the console
// console.log('My first poject with JavaScript!');

    //show an alert message saying H1
// window.alert('h1');







// var change = 'JS'
// document.querySelector('h1').innerHTML = change;
