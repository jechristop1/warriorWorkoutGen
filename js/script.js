/*******************
Arrays and variables
********************/
var upperWorkoutMain = [], upperWorkoutAccessory = [], lowerWorkoutMain = [], lowerWorkoutAccessory = [], cardioWorkout = [];
var totalUpperMain = [], totalUpperAccessory = [], totalLowerMain = [], totalLowerAccessory = [];
var totalCardioEx = ['sprint', 'jumping jacks', 'power walk' , 'jump rope'];
var barbellUpperDB = ['Bench Press','Military Press','Bent-over Row', 'Push Press', 'Close-grip Bench Press', 'barbell curl', 'blu7', 'blu8', 'blu9', 'blu10'];
var barbellLowerDB = ['Back Squat','Front Squat','Deadlift', 'Stiff-legged Deadlift', 'Barbell lunge', 'Trap bar Deadlift', 'bll7', 'bll8', 'bll9', 'bll10'];
var dumbellUpperDB = ['Dumbell Incline Bench','Dumbell Press','Dumbell Curls', 'Shoulder Laterals', 'Tricep Extension', 'Hammer curl', 'dlu7', 'dlu8', 'dlu9', 'dlu10' ];
var dumbellLowerDB = ['Dumbell Lunge','Dumbell Stiff-leg Deadlift','Dumbell Step Ups', 'Sumo Squat', 'dll5', 'dll6', 'dll7', 'dll8', 'dll8', 'dll9', 'dll10'];
var kettlebellUpperDB = ['kbu1', 'kbu2','kbu3', 'kbu4','kbu5', 'kbu6','kbu7', 'kbu8', 'kbu9', 'kbu10'];
var kettlebellLowerDB = ['kbl1', 'kbl2','kbl3', 'kbl4','kbl5', 'kbl6','kbl7', 'kbl8', 'kbl9', 'kbl10'];
var trxUpperDB = ['TRX Chest Press', 'TRX Ys and Ts', 'TRX Bicep Curl', 'TRX Tricep Press', 'TRX Low Row', 'TRXu 6', 'TRXu 7', 'TRXu 8', 'TRXu 9', 'TRXu 10'];
var trxLowerDB = ['TRX Squat', 'TRX Lunge', 'TRXl 3', 'TRXl 4', 'TRXl 5', 'TRXl 6', 'TRXl 7', 'TRXl 4', 'TRXl 3', 'TRXl 4'];

/*******************
Make Button like checkbox
********************/
var inputs = document.getElementsByTagName("input");
var checked = document.getElementById('test');
var checkedLabel = document.getElementById('testLabel');
var labels = document.getElementsByTagName("label");

function checkCheckbox(){
    for(var i = 0; i < inputs.length; i++){
        if(inputs[i].checked === true ){
            labels[i].classList.add('checked');
        }else{
            labels[i].classList.remove('checked');
        }
    }
};

/*************************************************************
Checkbox and concat here so array is created before page loads
**************************************************************/

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', checkAndConcat);
};

var checkVal;
function checkAndConcat(e){
    checkVal = e.currentTarget;
    if(checkVal.checked){
        checkVal = e.currentTarget.value;
        if(checkVal == 'barbell'){
            totalUpperMain = totalUpperMain.concat(barbellUpperDB);
            totalLowerMain = totalLowerMain.concat(barbellLowerDB);
        }
        if(checkVal == 'dumbell'){
            totalUpperAccessory = totalUpperAccessory.concat(dumbellUpperDB);
            totalLowerAccessory = totalLowerAccessory.concat(dumbellLowerDB);
        }
        if(checkVal == 'kettlebell'){
            totalUpperAccessory = totalUpperAccessory.concat(kettlebellUpperDB);
            totalLowerAccessory = totalLowerAccessory.concat(kettlebellLowerDB); 
        }
        if(checkVal == 'trx'){
            totalUpperAccessory = totalUpperAccessory.concat(trxUpperDB);
            totalLowerAccessory = totalLowerAccessory.concat(trxLowerDB); 
        }
        if(checkVal == 'bike' && totalCardioEx.indexOf('Bike') === -1){
            totalCardioEx[totalCardioEx.length] = 'Bike';
        } 
        if(checkVal == 'treadmill' && totalCardioEx.indexOf('Treadmill') === -1){
            totalCardioEx[totalCardioEx.length] = 'Treadmill';
        }
        if(checkVal == 'elliptical' && totalCardioEx.indexOf('Elliptical') === -1){
            totalCardioEx[totalCardioEx.length] = 'Elliptical';
        }
        if(checkVal == 'sled' && totalCardioEx.indexOf('Sled') === -1){
            totalCardioEx[totalCardioEx.length] = 'Sled';
        }
        if(checkVal == 'rower' && totalCardioEx.indexOf('Rower') === -1){
            totalCardioEx[totalCardioEx.length] = 'Rower';
        }

    }
};

