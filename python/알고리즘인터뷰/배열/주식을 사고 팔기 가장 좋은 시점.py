import sys
def maxProfit(prices):
    profit = 0
    min_profit = sys.maxsize

    for price in prices:
        profit = max(profit, price-min_profit)
        min_profit = min(min_profit, price)

    return profit


print(maxProfit([7,1,5,3,6,4]))