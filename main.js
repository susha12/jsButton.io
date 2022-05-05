let time = { startTime: NaN, endTime: NaN };
let button = document.body.querySelector('span');
let textareOne = document.querySelector("#w3review");
let textareTwo = document.querySelector("#w3review_2");

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

const MILLESECOND_TO_SECOND = 1000;

function inputTime({ startTime, endTime }) {
  let elapsedTime = (endTime - startTime) / MILLESECOND_TO_SECOND;
    
  console.log(`elapsed time: ${ elapsedTime }s.`);
//   button.innerHTML = elapsedTime;
  if(elapsedTime < 1){
    textareOne.innerHTML = `менше единицы, нажатие равно =  ${elapsedTime} секунда`;
    textareTwo.innerHTML = ``;
  }
  else {
    textareOne.innerHTML = ``;
    textareTwo.innerHTML = `равно или больше единицы, нажатие равно =  ${elapsedTime} секунда`;
  }
}