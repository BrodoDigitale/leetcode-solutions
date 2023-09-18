/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [[1]];
    let row = 0;

    while (row < numRows - 1 ) {
        const arr = [];
        const temp = res[row];

        for(let i = 0; i <= temp.length; i++) {
            let prev = temp[i - 1] || 0;
            let next = temp[i] || 0;

            const num = prev + next;
            arr.push(num);
        }
        res.push(arr);
        row++;
    }

    return res;
};