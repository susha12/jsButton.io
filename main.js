let time = { startTime: NaN, endTime: NaN };
let button = document.body.querySelector('.span.one');
let buttonTwo = document.body.querySelector('.span.two');
let buttonThree = document.body.querySelector('.span.three');

let textareOne = document.querySelector("#w3review");
// box_color
let boxColor = document.querySelector(".box_color");
let boxColorTop = 0;
let boxColorLeft = 0;
// inner letter
let innerLetter = document.querySelectorAll(".letter");



button.addEventListener('mousedown', button_mouseDownHandler);

function button_mouseDownHandler() {
  button.removeEventListener('mousedown', button_mouseDownHandler);
  button.addEventListener('mouseup', button_mouseUpHandler);
  time.startTime = Date.now();
}

function button_mouseUpHandler() {
  button.removeEventListener('mouseup', button_mouseUpHandler);
  button.addEventListener('mousedown', button_mouseDownHandler);
  time.endTime = Date.now();
  inputTimeTwo(time);
}
    // Array
    const alphabet_number = ['1','2','3','4','5','6'];
    const alphabet_one = ['А','Б','В','Г','Д','Е'];
    const alphabet_two = ['Ё','Ж','З','И','Й','К'];
    const alphabet_three = ['Л','М','Н','О','П','Р'];
    const alphabet_four = ['С','Т','У','Ф','Х','Ц'];
    const alphabet_five = ['Ч','Ш','Щ','Ъ','Ы','Ь'];
    const alphabet_six = ['Ы','Ь','Э','Ю','Я',' '];

const MILLESECOND_TO_SECOND = 1000;
// alphabet
let number = 1;
let block = 0;
function inputTimeTwo({ startTime, endTime }) {
  let elapsedTime = (endTime - startTime) / MILLESECOND_TO_SECOND;
  if (number >6){
      number = 1;
  }
    if(elapsedTime <0.5){

        boxColorTop += 36;
        if(boxColorTop < 200){
            boxColor.style.top = boxColorTop + "px";
            if (number >=6){
                number = 0;
            }
            number+=1;
        }
        else{
        boxColorTop = 0;
        boxColor.style.top = boxColorTop + "px";
        number = 1;
        console.log(number);
       }

     }
    
    else if(elapsedTime >= 0.5){
        button.style.display = "none";
        buttonTwo.style.display = "flex";
        boxColorTop=0;

        boxColor.style.top = boxColorTop + "px";
        
            if (number == 1){
                innerLetter[0].innerHTML = alphabet_one[0];
                innerLetter[1].innerHTML = alphabet_one[1];
                innerLetter[2].innerHTML = alphabet_one[2];
                innerLetter[3].innerHTML = alphabet_one[3];
                innerLetter[4].innerHTML = alphabet_one[4];
                innerLetter[5].innerHTML = alphabet_one[5];
                block = 1;
                number=1;
            }
            else if (number == 2){
                innerLetter[0].innerHTML = alphabet_two[0];
                innerLetter[1].innerHTML = alphabet_two[1];
                innerLetter[2].innerHTML = alphabet_two[2];
                innerLetter[3].innerHTML = alphabet_two[3];
                innerLetter[4].innerHTML = alphabet_two[4];
                innerLetter[5].innerHTML = alphabet_two[5];
                block = 2;
                number=1;
            }
            else if (number == 3){
                innerLetter[0].innerHTML = alphabet_three[0];
                innerLetter[1].innerHTML = alphabet_three[1];
                innerLetter[2].innerHTML = alphabet_three[2];
                innerLetter[3].innerHTML = alphabet_three[3];
                innerLetter[4].innerHTML = alphabet_three[4];
                innerLetter[5].innerHTML = alphabet_three[5];
                block = 3;
                number=1;
            }
            else if (number == 4){
                innerLetter[0].innerHTML = alphabet_four[0];
                innerLetter[1].innerHTML = alphabet_four[1];
                innerLetter[2].innerHTML = alphabet_four[2];
                innerLetter[3].innerHTML = alphabet_four[3];
                innerLetter[4].innerHTML = alphabet_four[4];
                innerLetter[5].innerHTML = alphabet_four[5];
                block = 4;
                number=1;
            }
            else if (number == 5){
                innerLetter[0].innerHTML = alphabet_five[0];
                innerLetter[1].innerHTML = alphabet_five[1];
                innerLetter[2].innerHTML = alphabet_five[2];
                innerLetter[3].innerHTML = alphabet_five[3];
                innerLetter[4].innerHTML = alphabet_five[4];
                innerLetter[5].innerHTML = alphabet_five[5];
                block = 5;
                number=1;
            }
            else if (number == 6){
                innerLetter[0].innerHTML = alphabet_six[0];
                innerLetter[1].innerHTML = alphabet_six[1];
                innerLetter[2].innerHTML = alphabet_six[2];
                innerLetter[3].innerHTML = alphabet_six[3];
                innerLetter[4].innerHTML = alphabet_six[4];
                innerLetter[5].innerHTML = alphabet_six[5];
                block = 6;
                number=1;
            }
        
    }

}

// buttonThree


buttonTwo.addEventListener('mousedown', buttonTwo_mouseDownHandler);

function buttonTwo_mouseDownHandler() {
  buttonTwo.removeEventListener('mousedown', buttonTwo_mouseDownHandler);
  buttonTwo.addEventListener('mouseup', buttonTwo_mouseUpHandler);
  time.startTime = Date.now();
}

function buttonTwo_mouseUpHandler() {
  buttonTwo.removeEventListener('mouseup', buttonTwo_mouseUpHandler);
  buttonTwo.addEventListener('mousedown', buttonTwo_mouseDownHandler);
  time.endTime = Date.now();
  inputTime(time);
}

// alphabet
let numberTwo = 1;
function inputTime({ startTime, endTime }) {
  let elapsedTime = (endTime - startTime) / MILLESECOND_TO_SECOND;
    if(elapsedTime <0.5){
        if (numberTwo >6){
            numberTwo = 1;
        }

        boxColorTop += 36;
        if(boxColorTop < 200){
            boxColor.style.top = boxColorTop + "px";
            if (numberTwo >6){
                numberTwo = 0;
            }
            numberTwo += 1;
        }
        else{
        boxColorTop = 0;
        boxColor.style.top = boxColorTop + "px";
        numberTwo=1;
       }
     }
    
    else if(elapsedTime >= 0.5){
        boxColorTop=0;
        boxColor.style.top = boxColorTop + "px";
        buttonTwo.style.display = "none";
        button.style.display = "flex";
        for(let i = 0; i < 6; i++){
        innerLetter[i].innerHTML = alphabet_number[i];
        }
        if (block == 1){
            textareOne.innerHTML += alphabet_one[numberTwo-1];
            numberTwo=1;
        
        }
        else if (block == 2){
            textareOne.innerHTML += alphabet_two[numberTwo-1];
            numberTwo=1;
        
        }
        else if (block == 3){
            textareOne.innerHTML += alphabet_three[numberTwo-1];
            numberTwo=1;
        
        }
        else if (block == 4){
            textareOne.innerHTML += alphabet_four[numberTwo-1];
            numberTwo=1;
        
        }
        else if (block == 5){
            textareOne.innerHTML += alphabet_five[numberTwo-1];
            numberTwo=1;
        
        }
        else if (block == 6){
            textareOne.innerHTML += alphabet_six[numberTwo-1];
            numberTwo=1;
        
        }
        // for(let i = 0; i < 6; i++){
        //         textareOne.innerHTML += alphabet_number[i][0];
        //     }

        }
    }