/*******************
Exercise Randomizer
********************/
        
// function random(max) {
//     return Math.floor(Math.random() * max);
// }

// var exerciseGenerator = function(workoutArray, exerDatabase){
    
//     for (var i = 0; i < 4; i++) {
//         var exercise = exerDatabase[random(exerDatabase.length)];
//         if (workoutArray.indexOf(exercise) === -1) {
//             workoutArray.push(exercise);
//         } else {
//             i--;
//         }
//     }
//     return workoutArray;
// }; 




function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * n--);

    // And move it to the new array.
    copy.push(array.splice(i, 1)[0]);
  }

  return copy;
}

var exerciseGenerator = function(workoutArray, exerDatabase){
    var shuffledDatabase = shuffle(exerDatabase);

    for (var i = 0; i < 4; i++) {
        var exercise = shuffledDatabase[i];
        if(exercise === undefined){
            workoutArray.push('Choose your Own Exer');
        } else {
            if (workoutArray.indexOf(exercise) === -1) {
                workoutArray.push(exercise);
            }else{
                if(exercise === undefined){
                    workoutArray.push('Choose your Own Exer');
                }
                break;
                //i--; 
            }            
        }

    }
    
    return workoutArray;
}; 


/*******************
Put Exercises in HTML
********************/


var workoutDivs = document.getElementsByClassName("workoutDiv");
var pTags = document.getElementsByTagName('p');   
var pTag, containerDiv, upperMain, upperAccessory, lowerMain, lowerAccessory, cardio;

var genButton = document.getElementsByName('generateButton');

generateButton.addEventListener('click', makeWorkouts);



function makeWorkouts(event){


     upperMain = exerciseGenerator(upperWorkoutMain, totalUpperMain);
    console.log( upperMain);

     upperAccessory = exerciseGenerator(upperWorkoutAccessory, totalUpperAccessory);
    console.log( upperAccessory);

     lowerMain = exerciseGenerator(lowerWorkoutMain, totalLowerMain);
    console.log(lowerMain);

     lowerAccessory = exerciseGenerator(lowerWorkoutAccessory, totalLowerAccessory);
    console.log(lowerAccessory);

     cardio = exerciseGenerator(cardioWorkout, totalCardioEx);
    console.log(cardio);


    for (var i = 0; i < workoutDivs.length; i++) {
        workoutDivs[i].innerHTML += '<p>' + upperMain[i] + '</p>';
        workoutDivs[i].innerHTML += '<p>' + upperAccessory[i] + '</p>';
        workoutDivs[i].innerHTML += '<p>' + lowerMain[i] + '</p>';
        workoutDivs[i].innerHTML += '<p>' + lowerAccessory[i] + '</p>';
        workoutDivs[i].innerHTML += '<p>' + cardio[i] + '</p>';
    }

    event.preventDefault();
    document.getElementById('generateButton').removeEventListener('click', makeWorkouts, false);

 };



// function resetFunction() {
//     var upperMain = [],
//     upperAccessory = [],
//     lowerMain = [],
//     lowerAccessory = [],
//     cardio = [];

//     for (var i = 0; i < workoutDivs.length; i++){
//         while (workoutDivs[i].hasChildNodes()) {
//             workoutDivs[i].removeChild(workoutDivs[i].firstChild);
//         }
            
//     }



// }








