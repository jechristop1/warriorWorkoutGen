// (function () {
    var upperWorkoutMain = [], upperWorkoutAccessory = [], lowerWorkoutMain = [], lowerWorkoutAccessory = [], cardioWorkout = [];

    var barbellUpperDB = ['Bench Press','Military Press','Bent-over Row', 'Push Press', 'Close-grip Bench Press', 'barbell curl', 'blu7', 'blu8', 'blu9', 'blu10'];
    var barbellLowerDB = ['Back Squat','Front Squat','Deadlift', 'Stiff-legged Deadlift', 'Barbell lunge', 'Trap bar Deadlift', 'bll7', 'bll8', 'bll9', 'bll10'];
    var dumbellUpperDB = ['Dumbell Incline Bench','Dumbell Press','Dumbell Curls', 'Shoulder Laterals', 'Tricep Extension', 'Hammer curl', 'dlu7', 'dlu8', 'dlu9', 'dlu10' ];
    var dumbellLowerDB = ['Dumbell Lunge','Dumbell Stiff-leg Deadlift','Dumbell Step Ups', 'Sumo Squat', 'dll5', 'dll6', 'dll7', 'dll8', 'dll8', 'dll9', 'dll10'];
    var cardioDB = ['Sled','Treadmill','Bike', 'sprint', 'elliptical', 'rower', 'c7', 'c8' , 'c9', 'c10'];
    var kettlebellUpperDB = ['kbu1', 'kbu2','kbu3', 'kbu4','kbu5', 'kbu6','kbu7', 'kbu8', 'kbu9', 'kbu10'];
    var kettlebellLowerDB = ['kbl1', 'kbl2','kbl3', 'kbl4','kbl5', 'kbl6','kbl7', 'kbl8', 'kbl9', 'kbl10'];
    var trxUpperDB = ['TRX Chest Press', 'TRX Ys and Ts', 'TRX Bicep Curl', 'TRX Tricep Press', 'TRX Low Row', 'TRXu 6', 'TRXu 7', 'TRXu 8', 'TRXu 9', 'TRXu 10'];
    var trxLowerDB = ['TRX Squat', 'TRX Lunge', 'TRXl 3', 'TRXl 4', 'TRXl 5', 'TRXl 6', 'TRXl 7', 'TRXl 4', 'TRXl 3', 'TRXl 4'];

    var totalUpperMain = ['Push Up', 'Pull Up', '', ''];
    var totalUpperAccessory = dumbellUpperDB;
    var totalLowerMain = barbellLowerDB;
    var totalLowerAccessory = dumbellLowerDB;
    var totalCardioEx = cardioDB;
  

    var barbell = document.getElementById('barbells');
    
    if(barbell.checked){
        totalUpperMain.push('Bench Press','Military Press','Bent-over Row', 'Push Press', 'Close-grip Bench Press', 'barbell curl', 'blu7', 'blu8', 'blu9', 'blu10');
    }
        
    function random(max) {
        return Math.floor(Math.random() * max);
    }

    var mainExerciseGenerator = function(workoutArray, exerDatabase){
        for (var i = 0; i < 4; i++) {
            var exercise = exerDatabase[random(exerDatabase.length)];
            if (workoutArray.indexOf(exercise) === -1) {
                workoutArray.push(exercise);
            } else {
                --i;
            }
        }
        return workoutArray;
    };

    var accessoryExerciseGenerator = function(workoutArray, exerDatabase){
        for (var i = 0; i < 4; i++) {
            var exercise = exerDatabase[random(exerDatabase.length)];
            if (workoutArray.indexOf(exercise) === -1) {
                workoutArray.push(exercise);
            } else {
                --i;
            }
        }
        return workoutArray;
    };



    var upperMain = mainExerciseGenerator(upperWorkoutMain, totalUpperMain);
    console.log( upperMain);

    var upperAccessory = accessoryExerciseGenerator(upperWorkoutAccessory, totalUpperAccessory);
    console.log( upperAccessory);

    var lowerMain = mainExerciseGenerator(lowerWorkoutMain, totalLowerMain);
    console.log(lowerMain);

    var lowerAccessory = accessoryExerciseGenerator(lowerWorkoutAccessory, totalLowerAccessory);
    console.log(lowerAccessory);

    var cardio = mainExerciseGenerator(cardioWorkout, totalCardioEx);
    console.log(cardio);


    var workoutDivs = document.getElementsByClassName("workoutDiv");
    for (var i = 0; i < workoutDivs.length; i++) {

        workoutDivs[i].innerHTML = '<ul>';
        workoutDivs[i].innerHTML += '<li>' + upperMain[i] + '</li>';
        workoutDivs[i].innerHTML += '<li>' + upperAccessory[i] + '</li>';
        workoutDivs[i].innerHTML += '<li>' + lowerMain[i] + '</li>';
        workoutDivs[i].innerHTML += '<li>' + lowerAccessory[i] + '</li>';
        workoutDivs[i].innerHTML += '<li>' + cardio[i] + '</li>';
        workoutDivs[i].innerHTML += '</ul>';

    }




    document.getElementById("generateButton").addEventListener("click", function(event){
        document.getElementById('generatorForm').submit();
    });






// })();
