function calculateRactangleArea() {

// getiing input width 
const gettingWidth = document.getElementById('width-input');
const gettingWidhValue= gettingWidth.value;
const makeInputValueInFloatNumber = parseFloat(gettingWidhValue);
// console.log(makeInputValueInFloatNumber)

// getting input length
const gettingLenght = document.getElementById('lenght-input');
const gettingLenghtValue = gettingLenght.value;
const makeValueAsFloatNumber = parseFloat(gettingLenghtValue);
// console.log(makeValueAsFloatNumber);

// calculating rectangle Area 
const area = makeInputValueInFloatNumber* makeValueAsFloatNumber;
console.log("Area of the Rectangle is = "+ area);

// setting value in <span> tag
const setvalue = document.getElementById('set-rectangle-value');
// add color for eye comfo
setvalue.style.color = 'red';
////
setvalue.innerText = area;
    
}

