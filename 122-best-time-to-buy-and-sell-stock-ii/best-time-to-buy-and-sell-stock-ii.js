/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = 0;
    let sell = 1;
    let profit = 0;

    while(sell < prices.length) {

        if(prices[buy] < prices[sell]) {
            //check if the trend is going down the next day
            if(prices[sell] > prices[sell + 1] || !prices[sell + 1]) {
                profit = profit + (prices[sell] - prices[buy]);
                buy = sell + 1;
            }

        } else {
            buy = sell;
        }
        sell++;
    }

    return profit;
};