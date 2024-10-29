function calculateParallelogramArea() {
    const gettingInputFromBase = getElementByIds('base-input-Prl');
    const gettingInputFromHeight = getElementByIds('hieght-input-Prl');
    const calculate = gettingInputFromBase*gettingInputFromHeight;
    console.log("Area of the Parallelogram is = "+ calculate);
    const setValue = document.getElementById('set-parallelogram-value');
    //add color for style
    setValue.style.color='red';
    setValue.innerText = calculate;
}



//this function can get value from any Input field 
function getElementByIds(id) {
    const gettingBaseInput = document.getElementById(id)
    const gettingValue = gettingBaseInput.value;
    const replacingValueAsNumber = parseFloat(gettingValue);
   return replacingValueAsNumber;   
    
}