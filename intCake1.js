// Suppose we could access yesterday's stock prices as a list, where:

// The indices are the time in minutes past trade opening time, which was 9:30am local time.
// The values are the price in dollars of Apple stock at that time.
// So if the stock cost $500 at 10:30am, stock_prices_yesterday[60] = 500.

// Write an efficient function that takes stock_prices_yesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.

// Example:
// stockPricesYesterday = [10, 7, 5, 8, 11, 9]

// getMaxProfit(stockPricesYesterday)
// # returns 6 (buying for $5 and selling for $11)

// No "shorting"—you must buy before you sell. You may not buy and sell in the same time step (at least 1 minute must pass).

function getMaxProfit(stockPricesYesterday) {
  if (stockPricesYesterday.length < 2) {
    return "Need more prices";
  }

  var startPrice = stockPricesYesterday[0];
  var maxProfit = stockPricesYesterday[1] - stockPricesYesterday[0];

  for (var i = 1; i < stockPricesYesterday.length - 1; i++) {
    var profit = stockPricesYesterday[i] - startPrice;

    maxProfit = Math.max(maxProfit, profit);

    startPrice = Math.min(startPrice, stockPricesYesterday[i]);
  }

  return maxProfit;
}

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
// stockPricesYesterday = [10];

console.log(getMaxProfit(stockPricesYesterday));