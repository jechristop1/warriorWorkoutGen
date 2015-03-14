(function(){

    var upperEx, lowerEx, cardioEx, i;

    var barbellUpper = ['Bench Press','Military Press','Bent-over Row', 'Push Press', 'Close-grip Bench Press'];
    var barbellLower = ['Back Squat','Front Squat','Deadlift', 'Stiff-legged Deadlift', 'Barbell lunge'];
    var dumbellUpper = ['Dumbell Incline Bench','Dumbell Press','Dumbell Curls', 'Shoulder Laterals', 'Tricep Extension'];
    var dumbellLower = ['Dumbell Lunge','Dumbell Stiff-leg Deadlift','Dumbell Step Ups', 'Sumo Squat'];
    var cardio = ['Sled','Treadmill','Bike'];
    
    var upperOutputDiv = document.getElementById("upperOutput");

    upperEx = barbellUpper.concat(dumbellUpper);
    lowerEx = barbellLower.concat(dumbellLower);
    
    //function generateUpperExcercise(upperEx){
    //    var prevRandExercise = "";
    //    var upperBodyExercise;
    //    upperOutputDiv.innerHTML = '<ul>';
    //    for (i = 1; i <= 4; i++) {
    //        prevRandExercise = upperBodyExercise;
    //        upperBodyExercise = upperEx[Math.floor(Math.random() * upperEx.length)];
    //
    //        if (upperBodyExercise === prevRandExercise) {
    //            upperBodyExercise = upperEx[Math.floor(Math.random() * upperEx.length)];
    //        };
    //        upperOutputDiv.innerHTML += '<li>' + upperBodyExercise + '</li>';
    //    };
    //    upperOutputDiv.innerHTML += '</ul>';
    //
    //
    //};

    //generateUpperExcercise(upperEx);


    var theWorkout = [];

    function random(max) {
        return Math.floor(Math.random() * max);
    }

    for (var i = 0; i < 2; i++) {
        var upperBodyExercise = upperEx[random(upperEx.length)];
        var lowerBodyExercise = lowerEx[random(lowerEx.length)];
        if (theWorkout.indexOf(upperBodyExercise) === -1) {
            theWorkout.push(upperBodyExercise);
        } else {
            --i;
        }
        if (theWorkout.indexOf(lowerBodyExercise) === -1) {
            theWorkout.push(lowerBodyExercise);
        } else {
            --i;
        }
    }


    console.log(theWorkout);









})();















