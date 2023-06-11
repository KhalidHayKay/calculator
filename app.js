function evaluation(num, output) {
    const squareRootSign = btns[3].textContent;
    const squareSign = btns[2].textContent;
    const exponential = btns[4].textContent;

    let calculatedAnswer;
    if(num.startsWith(squareRootSign)){
        let SquareRootNumber = num.replace(squareRootSign, '');
        calculatedAnswer = Math.sqrt(SquareRootNumber);
    } else if(num.endsWith(squareSign)){
        let squareNumber = num.replace(squareSign, '');
        calculatedAnswer = Math.pow(squareNumber, 2);
    } else if(num.includes(exponential)){
        const exponentialBase = num.slice(0, num.indexOf(exponential));
        const exponentialPower = num.slice(num.indexOf(exponential) + 1);
        calculatedAnswer = Math.pow(exponentialBase, exponentialPower);
    } else {
        calculatedAnswer = eval(num);
    }
    output.textContent = calculatedAnswer;
}


const btns = (document.querySelectorAll('.btn'));
btns.forEach(btn => {
    btn.addEventListener('click', e => {
        operation.textContent += e.target.textContent;
    }) 
})


//  EVALUATION BTN
const operation = document.querySelector('.operation');
let answer = document.querySelector('.answer');
document.querySelector('.equalto-btn').addEventListener('click', e => {
    try {
        evaluation(operation.textContent, answer);
    } catch (error) {
        answer.textContent = 'Syntax ERROR';
    }
});

//CLEAR BUTTON
document.querySelector('.clear-btn')
.addEventListener('click', e => {
    operation.textContent = '';
    answer.textContent = '';
})

//DELETE(BACKSPACE) BUTTON
document.querySelector('.backspace-btn')
.addEventListener('click', (e) => {
    newValue = operation.textContent.slice(0, operation.textContent.length-1);
    operation.textContent = newValue;
})

//  ANS-button prints the calculated answer into the question area
document.querySelector('.ans-btn')
.addEventListener('click', e => {
    if(isNaN(answer.textContent)){
        operation.textContent = '';
    } else {
        operation.textContent = answer.textContent;
    }
})



// function quadratic(a, b, c){
//     val1 = (-b + Math.sqrt((b * b) - (4 * a * c))) / (2 * a);
//     val2 = (-b - Math.sqrt((b * b) - (4 * a * c))) / (2 * a);

//     return val1 + ' and ' + val2;
// }
// console.log(quadratic(2, -4, -2));