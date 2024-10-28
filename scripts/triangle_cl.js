//calculate the triangle area from user input
//1.step (get base)
//2.added ('ID') to access the input feald
//3. get value from the input
//4. converte the value as number because Input fieald is "srting".
//5. calculate the triangle

function calculateTriangleArea() {
    //get triangle base
    const getTriangleBase = document.getElementById("triangle-base");
    const tirangleBaseValue = getTriangleBase.value;
    const getNumberInputAsNumber = parseFloat(tirangleBaseValue);
        
    //get traingle heaight
    const getTriangleHeight = document.getElementById('triangle-height');
    const getHeightvalue = getTriangleHeight.value;
    const getInputAsNumber = parseFloat(getHeightvalue);
       
    // pritning--Calculatio
    const calcualteTheProblem = 0.5* getNumberInputAsNumber* getInputAsNumber;
    console.log("Area of the triangle is = " + calcualteTheProblem);
   
    //setting the value in the <span> tag. Because we want to watch the value in the card.
    const setvalue = document.getElementById('set-triangle-value');

    //We setting the color for eye comfort nothing else! 
    setvalue.style.color = 'red';
    setvalue.innerText = calcualteTheProblem;

}