(function () {

    var barbellUpperDB = ['Bench Press','Military Press','Bent-over Row', 'Push Press', 'Close-grip Bench Press', 'barbell curl'];
    var barbellLowerDB = ['Back Squat','Front Squat','Deadlift', 'Stiff-legged Deadlift', 'Barbell lunge', 'Trap bar Deadlift'];
    var dumbellUpperDB = ['Dumbell Incline Bench','Dumbell Press','Dumbell Curls', 'Shoulder Laterals', 'Tricep Extension', 'Hammer curl'];
    var dumbellLowerDB = ['Dumbell Lunge','Dumbell Stiff-leg Deadlift','Dumbell Step Ups', 'Sumo Squat', 'ex5', 'ex6'];
    var cardioDB = ['Sled','Treadmill','Bike', 'sprint', 'elliptical', 'rower'];

    var upperWorkoutMain = [], upperWorkoutAccessory = [], lowerWorkoutMain = [], lowerWorkoutAccessory = [], cardioWorkout = [];

    //Testing cocatenation of workout arrays

    //totalUpperMain = barbellUpperDB.concat(dumbellUpperDB);
    //totalUpperAccessory = barbellUpperDB.concat(dumbellUpperDB);
    //totalLowerMain = barbellLowerDB.concat(dumbellLowerDB);
    //totalLowerAccessory = barbellLowerDB.concat(dumbellLowerDB);

    totalUpperMain = barbellUpperDB;
    totalUpperAccessory = dumbellUpperDB;
    totalLowerMain = barbellLowerDB;
    totalLowerAccessory = dumbellLowerDB;
    totalCardioEx = cardioDB;

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

    for (i = 0; i < workoutDivs.length; i++) {



        workoutDivs[i].innerHTML = '<ul>';
        workoutDivs[i].innerHTML += '<li>' + upperMain[i] + '</li>';
        workoutDivs[i].innerHTML += '<li>' + upperAccessory[i] + '</li>';
        workoutDivs[i].innerHTML += '<li>' + lowerMain[i] + '</li>';
        workoutDivs[i].innerHTML += '<li>' + lowerAccessory[i] + '</li>';
        workoutDivs[i].innerHTML += '<li>' + cardio[i] + '</li>';
        workoutDivs[i].innerHTML += '</ul>';

    };



})();
