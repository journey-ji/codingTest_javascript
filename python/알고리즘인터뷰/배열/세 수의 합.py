def threeSum(nums):
    results = []
    nums.sort()

    # left, right 투포인터가 들어갈 2 자리 남겨두어야 하니까 len(nums)-2 

    for i in range(len(nums)-2):
        # 중복값은 넘어가도록 함 ( 첫번째는 수행, 두번째부터 넘어감)
        if i > 0 and nums[i] == nums[i-1]:
            continue
        left,right = i+1,len(nums)-1
        while left < right:
            sum = nums[i] + nums[left] + nums[right]
            if sum < 0:
                left +=1
            elif sum >0:
                right -=1
            else:
                results.append([nums[i],nums[left],nums[right]])

                while left<right and nums[left] == nums[left+1]:
                    left +=1
                while left<right and nums[right] == nums[right-1]:
                    right -=1
                left +=1
                right -=1
    return results


print(threeSum([-1,0,1,2,-1,-4]))
# -4 -1 -1 0 1 2 