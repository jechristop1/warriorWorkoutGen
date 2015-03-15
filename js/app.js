(function () {

    var barbellUpperDB = ['Bench Press','Military Press','Bent-over Row', 'Push Press', 'Close-grip Bench Press', 'barbell curl'];
    var barbellLowerDB = ['Back Squat','Front Squat','Deadlift', 'Stiff-legged Deadlift', 'Barbell lunge', 'Trap bar Deadlift'];
    var dumbellUpperDB = ['Dumbell Incline Bench','Dumbell Press','Dumbell Curls', 'Shoulder Laterals', 'Tricep Extension', 'Hammer curl'];
    var dumbellLowerDB = ['Dumbell Lunge','Dumbell Stiff-leg Deadlift','Dumbell Step Ups', 'Sumo Squat', 'ex5', 'ex6'];
    var cardioDB = ['Sled','Treadmill','Bike', 'sprint', 'elliptical', 'rower'];

    var totalUpperEx = [], totalLowerEx = [], totalCardioEx = [], upperWorkout = [], lowerWorkout = [], cardioWorkout = [];

    totalUpperEx = barbellUpperDB.concat(dumbellUpperDB);
    totalLowerEx = barbellLowerDB.concat(dumbellLowerDB);
    totalCardioEx = cardioDB;

    function random(max) {
        return Math.floor(Math.random() * max);
    }


    var exerciseGenerator = function(workoutArray, exerDatabase){
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

    var upper = exerciseGenerator(upperWorkout, totalUpperEx);

    console.log( upper);

    var lower = exerciseGenerator(lowerWorkout, totalLowerEx);
    console.log(lower);

    var cardio = exerciseGenerator(cardioWorkout, totalCardioEx);
    console.log(cardio);




    var workoutDivs = document.getElementsByClassName("workoutDiv");

    for (i = 0; i < workoutDivs.length; i++) {



        workoutDivs[i].innerHTML = '<ul>';
        workoutDivs[i].innerHTML += '<li>' + upper[i] + '</li>';
        workoutDivs[i].innerHTML += '<li>' + lower[i] + '</li>';
        workoutDivs[i].innerHTML += '<li>' + cardio[i] + '</li>';
        workoutDivs[i].innerHTML += '</ul>';

    };



})();
