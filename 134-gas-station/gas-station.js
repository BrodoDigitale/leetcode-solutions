/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    
    const gasSum = gas.reduce((acc, val) => acc + val, 0);
    const costSum = cost.reduce((acc, val) => acc + val, 0);

    if(gasSum < costSum) {
        return -1;
    }

    let sum = 0;
    let res = 0;

    for(let i = 0; i < gas.length; i++) {
        sum += gas[i] - cost[i];
        if(sum < 0) {
            sum = 0;
            res = i + 1;
        } 
    }

    return res;

};