// Calculator Program - the parts that make it function

const display = document.getElementById("display");

function appendToDisplay(input){  /* what makes the button on selection enter value to the calculator display screen   */
    display.value += input;
}

function clearDisplay(){/*  The function to reset the display linked to the html file operator class clear display  */
    display.value = "";
}

function calculate(){
    try{ // the try and the catch below are to help where a sum is not completed i.e. 2 +=
        display.value =eval(display.value);// eval is basically a built in calculator evaluates the value in the display
    }
    catch(error){ // where a sum is typed in incompleted 
        display.value = "Error"; //displays error
    }    
}

