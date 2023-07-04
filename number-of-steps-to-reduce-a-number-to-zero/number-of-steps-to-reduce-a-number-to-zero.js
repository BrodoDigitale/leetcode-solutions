/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let stepsCounter = 0;
    let counterNum = num;
    while(counterNum !== 0 ) {
        counterNum % 2 === 0 ? counterNum = counterNum / 2  : counterNum--;
        stepsCounter++;
    }
    return stepsCounter;
};