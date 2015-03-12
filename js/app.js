(function(){

    var upperEx, 
        lowerEx, 
        cardioEx,
        i;

    var barbellUpper = ['Bench Press','Military Press','Bent-over Row'];
    var barbellLower = ['Back Squat','Front Squat','Deadlift'];
    var dumbellUpper = ['Dumbell Incline Bench','Dumbell Press','Dumbell Curls'];
    var dumbellLower = ['Dumbell Lunge','Dumbell Stiff-leg Deadlift','Dumbell Step Ups'];
    var cardio = ['Sled','Treadmill','Bike'];
    
    var upperOutputDiv = document.getElementById("upperOutput");

    upperEx = barbellUpper.concat(dumbellUpper);    
    
    function generateUpperExcercise(upperEx){
        var prevRandExercise = "";
        var upperBodyExercise;
        upperOutputDiv.innerHTML = '<ul>';
        for (i = 1; i <= 4; i++) {
            prevRandExercise = upperBodyExercise;
            upperBodyExercise = upperEx[Math.floor(Math.random() * upperEx.length)];

            if (upperBodyExercise === prevRandExercise) {
                upperBodyExercise = upperEx[Math.floor(Math.random() * upperEx.length)];
            };   
            upperOutputDiv.innerHTML += '<li>' + upperBodyExercise + '</li>';
        };
        upperOutputDiv.innerHTML += '</ul>';


    };

    generateUpperExcercise(upperEx);




})();