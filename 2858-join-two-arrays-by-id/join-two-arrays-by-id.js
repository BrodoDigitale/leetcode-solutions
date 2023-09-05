/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    if(!arr1.length) return arr2;
    if(!arr2.length) return arr1;

    let result = {};
        arr1.forEach(item => {
        result[item.id] = item;
    });
  

        for (let i = 0; i < arr2.length; i++) {
        if (result[arr2[i].id]) {
            for (const key in arr2[i]) result[arr2[i].id][key] = arr2[i][key];  
        } else {
            result[arr2[i].id] = arr2[i];
        }
    } 



    return Object.values(result);
 };