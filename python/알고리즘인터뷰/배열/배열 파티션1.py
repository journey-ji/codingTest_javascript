def arrayPairSum(nums):
    return sum(sorted(nums)[::2])
print(arrayPairSum([3,1,2,4]))