let operation = document.querySelector('.inputNumber');
let result = document.querySelector('.resultNumber');

const openBracket = document.getElementById('openBracket');
const closeBracket = document.getElementById('closeBracket');
const deleteAll = document.getElementById('del');
const deleteLast = document.getElementById('c');

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const add = document.getElementById('add');

const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const division = document.getElementById('division');

const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const multiple = document.getElementById('multiple');

const zero = document.getElementById('0');
const dot = document.getElementById('dot');
const equal = document.getElementById('equal');
const substraction = document.getElementById('substraction');

openBracket.addEventListener('click', ()=>{
  operation.textContent += `(`;
  openBracket.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

closeBracket.addEventListener('click', ()=>{
  operation.textContent += `)`
  closeBracket.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

deleteAll.addEventListener('click', ()=>{
  operation.textContent  = ` `
  result.textContent = '';
  result.className = 'resultNumber';

  openBracket.style.boxShadow = 'none';
  closeBracket.style.boxShadow = 'none';
  one.style.boxShadow = 'none';
  two.style.boxShadow = 'none';
  three.style.boxShadow = 'none';
  four.style.boxShadow = 'none';
  five.style.boxShadow = 'none';
  six.style.boxShadow = 'none';
  seven.style.boxShadow = 'none';
  eight.style.boxShadow = 'none';
  nine.style.boxShadow = 'none';
  zero.style.boxShadow = 'none';
  add.style.boxShadow = 'none';
  substraction.style.boxShadow = 'none';
  multiple.style.boxShadow = 'none';
  division.style.boxShadow = 'none';
  dot.style.boxShadow = 'none';
})

deleteLast.addEventListener('click', ()=>{
  operation.textContent = operation.textContent.toString().slice(0, -1);
  result.textContent = '';
  result.className = 'resultNumber';

  openBracket.style.boxShadow = 'none';
  closeBracket.style.boxShadow = 'none';
  one.style.boxShadow = 'none';
  two.style.boxShadow = 'none';
  three.style.boxShadow = 'none';
  four.style.boxShadow = 'none';
  five.style.boxShadow = 'none';
  six.style.boxShadow = 'none';
  seven.style.boxShadow = 'none';
  eight.style.boxShadow = 'none';
  nine.style.boxShadow = 'none';
  zero.style.boxShadow = 'none';
  add.style.boxShadow = 'none';
  substraction.style.boxShadow = 'none';
  multiple.style.boxShadow = 'none';
  division.style.boxShadow = 'none';
  dot.style.boxShadow = 'none';
})

one.addEventListener('click', ()=>{
  operation.textContent += `1`;
  result.textContent = '';
  result.className = 'resultNumber';
  one.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

two.addEventListener('click', ()=>{
  operation.textContent += `2`;
  result.textContent = '';
  result.className = 'resultNumber';
  two.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

three.addEventListener('click', ()=>{
  operation.textContent += `3`;
  result.textContent = '';
  result.className = 'resultNumber';
  three.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

four.addEventListener('click', ()=>{
  operation.textContent += `4`;
  result.textContent = '';
  result.className = 'resultNumber';
  four.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

five.addEventListener('click', ()=>{
  operation.textContent += `5`;
  result.textContent = '';
  result.className = 'resultNumber';
  five.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

six.addEventListener('click', ()=>{
  operation.textContent += `6`;
  result.textContent = '';
  result.className = 'resultNumber';
  six.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

seven.addEventListener('click', ()=>{
  operation.textContent += `7`;
  result.textContent = '';
  result.className = 'resultNumber';
  seven.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

eight.addEventListener('click', ()=>{
  operation.textContent += `8`;
  result.textContent = '';
  result.className = 'resultNumber';
  eight.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

nine.addEventListener('click', ()=>{
  operation.textContent += `9`;
  result.textContent = '';
  result.className = 'resultNumber';
  nine.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

zero.addEventListener('click', ()=>{
  operation.textContent += `0`;
  result.textContent = '';
  result.className = 'resultNumber';
  zero.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

dot.addEventListener('click', ()=>{
  operation.textContent += '.';
  result.textContent = '';
  result.className = 'resultNumber';
  dot.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

add.addEventListener('click', ()=>{
  operation.textContent += ` + `;
  result.textContent = '';
  result.className = 'resultNumber';
  add.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

substraction.addEventListener('click', ()=>{
  operation.textContent += ` - `;
  result.textContent = '';
  result.className = 'resultNumber';
  substraction.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

multiple.addEventListener('click', ()=>{
  operation.textContent += ` * `;
  result.textContent = '';
  result.className = 'resultNumber';
  multiple.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

division.addEventListener('click', ()=>{
  operation.textContent += ` / `;
  result.textContent = '';
  result.className = 'resultNumber';
  division.style.boxShadow = '1px 1px 2px black, 0 0 25px white, 0 0 5px white';
})

equal.addEventListener('click', ()=>{
  result.className = 'resultNumber-visible';
  let finalNumber = eval(operation.textContent);
  result.textContent = ` = ${finalNumber}`;
  
  openBracket.style.boxShadow = 'none';
  closeBracket.style.boxShadow = 'none';
  one.style.boxShadow = 'none';
  two.style.boxShadow = 'none';
  three.style.boxShadow = 'none';
  four.style.boxShadow = 'none';
  five.style.boxShadow = 'none';
  six.style.boxShadow = 'none';
  seven.style.boxShadow = 'none';
  eight.style.boxShadow = 'none';
  nine.style.boxShadow = 'none';
  zero.style.boxShadow = 'none';
  add.style.boxShadow = 'none';
  substraction.style.boxShadow = 'none';
  multiple.style.boxShadow = 'none';
  division.style.boxShadow = 'none';
  dot.style.boxShadow = 'none';
})
