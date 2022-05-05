let time = { startTime: NaN, endTime: NaN };
let button = document.body.querySelector('span');
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
  inputTime(time);
}
// Array
const alphabet = [
    ['А','Б','В','Г','Д','Е'],
    ['Ё','Ж','З','И','Й','К'],
    ['Л','М','Н','О','П','Р'],
    ['С','Т','У','Ф','Х','Ц'],
    ['Ч','Ш','Щ','Ъ','Ы','Ь'],
    ['Ы','Ь','Э','Ю','Я','Пробел']
];

let number = 0;
const MILLESECOND_TO_SECOND = 1000;
// alphabet
let numb = 5;
for(let i = 0; i < alphabet.length; i++){
    innerLetter[i].innerHTML = alphabet.length - numb;
    numb--;
}
let colump = 0;
let row = 0;
function inputTime({ startTime, endTime }) {
    
  let elapsedTime = (endTime - startTime) / MILLESECOND_TO_SECOND;
    if(elapsedTime <0.5){
        if(colump = 6){
            colump = 0;
            colump++;
        }
        if(row = 6){
            row = 0;
            row++;
        }
        boxColorTop += 36;
        if(boxColorTop < 200){
            boxColor.style.top = boxColorTop + "px";
        number++;
        }
        else{
        boxColorTop = 0;
        boxColor.style.top = boxColorTop + "px";
        number = 0;
        console.log(number)
       }
     }
    
    else if(elapsedTime >= 0.5 && elapsedTime < 1){
        row = 0;
        colump = 0;
        boxColorTop = 0;
        boxColor.style.top = boxColorTop + "px";
            for(let a = 0; a< alphabet[number].length; a++){
                innerLetter[a].innerHTML = alphabet[number][a];
            }
    }
    // else if(elapsedTime > 1){

    //     textareOne.innerHTML += alphabet[colump][row];
    //     boxColorTop = 0;
    //     boxColor.style.top = boxColorTop + "px"; 
    //     ourNull()
    // }
}
function ourNull(){
    let numb = 5;
for(let i = 0; i < alphabet.length; i++){
    innerLetter[i].innerHTML = alphabet.length - numb;
    numb--;
}
}
