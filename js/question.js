let nextButton = document.querySelector('#next-button')
let previousButton = document.querySelector('#previous-button')
const firstSurvey = document.querySelector('#one')
const secondSurvey = document.querySelector('#two')
const thirdSurvey = document.querySelector('#three')
const fourthSurvey = document.querySelector('#four')
const fifthSurvey = document.querySelector('#five')
const sixthSurvey = document.querySelector('#six')
const quiz = document.querySelector('#quiz')
const submit = document.querySelector('#submit-button')
const a = document.getElementById("a")

const numberOfSurvey = document.querySelectorAll(".survey").length;


let count = 1;

nextButton.addEventListener('click', (e) => {

    e.preventDefault();

    if (count == numberOfSurvey) {

        nextButton.disabled = true;
        previousButton.disabled = false;
    }

    else {
        count++;

        nextSurvey()
        console.log("next", count)

    }
})








previousButton.addEventListener('click', (e) => {

    e.preventDefault();

    if (count == 1) {
        nextButton.disabled = true;
        previousButton.disabled = false;
    } else {
        count--;

        previousSurvey()
        console.log("previous", count)


    }
})




function nextSurvey() {

    if (count == 2) {

        firstSurvey.style.display = "none";
        previousButton.style.display = "block";
        secondSurvey.style.display = "block";
        nextButton.disabled = true;
    }

    if (count == 3) {

        secondSurvey.style.display = "none";

        thirdSurvey.style.display = "block";

        nextButton.disabled = true;
    }

    if (count == 4) {

        thirdSurvey.style.display = "none";

        fourthSurvey.style.display = "block";

        nextButton.disabled = true;
    }

    if (count == 5) {

        fourthSurvey.style.display = "none";
        fifthSurvey.style.display = "block";
        submit.style.display = "none"
        nextButton.disabled = true;
    }

    if (count == 6) {

        fifthSurvey.style.display = "none";
        nextButton.style.display = "none";
        sixthSurvey.style.display = "block";
        submit.style.display = "block"
        nextButton.disabled = true;
    }




}


function previousSurvey() {

    if (count == 5) {

        fifthSurvey.style.display = "block";
        sixthSurvey.style.display = "none";
        nextButton.style.display = "block";
        submit.style.display = "none"
        nextButton.disabled = false;
    }


    if (count == 4) {

        fourthSurvey.style.display = "block";

        fifthSurvey.style.display = "none";

        // nextButton.disabled = true;
    }

    if (count == 3) {

        thirdSurvey.style.display = "block";

        fourthSurvey.style.display = "none";

        // nextButton.disabled = true;
    }


    if (count == 2) {

        secondSurvey.style.display = "block";

        thirdSurvey.style.display = "none";

        // nextButton.disabled = true;
    }

    if (count == 1) {

        firstSurvey.style.display = "block";
        previousButton.style.display = "none";
        secondSurvey.style.display = "none";

        // nextButton.disabled = true;
    }
}


